import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Home } from '../Home';
import * as firestore from 'firebase/firestore';
import { useAuth } from '../../contexts';

// React Router 모킹
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

// Firebase Firestore 모킹
jest.mock('firebase/firestore', () => ({
  collection: jest.fn(),
  query: jest.fn(),
  where: jest.fn(),
  orderBy: jest.fn(),
  onSnapshot: jest.fn(),
  doc: jest.fn(),
  deleteDoc: jest.fn(),
}));

// AuthContext 모킹
jest.mock('../../contexts', () => ({
  useAuth: jest.fn(),
}));

// 컴포넌트 모킹
jest.mock('../../components/Header', () => ({
  Header: () => <div data-testid="header">Header</div>
}));

jest.mock('../../components/Footer', () => ({
  Footer: () => <div data-testid="footer">Footer</div>
}));

jest.mock('../../components/TripCard', () => ({
  TripCard: ({ trip, onClick, onEdit, onDelete }: any) => (
    <div data-testid={`trip-card-${trip.id}`}>
      <div>{trip.title}</div>
      <button onClick={onClick} data-testid={`trip-click-${trip.id}`}>View</button>
      <button onClick={onEdit} data-testid={`trip-edit-${trip.id}`}>Edit</button>
      <button onClick={onDelete} data-testid={`trip-delete-${trip.id}`}>Delete</button>
    </div>
  )
}));

