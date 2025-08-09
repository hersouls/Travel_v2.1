# 테스트 구현 가이드

## 🚀 빠른 시작

### 1. 테스트 환경 설정

```bash
# 테스트 의존성 설치
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom

# Playwright E2E 테스트 설정
npm install --save-dev @playwright/test
npx playwright install
```

### 2. Jest 설정 업데이트

```javascript
// jest.config.js
export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapping: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/main.tsx',
    '!src/vite-env.d.ts'
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  }
};
```

### 3. 테스트 유틸리티 설정

```typescript
// src/utils/test-utils.tsx
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <BrowserRouter>
      <AuthProvider>
        {children}
      </AuthProvider>
    </BrowserRouter>
  );
};

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
```

## 🎵 MusicPlayer 테스트 예시

```typescript
// src/components/__tests__/MusicPlayer.test.tsx
import { render, screen, fireEvent, waitFor } from '../../utils/test-utils';
import { MusicPlayer } from '../MusicPlayer';

// Audio API 모킹
Object.defineProperty(window.HTMLMediaElement.prototype, 'play', {
  writable: true,
  value: jest.fn().mockImplementation(() => Promise.resolve()),
});

Object.defineProperty(window.HTMLMediaElement.prototype, 'pause', {
  writable: true,
  value: jest.fn(),
});

describe('MusicPlayer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('기본 기능', () => {
    it('로그인된 사용자에게만 표시되어야 한다', () => {
      render(<MusicPlayer />);
      expect(screen.getByRole('button', { name: /재생/ })).toBeInTheDocument();
    });

    it('재생 버튼 클릭 시 음악이 재생되어야 한다', async () => {
      const mockPlay = jest.fn().mockResolvedValue(undefined);
      HTMLMediaElement.prototype.play = mockPlay;

      render(<MusicPlayer />);
      
      const playButton = screen.getByRole('button', { name: /재생/ });
      fireEvent.click(playButton);

      await waitFor(() => {
        expect(mockPlay).toHaveBeenCalled();
      });
    });

    it('트랙 변경 시 자동 재생되어야 한다', async () => {
      const mockPlay = jest.fn().mockResolvedValue(undefined);
      HTMLMediaElement.prototype.play = mockPlay;

      render(<MusicPlayer />);
      
      // 먼저 재생 시작
      const playButton = screen.getByRole('button', { name: /재생/ });
      fireEvent.click(playButton);

      // 다음 트랙 버튼 클릭
      const nextButton = screen.getByRole('button', { name: /다음 트랙/ });
      fireEvent.click(nextButton);

      await waitFor(() => {
        expect(mockPlay).toHaveBeenCalledTimes(2); // 초기 재생 + 트랙 변경 후 재생
      });
    });

    it('셔플 모드 토글이 작동해야 한다', () => {
      render(<MusicPlayer />);
      
      const shuffleButton = screen.getByRole('button', { name: /셔플/ });
      expect(shuffleButton).toHaveClass('text-primary-400'); // 기본 활성화

      fireEvent.click(shuffleButton);
      expect(shuffleButton).toHaveClass('text-white/60'); // 비활성화
    });
  });

  describe('에러 처리', () => {
    it('재생 실패 시 에러를 적절히 처리해야 한다', async () => {
      const mockPlay = jest.fn().mockRejectedValue(new Error('재생 실패'));
      HTMLMediaElement.prototype.play = mockPlay;

      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

      render(<MusicPlayer />);
      
      const playButton = screen.getByRole('button', { name: /재생/ });
      fireEvent.click(playButton);

      await waitFor(() => {
        expect(consoleSpy).toHaveBeenCalledWith('재생 토글 실패:', '재생 실패');
      });

      consoleSpy.mockRestore();
    });
  });
});
```

## 🔐 Auth 테스트 예시

