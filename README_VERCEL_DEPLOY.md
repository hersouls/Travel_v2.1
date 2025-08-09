# Vercel 배포 가이드

## 배포 준비 완료 사항

### 1. 프로젝트 설정 수정 완료
- ✅ `vite.config.ts`: base path를 '/'로 수정
- ✅ `vercel.json`: Vercel 설정 파일 생성
- ✅ `src/App.tsx`: Router basename 제거
- ✅ `.gitignore`: Vercel 관련 파일 추가

### 2. 환경 변수 설정
Firebase 설정을 위해 Vercel 대시보드에서 다음 환경 변수를 설정해야 합니다:

```
VITE_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID
VITE_FIREBASE_MEASUREMENT_ID (선택사항)
VITE_APP_ENV=production
```

## Vercel 배포 단계

### 1. Vercel CLI 설치 (선택사항)
```bash
npm i -g vercel
```

### 2. GitHub 연동 배포 (권장)
1. GitHub에 코드 푸시
2. [Vercel Dashboard](https://vercel.com/dashboard)에서 "New Project" 클릭
3. GitHub 저장소 선택
4. Framework Preset: "Vite" 선택
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. 환경 변수 설정 (위 목록 참고)
8. Deploy 클릭

### 3. CLI를 통한 배포
```bash
# 프로젝트 루트에서 실행
vercel

# 프로덕션 배포
vercel --prod
```

## Firebase 설정

### Firebase Console 설정
1. [Firebase Console](https://console.firebase.google.com)에서 프로젝트 설정
2. Authentication > Settings > Authorized domains에 Vercel 도메인 추가:
   - `your-app.vercel.app`
   - `your-custom-domain.com` (커스텀 도메인 사용 시)

### Firestore 보안 규칙
`firestore.rules` 파일이 이미 설정되어 있습니다. Firebase Console에서 동일한 규칙을 적용하세요.

### Storage 보안 규칙
`storage.rules` 파일이 이미 설정되어 있습니다. Firebase Console에서 동일한 규칙을 적용하세요.

## 배포 후 확인사항

1. **환경 변수 확인**: Vercel 대시보드 > Settings > Environment Variables
2. **빌드 로그 확인**: Vercel 대시보드 > Functions 탭
3. **도메인 설정**: Settings > Domains에서 커스텀 도메인 추가 가능
4. **Firebase 인증 도메인**: Firebase Console에서 Vercel 도메인 추가 확인

## 트러블슈팅

### 빌드 실패 시
- Node.js 버전 확인 (18.x 이상 권장)
- 환경 변수가 모두 설정되었는지 확인
- `npm install` 후 로컬에서 `npm run build` 테스트

### Firebase 연결 오류
- 환경 변수가 정확히 설정되었는지 확인
- Firebase Console에서 Vercel 도메인이 승인되었는지 확인
- 브라우저 콘솔에서 에러 메시지 확인

### 라우팅 문제
- `vercel.json`의 rewrites 설정 확인
- SPA 라우팅이 제대로 작동하는지 확인

## 추가 최적화

### 성능 최적화
- Vercel Analytics 활성화 고려
- Edge Functions 사용 검토
- 이미지 최적화: Vercel Image Optimization 사용

### 보안
- 환경 변수를 Preview와 Production으로 구분 설정
- CORS 설정 확인
- Rate limiting 설정 고려