// Firebase 앱 모킹
jest.mock('../../lib/firebase', () => ({
  db: {}
}));

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Home', () => {
  const mockUser = { uid: 'test-uid', email: 'test@test.com' };
  const mockTrips = [
    {
      id: 'trip1',
      title: 'Seoul Trip',
      destination: 'Seoul',
      start_date: '2025-09-01',
      end_date: '2025-09-03',
      plans_count: 3,
      user_id: 'test-uid',
      created_at: '2025-08-01'
    },
    {
      id: 'trip2',
      title: 'Busan Trip',
      destination: 'Busan',
      start_date: '2025-07-01',
      end_date: '2025-07-03',
      plans_count: 2,
      user_id: 'test-uid',
      created_at: '2025-07-01'
    }
  ];

  let mockUseAuth: jest.Mock;
  let mockOnSnapshot: jest.Mock;
  let mockDeleteDoc: jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
    
    mockUseAuth = useAuth as unknown as jest.Mock;
    mockOnSnapshot = firestore.onSnapshot as jest.Mock;
    mockDeleteDoc = firestore.deleteDoc as jest.Mock;
    
    // Firebase 함수들 기본 모킹
    (firestore.collection as jest.Mock).mockReturnValue({});
    (firestore.query as jest.Mock).mockReturnValue({});
    (firestore.where as jest.Mock).mockReturnValue({});
    (firestore.orderBy as jest.Mock).mockReturnValue({});
    (firestore.doc as jest.Mock).mockReturnValue({});

    // Window alert 모킹
    window.alert = jest.fn();
  });

  describe('인증 상태', () => {
    it('로딩 중일 때 로딩 메시지를 표시해야 한다', () => {
      mockUseAuth.mockReturnValue({ user: null, loading: true });

      renderWithRouter(<Home />);

      expect(screen.getByText('로딩 중...')).toBeInTheDocument();
    });

    it('로그인하지 않은 경우 로그인 페이지로 리다이렉트해야 한다', () => {
      mockUseAuth.mockReturnValue({ user: null, loading: false });

      renderWithRouter(<Home />);

      expect(mockNavigate).toHaveBeenCalledWith('/login');
    });

    it('로그인한 사용자에게는 홈 페이지를 표시해야 한다', async () => {
      mockUseAuth.mockReturnValue({ user: mockUser, loading: false });
      mockOnSnapshot.mockImplementation((query, callback) => {
        callback({ docs: [] });
        return jest.fn();
      });

      renderWithRouter(<Home />);

      await waitFor(() => {
        expect(screen.getByTestId('header')).toBeInTheDocument();
        expect(screen.getByTestId('footer')).toBeInTheDocument();
        expect(screen.getByText('내 여행')).toBeInTheDocument();
      });

      expect(mockNavigate).not.toHaveBeenCalled();
    });
  });

  describe('여행 데이터 로딩', () => {
    beforeEach(() => {
      mockUseAuth.mockReturnValue({ user: mockUser, loading: false });
    });

    it('사용자의 여행 데이터를 로드해야 한다', async () => {
      mockOnSnapshot.mockImplementation((query, callback) => {
        const mockSnapshot = {
          docs: mockTrips.map(trip => ({
            id: trip.id,
            data: () => ({ ...trip })
          }))
        };
        callback(mockSnapshot);
        return jest.fn();
      });

      renderWithRouter(<Home />);

      await waitFor(() => {
        expect(firestore.collection).toHaveBeenCalledWith({}, 'trips');
        expect(firestore.where).toHaveBeenCalledWith('user_id', '==', 'test-uid');
        expect(firestore.orderBy).toHaveBeenCalledWith('created_at', 'desc');
      });

      expect(screen.getByTestId('trip-card-trip1')).toBeInTheDocument();
      expect(screen.getByTestId('trip-card-trip2')).toBeInTheDocument();
    });

    it('여행이 없을 때 빈 상태 메시지를 표시해야 한다', async () => {
      mockOnSnapshot.mockImplementation((query, callback) => {
        callback({ docs: [] });
        return jest.fn();
      });

      renderWithRouter(<Home />);

      await waitFor(() => {
        expect(screen.getByText('아직 여행이 없어요')).toBeInTheDocument();
        expect(screen.getByText('첫 번째 여행 만들기')).toBeInTheDocument();
      });
    });

    it('여행 데이터 로딩 실패 시 에러를 처리해야 한다', async () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      
      // onSnapshot이 Promise를 반환하도록 모킹 (실패 시나리오)
      mockOnSnapshot.mockImplementation(() => {
        throw { message: 'Firestore error' };
      });

      renderWithRouter(<Home />);

      await waitFor(() => {
        expect(consoleSpy).toHaveBeenCalledWith('여행 데이터 로드 실패:', expect.any(Error));
      });

      consoleSpy.mockRestore();
    });
  });

  describe('통계 카드', () => {
    beforeEach(() => {
      mockUseAuth.mockReturnValue({ user: mockUser, loading: false });
    });

    it('여행 통계를 올바르게 계산하여 표시해야 한다', async () => {
      // 과거와 현재 여행을 포함한 데이터
      const tripsWithStats = [
        {
          ...mockTrips[0],
          end_date: '2025-12-01', // 미래 여행
          plans_count: 3
        },
        {
          ...mockTrips[1],
          end_date: '2025-07-03', // 과거 여행 (완료)
          plans_count: 2
        }
      ];

      mockOnSnapshot.mockImplementation((query, callback) => {
        const mockSnapshot = {
          docs: tripsWithStats.map(trip => ({
            id: trip.id,
            data: () => ({ ...trip })
          }))
        };
        callback(mockSnapshot);
        return jest.fn();
      });

      renderWithRouter(<Home />);

      await waitFor(() => {
        // 총 여행 수: 2
        const tripCountElements = screen.getAllByText('2');
        expect(tripCountElements[0]).toBeInTheDocument();
        
        // 총 일정 수: 5 (3 + 2)
        expect(screen.getByText('5')).toBeInTheDocument();
        
        // 완료된 여행 수: 1
        const completedTripElements = screen.getAllByText('1');
        expect(completedTripElements[0]).toBeInTheDocument();
      });
    });
  });

  describe('사용자 상호작용', () => {
    beforeEach(() => {
      mockUseAuth.mockReturnValue({ user: mockUser, loading: false });
      mockOnSnapshot.mockImplementation((query, callback) => {
        const mockSnapshot = {
          docs: mockTrips.map(trip => ({
            id: trip.id,
            data: () => ({ ...trip })
          }))
        };
        callback(mockSnapshot);
        return jest.fn();
      });
    });

    it('새 여행 만들기 버튼 클릭 시 여행 생성 페이지로 이동해야 한다', async () => {
      renderWithRouter(<Home />);

      await waitFor(() => {
        expect(screen.getByText('새 여행 만들기')).toBeInTheDocument();
      });

      fireEvent.click(screen.getByText('새 여행 만들기'));
      expect(mockNavigate).toHaveBeenCalledWith('/trips/new');
    });

    it('빈 상태에서 첫 번째 여행 만들기 버튼 클릭 시 여행 생성 페이지로 이동해야 한다', async () => {
      mockOnSnapshot.mockImplementation((query, callback) => {
        callback({ docs: [] });
        return jest.fn();
      });

      renderWithRouter(<Home />);

      await waitFor(() => {
        expect(screen.getByText('첫 번째 여행 만들기')).toBeInTheDocument();
      });

      fireEvent.click(screen.getByText('첫 번째 여행 만들기'));
      expect(mockNavigate).toHaveBeenCalledWith('/trips/new');
    });

    it('여행 카드 클릭 시 여행 상세 페이지로 이동해야 한다', async () => {
      renderWithRouter(<Home />);

      await waitFor(() => {
        expect(screen.getByTestId('trip-click-trip1')).toBeInTheDocument();
      });

      fireEvent.click(screen.getByTestId('trip-click-trip1'));
      expect(mockNavigate).toHaveBeenCalledWith('/trips/trip1');
    });

    it('여행 편집 버튼 클릭 시 여행 편집 페이지로 이동해야 한다', async () => {
      renderWithRouter(<Home />);

      await waitFor(() => {
        expect(screen.getByTestId('trip-edit-trip1')).toBeInTheDocument();
      });

      fireEvent.click(screen.getByTestId('trip-edit-trip1'));
      expect(mockNavigate).toHaveBeenCalledWith('/trips/trip1/edit');
    });

    it('여행 삭제 버튼 클릭 시 여행을 삭제해야 한다', async () => {
      mockDeleteDoc.mockResolvedValue(undefined);

      renderWithRouter(<Home />);

      await waitFor(() => {
        expect(screen.getByTestId('trip-delete-trip1')).toBeInTheDocument();
      });

      fireEvent.click(screen.getByTestId('trip-delete-trip1'));

      await waitFor(() => {
        expect(firestore.doc).toHaveBeenCalledWith({}, 'trips', 'trip1');
        expect(mockDeleteDoc).toHaveBeenCalled();
      });
    });

    it('여행 삭제 실패 시 에러 메시지를 표시해야 한다', async () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      mockDeleteDoc.mockRejectedValue({ message: 'Delete failed' });

      renderWithRouter(<Home />);

      await waitFor(() => {
        expect(screen.getByTestId('trip-delete-trip1')).toBeInTheDocument();
      });

      fireEvent.click(screen.getByTestId('trip-delete-trip1'));

      await waitFor(() => {
        expect(consoleSpy).toHaveBeenCalledWith('여행 삭제 실패:', expect.any(Error));
        expect(window.alert).toHaveBeenCalledWith('여행 삭제에 실패했습니다.');
      });

      consoleSpy.mockRestore();
    });

    it('ID가 없는 여행은 삭제할 수 없어야 한다', async () => {
      const tripsWithoutId = [{ ...mockTrips[0], id: undefined }];
      mockOnSnapshot.mockImplementation((query, callback) => {
        const mockSnapshot = {
          docs: tripsWithoutId.map(trip => ({
            id: trip.id,
            data: () => ({ ...trip })
          }))
        };
        callback(mockSnapshot);
        return jest.fn();
      });

      renderWithRouter(<Home />);

      await waitFor(() => {
        expect(screen.getByTestId('trip-delete-undefined')).toBeInTheDocument();
      });

      fireEvent.click(screen.getByTestId('trip-delete-undefined'));

      expect(mockDeleteDoc).not.toHaveBeenCalled();
    });
  });

  describe('컴포넌트 언마운트', () => {
    it('구독 해제 함수가 호출되어야 한다', () => {
      const unsubscribe = jest.fn();
      mockUseAuth.mockReturnValue({ user: mockUser, loading: false });
      mockOnSnapshot.mockReturnValue(unsubscribe);

      const { unmount } = renderWithRouter(<Home />);
      unmount();

      expect(unsubscribe).toHaveBeenCalled();
    });

    it('구독 해제 함수가 함수가 아닐 때 에러가 발생하지 않아야 한다', () => {
      mockUseAuth.mockReturnValue({ user: mockUser, loading: false });
      mockOnSnapshot.mockReturnValue('not-a-function');

      const { unmount } = renderWithRouter(<Home />);
      
      // 에러가 발생하지 않고 정상적으로 언마운트되어야 함
      expect(() => unmount()).not.toThrow();
    });
  });
});