```typescript
// src/pages/__tests__/Login.test.tsx
import { render, screen, fireEvent, waitFor } from '../../utils/test-utils';
import { Login } from '../Login';

// Firebase Auth 모킹
jest.mock('../../lib/firebase', () => ({
  auth: {
    signInWithEmailAndPassword: jest.fn(),
    createUserWithEmailAndPassword: jest.fn(),
    signInWithPopup: jest.fn(),
    sendPasswordResetEmail: jest.fn(),
  }
}));

describe('Login Page', () => {
  it('로그인 탭이 기본으로 선택되어야 한다', () => {
    render(<Login />);
    
    const loginTab = screen.getByRole('button', { name: /로그인/ });
    const signupTab = screen.getByRole('button', { name: /회원가입/ });
    
    expect(loginTab).toHaveClass('bg-primary-500');
    expect(signupTab).not.toHaveClass('bg-primary-500');
  });

  it('회원가입 탭 클릭 시 폼이 변경되어야 한다', () => {
    render(<Login />);
    
    const signupTab = screen.getByRole('button', { name: /회원가입/ });
    fireEvent.click(signupTab);
    
    expect(screen.getByLabelText(/이름/)).toBeInTheDocument();
    expect(screen.getByLabelText(/비밀번호 확인/)).toBeInTheDocument();
  });

  it('이메일/비밀번호 로그인이 작동해야 한다', async () => {
    const mockSignIn = jest.fn().mockResolvedValue({ user: { uid: '123' } });
    require('../../lib/firebase').auth.signInWithEmailAndPassword = mockSignIn;

    render(<Login />);
    
    fireEvent.change(screen.getByLabelText(/이메일/), {
      target: { value: 'test@example.com' }
    });
    fireEvent.change(screen.getByLabelText(/비밀번호/), {
      target: { value: 'password123' }
    });
    
    fireEvent.click(screen.getByRole('button', { name: /^로그인$/ }));

    await waitFor(() => {
      expect(mockSignIn).toHaveBeenCalledWith('test@example.com', 'password123');
    });
  });
});
```

## 🗺️ Map 테스트 예시

```typescript
// src/components/__tests__/TravelMap.test.tsx
import { render, screen } from '../../utils/test-utils';
import { TravelMap } from '../TravelMap';

// Leaflet 모킹
jest.mock('react-leaflet', () => ({
  MapContainer: ({ children }: { children: React.ReactNode }) => <div data-testid="map-container">{children}</div>,
  TileLayer: () => <div data-testid="tile-layer" />,
  Marker: ({ position }: { position: [number, number] }) => <div data-testid={`marker-${position[0]}-${position[1]}`} />,
  Popup: ({ children }: { children: React.ReactNode }) => <div data-testid="popup">{children}</div>,
  Polyline: ({ positions }: { positions: [number, number][] }) => <div data-testid={`polyline-${positions.length}-points`} />,
}));

const mockPlans = [
  {
    id: '1',
    place_name: '서울역',
    latitude: '37.555946',
    longitude: '126.972317',
    day: 1,
    start_time: '09:00',
    type: 'transport'
  },
  {
    id: '2',
    place_name: '경복궁',
    latitude: '37.579617',
    longitude: '126.977041',
    day: 1,
    start_time: '10:00',
    type: 'attraction'
  }
];

describe('TravelMap', () => {
  it('지도가 렌더링되어야 한다', () => {
    render(<TravelMap plans={mockPlans} />);
    expect(screen.getByTestId('map-container')).toBeInTheDocument();
  });

  it('마커들이 표시되어야 한다', () => {
    render(<TravelMap plans={mockPlans} />);
    expect(screen.getByTestId('marker-37.555946-126.972317')).toBeInTheDocument();
    expect(screen.getByTestId('marker-37.579617-126.977041')).toBeInTheDocument();
  });

  it('같은 날 계획들 사이에 연결선이 표시되어야 한다', () => {
    render(<TravelMap plans={mockPlans} />);
    expect(screen.getByTestId('polyline-2-points')).toBeInTheDocument();
  });

  it('좌표가 없는 계획은 건너뛰어야 한다', () => {
    const plansWithMissingCoords = [
      ...mockPlans,
      {
        id: '3',
        place_name: '점심 식사',
        latitude: '',
        longitude: '',
        day: 1,
        start_time: '12:00',
        type: 'restaurant'
      }
    ];

    render(<TravelMap plans={plansWithMissingCoords} />);
    // 좌표가 없는 계획의 마커는 렌더링되지 않아야 함
    expect(screen.queryByTestId('marker--')).not.toBeInTheDocument();
  });
});
```

## 📱 E2E 테스트 예시

