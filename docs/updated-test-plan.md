# Moonwave Travel 통합 테스트 계획서 v2.0

## 📋 테스트 개요

### 목표
- 실제 구현된 기능들의 안정성 검증
- 사용자 시나리오 기반 End-to-End 테스트
- 성능 및 접근성 확보
- Firebase 연동 안정성 보장
- 95% 이상 테스트 커버리지 달성

### 테스트 도구 스택
- **Jest**: JavaScript 테스트 프레임워크
- **React Testing Library**: React 컴포넌트 테스트
- **Playwright**: E2E 테스트
- **MSW (Mock Service Worker)**: API 모킹
- **Firebase Test SDK**: Firebase 연동 테스트
- **Vitest**: 빠른 단위 테스트 (대안)

---

## 🎵 새로 추가된 기능 테스트 계획

### MusicPlayer 컴포넌트
- **파일**: `src/components/MusicPlayer.tsx`
- **테스트 범위**:
  - ✅ 기본 재생/일시정지 기능
  - ✅ 트랙 변경 (이전/다음) 시 자동 재생
  - ✅ 셔플 모드 활성화/비활성화
  - ✅ 볼륨 조절 및 음소거
  - ✅ 오디오 진행률 표시
  - ✅ 브라우저 자동재생 정책 준수
  - ✅ 에러 처리 (파일 로드 실패, AbortError 등)
  - ✅ 사용자 인증 상태에 따른 표시 여부

### ConditionalMusicPlayer/ConditionalHeader 컴포넌트
- **파일**: `src/components/ConditionalMusicPlayer.tsx`, `ConditionalHeader.tsx`
- **테스트 범위**:
  - ✅ 로그인 페이지에서 숨김 처리
  - ✅ 다른 페이지에서 정상 표시
  - ✅ 라우트 변경 시 조건부 렌더링

### YouTubeEmbed 컴포넌트
- **파일**: `src/components/YouTubeEmbed.tsx`
- **테스트 범위**:
  - ✅ 유튜브 썸네일 표시
  - ✅ 모달창 열기/닫기
  - ✅ 비디오 상태 유지 (모달 재열기 시)
  - ✅ 모달 종료 시 PlanDetail 페이지로 이동
  - ✅ 유효하지 않은 URL 처리
  - ✅ 자동재생 처리

---

## 🔐 인증 시스템 테스트 계획

### Firebase Auth 통합 테스트
- **파일**: `src/contexts/AuthContext.tsx`, `src/pages/Login.tsx`
- **테스트 범위**:
  - ✅ 이메일/비밀번호 로그인
  - ✅ Google 소셜 로그인
  - ✅ 회원가입 기능
  - ✅ 비밀번호 재설정
  - ✅ 탭 전환 (로그인 ↔ 회원가입)
  - ✅ 폼 유효성 검증
  - ✅ 에러 메시지 한국어 표시
  - ✅ 로그인 후 자동 리디렉션

---

## 🗺️ 지도 기능 테스트 계획

### TravelMap 컴포넌트 (업데이트됨)
- **파일**: `src/components/TravelMap.tsx`
- **테스트 범위**:
  - ✅ Leaflet 지도 초기화
  - ✅ 마커 표시 및 클러스터링
  - ✅ PlanCard 좌표 기반 연결선(Polyline) 표시
  - ✅ 같은 날/다른 날 연결선 색상 구분
  - ✅ 마커 순서 표시
  - ✅ 좌표가 없는 카드 건너뛰기
  - ✅ 팝업 정보 표시

---

## 📅 여행 계획 관리 테스트 계획

### PlanDetail 페이지 (기능 추가됨)
- **파일**: `src/pages/PlanDetail.tsx`
- **테스트 범위**:
  - ✅ 새 계획/기존 계획 편집 모드
  - ✅ 폼 데이터 유효성 검증
  - ✅ 다중 이미지 업로드 (최대 5개)
  - ✅ YouTube 링크 입력
  - ✅ 지도 링크 입력
  - ✅ 좌표 입력 (위도/경도)
  - ✅ 메모 입력 (1000자 제한)
  - ✅ 계획 타입별 아이콘 표시
  - ✅ Firebase 저장/업데이트

