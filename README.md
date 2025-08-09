# Moonwave 여행 관리

> "여행의 모든 순간을 담다" - 계획부터 추억까지, 여행의 전 과정을 관리하는 스마트한 여행 도우미

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat&logo=vercel)](https://travel.moonwave.kr)
[![Firebase](https://img.shields.io/badge/Powered%20by-Firebase-FFCA28?style=flat&logo=firebase)](https://firebase.google.com/)
[![React](https://img.shields.io/badge/Built%20with-React%2019-61DAFB?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/Type%20Safe-TypeScript-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)

## 🚀 프로젝트 개요

Moonwave Travel은 여행의 모든 순간을 담는 스마트한 여행 관리 서비스입니다. 여행 계획부터 추억까지, 여행의 전 과정을 관리할 수 있는 PWA(Progressive Web App)로, Firebase를 기반으로 한 실시간 동기화와 지도 기반 위치 표시 기능을 제공합니다.

**🌐 배포 URL**: [https://travel.moonwave.kr](https://travel.moonwave.kr)  
**📱 PWA 지원**: 모바일 홈 화면에 앱으로 설치 가능

## 🌟 주요 기능

### 📅 여행 일정 관리
- **여행 생성 및 관리**: 대표 이미지, 제목, 국가, 기간 설정
- **일정 편집**: Day별 계획 관리 (시간, 장소, 메모, 사진)
- **실시간 동기화**: Firebase 실시간 데이터베이스로 즉시 반영
- **진행률 추적**: 여행 일정 완료도 시각적 표시

### 🗺️ 지도 기반 기능
- **전체 일정 지도 보기**: Leaflet + OpenStreetMap 기반
- **위치 정보 관리**: 위도/경도 좌표 입력 및 표시
- **Day별 필터링**: 특정 날짜의 일정만 지도에 표시
- **좌표 입력 가이드**: Google Maps/네이버 지도 연동

### 🔍 개인 장소 라이브러리
- **장소 검색 및 관리**: 개인만의 장소 라이브러리 구축
- **즐겨찾기 기능**: 자주 사용하는 장소 즐겨찾기
- **사용 횟수 추적**: 장소별 사용 빈도 통계
- **새 장소 등록**: 여행 중 발견한 장소 즉시 등록

### 🎵 음악 및 경험
- **내장 음악 플레이어**: Moonwave 오리지널 음악 감상
- **자동 재생**: 로그인 시 랜덤 트랙 자동 재생
- **25곡 플레이리스트**: Glass Vault, Moonwave 등 분위기 있는 BGM
- **시각적 피드백**: 현재 재생 중인 트랙 하이라이트

### 🎨 사용자 경험
- **Moonwave Style v3.2**: 글래스모피즘 + 웨이브 애니메이션
- **반응형 디자인**: 모든 디바이스에서 최적화된 경험
- **부드러운 애니메이션**: 자연스러운 인터랙션과 전환 효과
- **직관적 UI**: 사용하기 쉬운 인터페이스 설계

### 🗺️ 지도 URL 파싱 시스템 
- **다중 지도 서비스 지원**: Google Maps, Naver 지도, Kakao Map, Apple Maps 
- **자동 좌표 추출**: URL에서 위도/경도 자동 파싱 및 저장
- **실시간 파싱**: 지도 URL 입력 시 즉시 좌표 인식
- **지능형 파싱 우선순위**: 도메인별 맞춤 파싱 알고리즘

### 🔄 향상된 콜백 네비게이션
- **Day별 스마트 복귀**: 일정 편집 후 해당 Day로 정확한 콜백
- **URL 기반 상태 관리**: 브라우저 히스토리와 연동된 네비게이션
- **컨텍스트 보존**: 페이지 이동 시 사용자 컨텍스트 유지
- **유연한 폴백**: 콜백 실패 시 스마트한 대안 경로 제공

### 📤 공유 및 내보내기
- **일정 공유**: 여행 일정을 다른 사용자와 공유
- **PDF 내보내기**: 여행 일정을 PDF 형태로 다운로드
- **PWA 설치**: 홈 화면에 앱으로 설치 가능

### 🔒 보안 및 인증
- **Firebase 익명 로그인**: 개인정보 없이 안전한 사용
- **Google OAuth**: 편리한 소셜 로그인 지원
- **데이터 보호**: 사용자별 데이터 격리
- **오프라인 지원**: 인터넷 없이도 기본 기능 사용

## 🛠️ 기술 스택

### Frontend
- **React 19**: 최신 React 기능 활용 (Concurrent Features)
- **TypeScript 5.8**: 타입 안전성과 개발 생산성 향상
- **Tailwind CSS**: 커스텀 테마와 반응형 디자인
- **Radix UI**: 접근성과 사용성을 고려한 UI 컴포넌트
- **React Router**: SPA 라우팅 및 네비게이션
- **React Hook Form**: 폼 상태 관리 및 유효성 검증

### Backend & Database
- **Firebase Firestore**: 실시간 NoSQL 데이터베이스
- **Firebase Storage**: 이미지 및 파일 저장
- **Firebase Authentication**: 익명 로그인 + Google OAuth
- **Firestore Security Rules**: 데이터 보안 및 접근 제어

### Maps & Location
- **Leaflet**: 오픈소스 지도 라이브러리
- **OpenStreetMap**: 무료 지도 타일 서비스
- **좌표 시스템**: 위도/경도 기반 위치 관리

### Build & Development
- **Vite 7**: 빠른 개발 서버와 최적화된 빌드
- **ESLint 9**: 최신 코드 품질 관리
- **TypeScript ESLint**: 타입스크립트 린팅
- **Prettier**: 코드 포맷팅
- **PostCSS + Autoprefixer**: CSS 최적화

### Testing
- **Jest**: 단위 테스트
- **Playwright**: E2E 테스트
- **React Testing Library**: 컴포넌트 테스트

### Deployment
- **Vercel**: 정적 사이트 호스팅 및 자동 배포
- **GitHub Actions**: CI/CD 파이프라인
- **PWA**: Progressive Web App 지원 (Service Worker + Manifest)
- **Custom Domain**: travel.moonwave.kr

## 📦 프로젝트 구조

```
Travel_v2.0/
├── src/                          # 소스 코드
│   ├── components/               # React 컴포넌트
│   │   ├── ui/                  # Radix UI 기반 컴포넌트
│   │   ├── GlassCard.tsx        # 글래스 카드 컴포넌트
│   │   ├── TripCard.tsx         # 여행 카드 컴포넌트
│   │   ├── PlanCard.tsx         # 일정 카드 컴포넌트
│   │   ├── WaveButton.tsx       # 웨이브 버튼 컴포넌트
│   │   ├── TravelMap.tsx        # 지도 컴포넌트
│   │   ├── MusicPlayer.tsx      # 음악 플레이어
│   │   ├── TrackCard.tsx        # 음악 트랙 카드
│   │   ├── WaveBackground.tsx   # 웨이브 배경 효과
│   │   ├── Header.tsx           # 헤더 컴포넌트
│   │   ├── Footer.tsx           # 푸터 컴포넌트
│   │   ├── AboutUs.tsx          # 소개 페이지
│   │   ├── Settings.tsx         # 설정 모달
│   │   ├── PhotoModal.tsx       # 사진 모달
│   │   └── YouTubeEmbed.tsx     # 유튜브 임베드
│   ├── pages/                   # 페이지 컴포넌트
│   │   ├── Home.tsx            # 메인 화면
│   │   ├── Login.tsx           # 로그인 화면
│   │   ├── TripCreate.tsx      # 여행 생성
│   │   ├── TripDetail.tsx      # 여행 상세
│   │   ├── TripEdit.tsx        # 여행 편집
│   │   ├── PlanDetail.tsx      # 일정 편집
│   │   ├── PlaceSearch.tsx     # 장소 검색
│   │   ├── TripMap.tsx         # 지도 보기
│   │   └── Settings.tsx        # 설정 페이지
│   ├── contexts/                # React Context
│   │   ├── AuthContext.tsx     # 인증 컨텍스트
│   │   ├── DataContext.tsx     # 데이터 컨텍스트
│   │   └── index.ts            # 컨텍스트 내보내기
│   ├── lib/                     # 라이브러리 설정
│   │   ├── firebase.ts         # Firebase 설정
│   │   └── utils.ts            # 공통 유틸리티
│   ├── types/                   # TypeScript 타입
│   │   ├── trip.ts             # 여행 타입
│   │   ├── plan.ts             # 일정 타입
│   │   ├── place.ts            # 장소 타입
│   │   ├── auth.ts             # 인증 타입
│   │   ├── app.ts              # 앱 타입
│   │   └── index.ts            # 타입 내보내기
│   ├── utils/                   # 유틸리티 함수
│   │   ├── analytics.ts        # 분석 도구
│   │   ├── performance.ts      # 성능 최적화
│   │   ├── youtube.ts          # 유튜브 연동
│   │   ├── seed-data.ts        # 시드 데이터
│   │   ├── mapUrlParser.ts     # 지도 URL 파싱
│   │   └── navigationCallback.ts # 콜백 네비게이션
│   ├── App.tsx                  # 메인 앱 컴포넌트
│   ├── main.tsx                 # 진입점
│   └── index.css               # 글로벌 스타일
├── public/                      # 정적 파일
│   ├── manifest.json           # PWA 매니페스트
│   ├── sw.js                   # Service Worker
│   ├── Music/                  # 음악 파일 (25곡)
│   └── health.json             # 헬스체크
├── docs/                        # 문서
│   ├── 화면정의서              # UI/UX 정의서
│   ├── 개발체크리스트          # 개발 가이드
│   ├── 디자인가이드            # 디자인 시스템
│   ├── PRD                     # 제품 요구사항
│   ├── Plan.md                 # 개발 계획
│   └── component-relationships.md # 컴포넌트 관계도
├── scripts/                     # 스크립트
│   ├── seedData.js             # 샘플 데이터 생성
│   ├── updatePlans.js          # 일정 업데이트
│   └── updateTripImages.js     # 이미지 업데이트
├── firebase.json               # Firebase 설정
├── vercel.json                 # Vercel 배포 설정
├── tailwind.config.js          # Tailwind 설정
├── vite.config.ts              # Vite 설정
└── tsconfig.json               # TypeScript 설정
```

## 🎯 화면 구성

### 1. 메인 화면 (Home)
- **목적**: 여행 일정 목록 조회 및 신규 여행 생성
- **주요 기능**: 
  - 여행 카드 그리드 표시
  - 검색 및 필터링
  - 진행률 시각화
  - 신규 여행 생성 버튼

### 2. 여행 생성 화면 (TripCreate)
- **목적**: 새 여행 일정 생성
- **주요 기능**:
  - 대표 이미지 업로드
  - 여행 제목, 국가, 기간 설정
  - 실시간 유효성 검증

### 3. 여행 상세 화면 (TripDetail)
- **목적**: 특정 여행의 Day별 일정 관리
- **주요 기능**:
  - Day 탭으로 일정 구분
  - 일정 카드 목록 표시
  - 실시간 Firebase 연동
  - 지도 보기 연동

### 4. 일정 편집 화면 (PlanDetail)
- **목적**: 개별 일정 생성/수정/삭제
- **주요 기능**:
  - 시간, 장소, 메모 입력
  - 사진 업로드 (최대 5장)
  - 평점 및 링크 관리
  - **지도 URL 파싱**: Google Maps, Naver, Kakao, Apple Maps URL 자동 좌표 추출
  - **실시간 좌표 인식**: URL 입력 시 즉시 좌표 파싱 및 표시
  - **스마트 콜백**: 편집 완료 후 해당 Day로 정확한 복귀

### 5. 장소 검색 화면 (PlaceSearch)
- **목적**: 개인 장소 라이브러리 검색 및 선택
- **주요 기능**:
  - 장소명/주소 실시간 검색
  - 유형별 필터링 (관광지, 음식점, 숙소, 교통, 기타)
  - 정렬 옵션 (최신순, 즐겨찾기순, 사용빈도순)
  - 즐겨찾기 관리 및 사용 횟수 추적
  - 새 장소 등록 (좌표 포함)
  - 현재 위치 자동 입력 기능
  - 스켈레톤 UI 및 에러 핸들링

### 6. 지도 보기 화면 (TripMap)
- **목적**: 전체 일정을 지도 상에 표시
- **주요 기능**:
  - Leaflet + OpenStreetMap
  - Day별 필터링
  - 마커 클릭으로 일정 편집
  - 좌표 입력 가이드

## 🚀 설치 및 실행

### 필수 요구사항
- Node.js >= 18.0.0
- npm >= 8.0.0 또는 yarn >= 1.22.0
- Firebase 프로젝트 설정 (Firestore + Authentication + Storage)
- 모던 브라우저 (Chrome 90+, Firefox 88+, Safari 14+)

### 설치
```bash
# 저장소 클론
git clone https://github.com/hersouls/Travel_v2.0.git
cd Travel_v2.0

# 의존성 설치
npm install

# 또는 yarn 사용
yarn install
```

### 환경 설정
```bash
# Firebase 설정 파일 생성
cp .env.example .env.local

# Firebase 프로젝트 정보 입력
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### Firebase 설정
1. [Firebase Console](https://console.firebase.google.com)에서 새 프로젝트 생성
2. Authentication 활성화 (익명 로그인 + Google 로그인)
3. Firestore Database 생성 (테스트 모드로 시작)
4. Storage 활성화
5. Hosting 설정 (선택사항)
6. 프로젝트 설정에서 웹 앱 등록 후 config 복사

### 개발 서버 실행
```bash
# 개발 서버 시작
npm run dev

# 브라우저에서 http://localhost:5173 접속
```

### 빌드 및 배포
```bash
# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview

# Vercel 배포
npm run deploy
```

## 🧪 테스트

### 단위 테스트
```bash
# Jest를 사용한 단위 테스트
npm test

# 테스트 감시 모드
npm run test:watch
```

### E2E 테스트
```bash
# Playwright를 사용한 E2E 테스트
npm run test:e2e
```

### 타입 체크
```bash
# TypeScript 타입 체크
npm run type-check
```

## 🎨 디자인 시스템

### Moonwave Style v3.2
- **글래스모피즘**: 현대적인 글래스 효과
- **웨이브 애니메이션**: 동적 웨이브 효과
- **반응형 디자인**: 모든 디바이스 최적화
- **다크 모드 지원**: 눈에 편안한 테마

### 주요 컴포넌트
- **GlassCard**: 글래스 효과 카드 컴포넌트
- **WaveButton**: 웨이브 애니메이션 버튼
- **TripCard**: 여행 정보 카드
- **PlanCard**: 일정 정보 카드

## 📊 데이터 모델

### Firestore 구조
```
trips/
  └── {tripId}/
      ├── info (기본 정보)
      └── plans/ (일정 서브컬렉션)
          └── {planId}

users/
  └── {userId}/
      ├── profile
      └── places/ (개인 장소 라이브러리)
          └── {placeId}
```

### 핵심 타입 정의
```typescript
interface Trip {
  id: string;
  user_id: string;
  title: string;
  country: string;
  start_date: string;
  end_date: string;
  cover_image?: string;
  plans_count?: number;
  created_at: Timestamp;
  updated_at: Timestamp;
}

interface Plan {
  day: number;
  place_name: string;
  start_time: string;
  end_time?: string;
  type: 'attraction' | 'restaurant' | 'hotel' | 'transport' | 'other';
  address?: string;
  rating?: number;
  memo?: string;
  photos?: string[];
  youtube_link?: string;
  map_url?: string;          // NEW: 지도 URL 필드
  latitude?: number;         // 지도 URL에서 자동 파싱된 위도
  longitude?: number;        // 지도 URL에서 자동 파싱된 경도
  trip_id: string;
  created_at: Timestamp;
  updated_at: Timestamp;
}
```

## 🔧 스크립트

```bash
# 개발
npm run dev              # 개발 서버 실행 (http://localhost:5173)
npm run build            # 프로덕션 빌드 (dist/ 폴더 생성)
npm run preview          # 빌드 결과 미리보기

# 테스트
npm run test             # Jest 단위 테스트
npm run test:watch       # 테스트 감시 모드
npm run test:e2e         # Playwright E2E 테스트

# 코드 품질
npm run lint             # ESLint 검사
npm run type-check       # TypeScript 타입 체크

# Firebase 스크립트
node scripts/seedData.js        # 샘플 데이터 생성
node scripts/updatePlans.js     # 일정 데이터 업데이트
node scripts/updateTripImages.js # 여행 이미지 업데이트

# 배포 (자동 배포 설정됨)
git push origin main     # main 브랜치 푸시 시 자동 배포
```

## 🚀 배포 가이드

### 자동 배포 (권장)
- **main** 브랜치에 푸시하면 Vercel에서 자동 배포
- Pull Request 시 미리보기 배포 생성
- 배포 상태는 GitHub Actions에서 확인 가능

### Vercel 수동 배포
```bash
# Vercel CLI 설치
npm i -g vercel

# 로그인
vercel login

# 프로젝트 연결
vercel link

# 배포
vercel --prod
```

### 수동 배포
1. 프로덕션 빌드: `npm run build`
2. `dist/` 폴더를 웹 서버에 업로드
3. Firebase 설정 적용
4. 도메인 DNS 설정
5. HTTPS 강제 리다이렉트 설정

### 배포 전 체크리스트
- [ ] 모든 테스트 통과 (`npm test`)
- [ ] 린팅 검사 통과 (`npm run lint`)
- [ ] TypeScript 타입 체크 통과 (`npm run type-check`)
- [ ] 프로덕션 빌드 성공 (`npm run build`)
- [ ] Firebase 설정 확인 (환경변수 및 보안 규칙)
- [ ] PWA 매니페스트 설정 (`public/manifest.json`)
- [ ] Service Worker 설정 (`public/sw.js`)
- [ ] 음악 파일 업로드 (`public/Music/`)
- [ ] SSL 인증서 설정 (Vercel 자동 처리)
- [ ] 도메인 DNS 설정 (`travel.moonwave.kr`)

## 🔒 보안 및 성능

### 보안 설정
- Firebase 보안 규칙 설정
- HTTPS 강제 리다이렉트
- 보안 헤더 설정
- CSP (Content Security Policy)

### 성능 최적화
- Firebase 실시간 리스너 최적화
- 이미지 lazy loading
- 코드 스플리팅
- 번들 크기 최적화
- 오프라인 캐싱

## 📊 모니터링 및 분석

### Firebase Analytics
- 사용자 활동 추적
- 페이지 뷰 분석
- 이벤트 로깅 (여행 생성, 일정 추가 등)

### 성능 모니터링
- Vercel Analytics 연동
- Core Web Vitals 측정
- 번들 크기 분석
- 로딩 시간 최적화

### 에러 추적
- 클라이언트 에러 로깅
- Firebase 오류 모니터링
- 사용자 피드백 수집

### 사용자 경험 분석
- 음악 플레이어 사용률
- 장소 검색 패턴
- 기능별 사용 빈도

## 🤝 기여하기

프로젝트에 기여해주셔서 감사합니다! 다음 가이드라인을 따라주세요.

### 개발 워크플로
1. Repository Fork
2. 기능 브랜치 생성 (`git checkout -b feature/새로운기능`)
3. 코드 작성 및 테스트
4. 커밋 (`git commit -m 'feat: 새로운 기능 추가'`)
5. 푸시 (`git push origin feature/새로운기능`)
6. Pull Request 생성

### 커밋 컨벤션
- `feat:` 새로운 기능 추가
- `fix:` 버그 수정
- `docs:` 문서 수정
- `style:` 코드 포맷팅
- `refactor:` 코드 리팩토링
- `test:` 테스트 추가/수정
- `chore:` 빌드 설정 등

### 코드 스타일
- ESLint 규칙 준수
- TypeScript 타입 정의 필수
- 컴포넌트에 주석 작성
- 반응형 디자인 고려

## 📄 라이선스

MIT License - 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 📞 지원 및 문의

### 버그 리포트 및 기능 요청
- 🐛 [GitHub Issues](https://github.com/hersouls/Travel_v2.0/issues)
- 💡 [Feature Requests](https://github.com/hersouls/Travel_v2.0/discussions)

### 문의
- 📧 이메일: support@moonwave.kr
- 🌐 웹사이트: [https://travel.moonwave.kr](https://travel.moonwave.kr)
- 📱 데모: [https://travel.moonwave.kr](https://travel.moonwave.kr)

### 기술 지원
- 📖 문서: [`docs/` 폴더](./docs/)
- 💬 토론: [GitHub Discussions](https://github.com/hersouls/Travel_v2.0/discussions)
- 🎯 로드맵: [Project Board](https://github.com/hersouls/Travel_v2.0/projects)

---

<div align="center">

**🌙 Moonwave Team** - *여행의 모든 순간을 담다* ✈️

[![GitHub](https://img.shields.io/badge/GitHub-hersouls-181717?style=flat&logo=github)](https://github.com/hersouls)
[![Website](https://img.shields.io/badge/Website-moonwave.kr-FF6B6B?style=flat&logo=firefox)](https://moonwave.kr)

</div>

## 🚀 배포 정보

### 현재 배포 환경
- **플랫폼**: Vercel
- **도메인**: [travel.moonwave.kr](https://travel.moonwave.kr)
- **브랜치**: `main` (자동 배포)
- **빌드 명령**: `npm run build`
- **출력 디렉토리**: `dist/`

### 배포 설정
```json
// vercel.json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/sw.js",
      "headers": [
        { "key": "Cache-Control", "value": "no-cache" }
      ]
    }
  ]
}
```

### 로컬 프로덕션 테스트
```bash
# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview

# 또는 정적 서버로 테스트
npx serve dist
```

### PWA 기능
- 🔄 Service Worker 자동 등록
- 📱 홈 화면 설치 지원
- 🚀 오프라인 캐싱
- 🔔 알림 기능 (준비 중)