```typescript
// tests/e2e/music-player.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Music Player E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // 로그인 수행
    await page.click('text=Google로 로그인');
    await page.waitForURL('/');
  });

  test('음악 재생 전체 플로우', async ({ page }) => {
    // MusicPlayer가 보이는지 확인
    await expect(page.locator('[data-testid="music-player"]')).toBeVisible();

    // 재생 버튼 클릭
    await page.click('[aria-label="재생"]');
    
    // 재생 상태 확인 (버튼이 일시정지 아이콘으로 변경)
    await expect(page.locator('[aria-label="일시정지"]')).toBeVisible();

    // 다음 트랙 버튼 클릭
    await page.click('[aria-label="다음 트랙"]');
    
    // 트랙이 자동으로 재생되는지 확인 (몇 초 대기 후)
    await page.waitForTimeout(1000);
    await expect(page.locator('[aria-label="일시정지"]')).toBeVisible();

    // 셔플 모드 토글
    await page.click('[aria-label*="셔플"]');
    
    // 볼륨 조절
    await page.locator('input[type="range"]').fill('0.5');
  });

  test('페이지별 조건부 표시', async ({ page }) => {
    // 홈 페이지에서 MusicPlayer 보임
    await expect(page.locator('[data-testid="music-player"]')).toBeVisible();

    // 로그아웃
    await page.click('[aria-label="설정으로 이동"]');
    await page.click('text=로그아웃');

    // 로그인 페이지에서 MusicPlayer 숨겨짐
    await expect(page.locator('[data-testid="music-player"]')).not.toBeVisible();
  });
});
```

## 🎯 성능 테스트 예시

```typescript
// tests/performance/bundle-size.test.ts
import { execSync } from 'child_process';
import { readFileSync } from 'fs';
import { gzipSync } from 'zlib';

describe('Bundle Size Performance', () => {
  it('메인 번들 크기가 500KB를 초과하지 않아야 한다', () => {
    // 빌드 수행
    execSync('npm run build', { stdio: 'inherit' });
    
    // dist 폴더의 주요 JS 파일들 크기 확인
    const jsFiles = execSync('find dist/assets -name "*.js" -type f')
      .toString()
      .split('\n')
      .filter(Boolean);
    
    let totalSize = 0;
    jsFiles.forEach(file => {
      const content = readFileSync(file);
      const gzippedSize = gzipSync(content).length;
      totalSize += gzippedSize;
    });
    
    const totalSizeKB = totalSize / 1024;
    expect(totalSizeKB).toBeLessThan(500);
  });

  it('이미지 파일들이 적절히 최적화되어 있어야 한다', () => {
    const imageFiles = execSync('find public -name "*.{jpg,jpeg,png,webp}" -type f')
      .toString()
      .split('\n')
      .filter(Boolean);
    
    imageFiles.forEach(file => {
      const stats = execSync(`stat -f%z "${file}"`).toString().trim();
      const fileSizeKB = parseInt(stats) / 1024;
      
      // 개별 이미지 파일이 2MB를 초과하지 않아야 함
      expect(fileSizeKB).toBeLessThan(2048);
    });
  });
});
```

## 🚀 CI/CD 워크플로우

```yaml
# .github/workflows/test-and-deploy.yml
name: Test and Deploy

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run unit tests
        run: npm test -- --coverage --watchAll=false
      
      - name: Run build
        run: npm run build
      
      - name: Install Playwright
        run: npx playwright install --with-deps
      
      - name: Run E2E tests
        run: npm run test:e2e
      
      - name: Upload coverage to Codecov
        uses: codecov/codecov-action@v3
        with:
          file: ./coverage/lcov.info
      
      - name: Performance audit
        run: npm run lighthouse
      
      - name: Deploy to Vercel (if main branch)
        if: github.ref == 'refs/heads/main'
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 📋 테스트 체크리스트

### ✅ 단위 테스트
- [ ] MusicPlayer 컴포넌트 완전 커버리지
- [ ] ConditionalMusicPlayer/Header 테스트
- [ ] YouTubeEmbed 모달 테스트
- [ ] Firebase Auth 통합 테스트
- [ ] TravelMap Polyline 기능
- [ ] PlanDetail 폼 유효성
- [ ] 유틸리티 함수들

### ✅ 통합 테스트
- [ ] 로그인 → 홈 → 여행 생성 플로우
- [ ] 계획 추가 → 편집 → 지도 확인 플로우
- [ ] 이미지 업로드 → Firebase Storage 연동
- [ ] YouTube 링크 → 모달 → 페이지 이동

### ✅ E2E 테스트
- [ ] 첫 방문자 온보딩 플로우
- [ ] 멀티미디어 기능 테스트
- [ ] 반응형 디자인 확인
- [ ] 접근성 기본 요구사항

### ✅ 성능 테스트
- [ ] 번들 사이즈 최적화
- [ ] 이미지 로딩 성능
- [ ] 지도 렌더링 성능
- [ ] 메모리 누수 체크

이 가이드를 통해 Moonwave Travel 앱의 모든 기능에 대한 견고한 테스트 커버리지를 구축할 수 있습니다.