### TripDetail 페이지 (날짜 표시 추가)
- **파일**: `src/pages/TripDetail.tsx`
- **테스트 범위**:
  - ✅ Day 번호와 함께 실제 날짜 표시 (예: Day 1 (2024.08.09.금))
  - ✅ 일별 계획 필터링 및 정렬
  - ✅ 계획 개수 배지 표시 (Day 옆에 위치)
  - ✅ getDayWithDate 함수 정확성
  - ✅ 여행 기간 계산

### TripMap 페이지 (날짜 표시 추가)
- **파일**: `src/pages/TripMap.tsx`
- **테스트 범위**:
  - ✅ Day 필터에 날짜 정보 표시
  - ✅ 지도 마커와 사이드바 동기화
  - ✅ 좌표 입력 모달
  - ✅ 계획 편집 네비게이션

---

## 🎨 UI/UX 개선사항 테스트

### Footer 컴포넌트 (여백 조정)
- **파일**: `src/components/Footer.tsx`
- **테스트 범위**:
  - ✅ 하단 여백 15vh 적용
  - ✅ MusicPlayer와 겹침 방지
  - ✅ 반응형 디자인 유지

### 글래스모피즘 디자인 일관성
- **테스트 범위**:
  - ✅ 모든 카드 컴포넌트의 투명도 일치
  - ✅ 웨이브 이펙트 애니메이션
  - ✅ 호버 상태 피드백
  - ✅ 다크모드 지원 (미래 기능)

---

## 🧪 End-to-End 테스트 시나리오

### 핵심 사용자 여정
1. **첫 방문자 시나리오**
   - 로그인 페이지 접속
   - Google 로그인 수행
   - 홈 화면에서 MusicPlayer 확인
   - 샘플 여행 데이터 복사

2. **여행 계획 생성 시나리오**
   - 새 여행 생성
   - 여행 정보 입력 및 이미지 업로드
   - 일별 계획 추가
   - 지도에서 위치 확인

3. **계획 상세 편집 시나리오**
   - 계획 상세 페이지 진입
   - 장소 정보, 시간 설정
   - 사진 여러 장 업로드
   - YouTube 링크 추가
   - 메모 작성

4. **지도 활용 시나리오**
   - 지도 페이지 접속
   - 마커와 연결선 확인
   - 좌표 직접 입력
   - 계획 간 경로 시각화

5. **멀티미디어 기능 시나리오**
   - MusicPlayer 재생/정지
   - 트랙 변경 및 자동 재생
   - YouTube 모달 열기/닫기
   - 비디오 상태 유지 확인

### 성능 테스트 시나리오
- **대용량 데이터 처리**: 50개 이상 계획이 있는 여행
- **이미지 로딩 최적화**: 여러 고해상도 이미지 동시 로드
- **지도 렌더링 성능**: 100개 이상 마커 표시
- **음악 재생 성능**: 연속 트랙 변경 시 메모리 누수 체크

---

## 📱 모바일/반응형 테스트

### 디바이스별 테스트
- **모바일 (320px-768px)**
  - 터치 제스처 (스와이프, 탭)
  - MusicPlayer 컨트롤 크기
  - 모달창 크기 조정
  - 폰트 크기 가독성

- **태블릿 (768px-1024px)**
  - 2단 레이아웃 전환
  - 사이드바 토글 기능
  - 키보드 대응

- **데스크탑 (1024px+)**
  - 마우스 호버 효과
  - 키보드 단축키
  - 멀티 윈도우 지원

### 접근성 테스트
- **스크린 리더 지원**
  - aria-label 및 role 속성
  - 의미적 HTML 구조
  - 키보드 네비게이션

- **색상 대비**
  - WCAG 2.1 AA 기준 충족
  - 색맹 사용자 고려
  - 다크모드 지원 준비

---

## 🚀 CI/CD 및 배포 테스트

### GitHub Actions 워크플로우
```yaml
# .github/workflows/test.yml
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
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npm test -- --coverage
      - run: npm run build
      - run: npm run test:e2e
```

### Vercel 배포 테스트
- ✅ 빌드 성공 여부
- ✅ 환경 변수 설정
- ✅ Firebase 연결 상태
- ✅ 정적 파일 서빙 (음악, 이미지)
- ✅ SPA 라우팅 정상 동작

---

## 📊 테스트 메트릭 및 리포팅

