import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { MusicPlayer } from '../MusicPlayer';
import { AuthProvider } from '../../contexts/AuthContext';

// Audio API 모킹
Object.defineProperty(window.HTMLMediaElement.prototype, 'play', {
  writable: true,
  value: jest.fn().mockImplementation(() => Promise.resolve()),
});

Object.defineProperty(window.HTMLMediaElement.prototype, 'pause', {
  writable: true,
  value: jest.fn(),
});

Object.defineProperty(window.HTMLMediaElement.prototype, 'load', {
  writable: true,
  value: jest.fn(),
});

// Firebase Auth 모킹
jest.mock('../../lib/firebase', () => ({
  auth: {
    currentUser: { uid: 'test-user', email: 'test@example.com' }
  },
  db: {},
  storage: {}
}));

// AuthContext 모킹
jest.mock('../../contexts/AuthContext', () => ({
  AuthProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  useAuth: () => ({
    user: { uid: 'test-user', email: 'test@example.com' },
    loading: false,
    error: null
  })
}));

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      <AuthProvider>
        {component}
      </AuthProvider>
    </BrowserRouter>
  );
};

describe('MusicPlayer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // 오디오 속성 초기화
    Object.defineProperty(window.HTMLMediaElement.prototype, 'currentTime', {
      writable: true,
      value: 0,
    });
    Object.defineProperty(window.HTMLMediaElement.prototype, 'duration', {
      writable: true,
      value: 180,
    });
  });

  describe('컴포넌트 렌더링', () => {
    it('로그인된 사용자에게만 표시되어야 한다', () => {
      renderWithProviders(<MusicPlayer />);
      
      expect(screen.getByText('Glass Vault')).toBeInTheDocument();
      expect(screen.getByText('Moonwave')).toBeInTheDocument();
    });

    it('기본 컨트롤 버튼들이 표시되어야 한다', () => {
      renderWithProviders(<MusicPlayer />);
      
      expect(screen.getByLabelText(/셔플/)).toBeInTheDocument();
      expect(screen.getByLabelText(/이전 트랙/)).toBeInTheDocument();
      expect(screen.getByLabelText(/재생/)).toBeInTheDocument();
      expect(screen.getByLabelText(/다음 트랙/)).toBeInTheDocument();
    });

    it('진행률 바가 표시되어야 한다', () => {
      renderWithProviders(<MusicPlayer />);
      
      // 진행률 바가 div로 구현됨
      const progressBar = document.querySelector('.h-full.bg-gradient-to-r');
      expect(progressBar).toBeInTheDocument();
    });
  });

  describe('재생 기능', () => {
    it('재생 버튼 클릭 시 음악이 재생되어야 한다', async () => {
      const mockPlay = jest.fn().mockResolvedValue(undefined);
      window.HTMLMediaElement.prototype.play = mockPlay;

      renderWithProviders(<MusicPlayer />);
      
      const playButton = screen.getByLabelText(/재생/);
      fireEvent.click(playButton);

      await waitFor(() => {
        expect(mockPlay).toHaveBeenCalled();
      });

      // 재생 상태에서는 일시정지 버튼이 표시되어야 함
      expect(screen.getByLabelText(/일시정지/)).toBeInTheDocument();
    });

    it('일시정지 버튼 클릭 시 음악이 멈춰야 한다', async () => {
      const mockPlay = jest.fn().mockResolvedValue(undefined);
      const mockPause = jest.fn();
      window.HTMLMediaElement.prototype.play = mockPlay;
      window.HTMLMediaElement.prototype.pause = mockPause;

      renderWithProviders(<MusicPlayer />);
      
      // 먼저 재생 시작
      const playButton = screen.getByLabelText(/재생/);
      fireEvent.click(playButton);

      await waitFor(() => {
        expect(screen.getByLabelText(/일시정지/)).toBeInTheDocument();
      });

      // 일시정지 클릭
      const pauseButton = screen.getByLabelText(/일시정지/);
      fireEvent.click(pauseButton);

      await waitFor(() => {
        expect(mockPause).toHaveBeenCalled();
      });
    });
  });

  describe('트랙 변경', () => {
    it('다음 트랙 버튼 클릭 시 트랙이 변경되어야 한다', async () => {
      const mockPlay = jest.fn().mockResolvedValue(undefined);
      window.HTMLMediaElement.prototype.play = mockPlay;

      renderWithProviders(<MusicPlayer />);
      
      const initialTrack = screen.getByText('Glass Vault');
      expect(initialTrack).toBeInTheDocument();

      const nextButton = screen.getByLabelText(/다음 트랙/);
      fireEvent.click(nextButton);

      // 트랙이 변경되었는지 확인 (셔플 모드이므로 랜덤)
      await waitFor(() => {
        expect(mockPlay).toHaveBeenCalled();
      });
    });

    it('이전 트랙 버튼 클릭 시 트랙이 변경되어야 한다', async () => {
      const mockPlay = jest.fn().mockResolvedValue(undefined);
      window.HTMLMediaElement.prototype.play = mockPlay;

      renderWithProviders(<MusicPlayer />);
      
      const prevButton = screen.getByLabelText(/이전 트랙/);
      fireEvent.click(prevButton);

      await waitFor(() => {
        expect(mockPlay).toHaveBeenCalled();
      });
    });
  });

  describe('셔플 모드', () => {
    it('셔플 버튼 클릭 시 모드가 토글되어야 한다', () => {
      renderWithProviders(<MusicPlayer />);
      
      const shuffleButton = screen.getByLabelText(/셔플/);
      
      // 기본적으로 셔플 모드가 활성화되어 있어야 함
      expect(shuffleButton).toHaveClass('text-primary-400');

      fireEvent.click(shuffleButton);
      
      // 클릭 후 비활성화되어야 함
      expect(shuffleButton).toHaveClass('text-white/60');
    });
  });

  describe('볼륨 제어', () => {
    it('볼륨 슬라이더가 표시되어야 한다', () => {
      renderWithProviders(<MusicPlayer />);
      
      const volumeSlider = screen.getByRole('slider');
      expect(volumeSlider).toBeInTheDocument();
      expect(volumeSlider).toHaveValue('0.7'); // 기본 볼륨
    });

    it('음소거 버튼이 작동해야 한다', () => {
      renderWithProviders(<MusicPlayer />);
      
      const muteButton = screen.getByLabelText(/음소거$/);
      expect(muteButton).toBeInTheDocument();

      fireEvent.click(muteButton);
      
      // 음소거 후에는 음소거 해제 버튼이 표시되어야 함
      expect(screen.getByLabelText(/음소거 해제/)).toBeInTheDocument();
    });
  });

  describe('에러 처리', () => {
    it('재생 실패 시 에러를 적절히 처리해야 한다', async () => {
      const mockPlay = jest.fn().mockRejectedValue(new Error('재생 실패'));
      window.HTMLMediaElement.prototype.play = mockPlay;

      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

      renderWithProviders(<MusicPlayer />);
      
      const playButton = screen.getByLabelText(/재생/);
      fireEvent.click(playButton);

      await waitFor(() => {
        expect(consoleSpy).toHaveBeenCalledWith('재생 오류:', expect.any(Error));
      });

      consoleSpy.mockRestore();
    });
  });

  describe('시간 표시', () => {
    it('현재 시간과 총 시간이 표시되어야 한다', () => {
      renderWithProviders(<MusicPlayer />);
      
      // 시간 표시는 md: 이상에서만 보임
      const timeDisplay = screen.getByText(/0:00 \/ 0:00/);
      expect(timeDisplay).toBeInTheDocument();
    });
  });
});