### 커버리지 목표 (업데이트)
- **전체 코드**: 95% 이상
- **새 기능 (MusicPlayer, Auth)**: 100%
- **컴포넌트**: 95% 이상  
- **페이지**: 90% 이상
- **유틸리티 함수**: 100%
- **Context/Hook**: 100%

### 성능 메트릭
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.0s
- **Cumulative Layout Shift**: < 0.1
- **Bundle Size**: < 500KB (gzipped)

### 테스트 실행 명령어
```bash
# 전체 테스트 실행
npm test

# 특정 컴포넌트 테스트
npm test MusicPlayer

# E2E 테스트
npm run test:e2e

# 성능 테스트
npm run test:perf

# 커버리지 리포트 생성
npm run test:coverage

# Vercel 프리뷰 테스트
npm run test:preview
```

---

## 🔄 테스트 구현 로드맵

### Phase 1: 새 기능 안정화 (1주)
1. ✅ MusicPlayer 컴포넌트 테스트 완성
2. ✅ ConditionalMusicPlayer/Header 테스트
3. ✅ YouTubeEmbed 모달 테스트
4. ✅ Firebase Auth 통합 테스트

### Phase 2: 기존 기능 보강 (2주)
1. ✅ TravelMap Polyline 기능 테스트
2. ✅ PlanDetail 폼 유효성 테스트
3. ✅ 날짜 표시 기능 테스트
4. ✅ 이미지 업로드 프로세스 테스트

### Phase 3: E2E 및 성능 (1주)
1. ✅ 핵심 사용자 여정 자동화
2. ✅ 성능 벤치마크 설정
3. ✅ 모바일 반응형 테스트
4. ✅ 접근성 준수 검증

### Phase 4: CI/CD 완성 (3일)
1. ✅ GitHub Actions 워크플로우 완성
2. ✅ Vercel 배포 자동화
3. ✅ 테스트 리포트 자동 생성
4. ✅ 품질 게이트 설정

---

## 🎯 테스트 우선순위 매트릭스

### 🔴 Critical (즉시 필요)
- MusicPlayer 기본 재생 기능
- Firebase Auth 로그인/로그아웃
- 여행/계획 CRUD 작업
- 이미지 업로드

### 🟡 High (1주 내)
- 지도 마커 및 연결선
- YouTube 모달 기능
- 폼 유효성 검증
- 반응형 디자인

### 🟢 Medium (2주 내)
- 성능 최적화
- 접근성 개선
- 에러 경계 처리
- 캐싱 전략

### ⚪ Low (필요시)
- 애니메이션 세부사항
- 미래 기능 대비
- 레거시 브라우저 지원

---

## 📝 테스트 작성 가이드라인 (업데이트)

### 파일 구조
```
src/
├── components/
│   ├── MusicPlayer.tsx
│   └── __tests__/
│       ├── MusicPlayer.test.tsx
│       └── MusicPlayer.integration.test.tsx
├── pages/
│   ├── Login.tsx
│   └── __tests__/
│       └── Login.test.tsx
└── utils/
    └── __tests__/
        └── youtube.test.ts
```

### 테스트 명명 규칙
```javascript
describe('MusicPlayer', () => {
  describe('기본 재생 기능', () => {
    it('재생 버튼 클릭 시 음악이 시작되어야 한다', () => {
      // 테스트 코드
    });
    
    it('일시정지 버튼 클릭 시 음악이 멈춰야 한다', () => {
      // 테스트 코드
    });
  });
  
  describe('트랙 변경', () => {
    it('다음 트랙 버튼 클릭 시 자동으로 재생되어야 한다', () => {
      // 테스트 코드
    });
  });
});
```

### Mock 전략
```javascript
// Firebase 모킹
jest.mock('../lib/firebase', () => ({
  auth: mockAuth,
  db: mockFirestore,
  storage: mockStorage
}));

// Audio 모킹 (MusicPlayer용)
window.HTMLAudioElement.prototype.play = jest.fn();
window.HTMLAudioElement.prototype.pause = jest.fn();
```

---

이 업데이트된 테스트 계획서는 실제 구현된 모든 기능을 반영하며, 특히 새로 추가된 MusicPlayer, YouTube 모달, Firebase Auth 기능들의 안정성을 보장하기 위한 포괄적인 테스트 전략을 제시합니다.