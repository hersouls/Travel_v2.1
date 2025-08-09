# 🗺️ 지도 URL 자동 파싱 기능 가이드

## 개요

Moonwave Travel에 지도 URL에서 위도/경도를 자동으로 추출하는 기능을 추가했습니다. 사용자가 지도 URL을 입력하면 자동으로 좌표를 파싱하여 위치 정보를 저장합니다.

## 🎯 주요 기능

### 1. 지원하는 지도 서비스
- **Google Maps**: `https://maps.google.com/@37.5665,126.978,15z`
- **Naver 지도**: `https://map.naver.com/v5/?c=126.978,37.5665,15`
- **Kakao Map**: `https://map.kakao.com/?urlX=126.978&urlY=37.5665`
- **Apple Maps**: `https://maps.apple.com/?ll=37.5665,126.978`
- **일반 좌표**: `https://example.com?lat=37.5665&lng=126.978`

### 2. 자동 파싱 기능
- **실시간 파싱**: 지도 URL 입력 시 500ms 후 자동 파싱
- **수동 파싱**: "파싱" 버튼으로 즉시 좌표 추출
- **저장 시 파싱**: 저장할 때 빈 좌표 필드를 자동으로 채움

## 📁 구현된 파일들

### 새로 추가된 파일
```
src/utils/mapUrlParser.ts          # 지도 URL 파싱 유틸리티
src/utils/__tests__/mapUrlParser.test.ts   # 파싱 기능 테스트
MAP_URL_INTEGRATION_GUIDE.md      # 이 가이드 파일
```

### 수정된 파일
```
src/pages/PlanDetail.tsx          # 지도 URL 입력 및 파싱 UI 추가
src/components/PlanCard.tsx       # 지도 URL 표시 개선
src/types/plan.ts                 # map_url 필드 (기존에 있음)
```

## 🔧 기술적 구현

### 1. MapUrlParser 클래스

```typescript
// 지도 URL 파싱
const result = parseMapUrl('https://maps.google.com/@37.5665,126.978,15z');
console.log(result);
// {
//   success: true,
//   coordinates: { latitude: 37.5665, longitude: 126.978 },
//   source: 'Google Maps'
// }

// 좌표를 지도 URL로 변환
const coords = { latitude: 37.5665, longitude: 126.978 };
const googleUrl = coordinatesToGoogleMaps(coords);
const naverUrl = coordinatesToNaverMap(coords);
```

### 2. Firebase 데이터 구조

```typescript
interface Plan {
  // ... 기존 필드들
  map_url?: string;      // 새로 추가: 지도 URL
  latitude?: number;     // 기존: 위도 (자동 추출 가능)
  longitude?: number;    // 기존: 경도 (자동 추출 가능)
}
```

### 3. 자동 파싱 로직 (PlanDetail.tsx)

```typescript
// 지도 URL 입력 시 실시간 파싱
const handleMapUrlChange = (value: string) => {
  setFormData(prev => ({ ...prev, map_url: value }));
  
  // 디바운스 처리 (500ms)
  if ((window as any).mapUrlParseTimeout) {
    clearTimeout((window as any).mapUrlParseTimeout);
  }
  (window as any).mapUrlParseTimeout = setTimeout(() => {
    if (value.trim() && value.includes('.')) {
      handleMapUrlParse(value);
    }
  }, 500);
};

// 저장 시 자동 파싱
if (formData.map_url.trim() && (!formData.latitude || !formData.longitude)) {
  const parseResult = parseMapUrl(formData.map_url.trim());
  if (parseResult.success && parseResult.coordinates) {
    const formatted = formatCoordinates(parseResult.coordinates);
    finalLatitude = formatted.lat;
    finalLongitude = formatted.lng;
    console.log(`🗺️ 지도 URL에서 좌표 자동 추출: ${parseResult.source}`);
  }
}
```

## 🎨 사용자 인터페이스

### 1. PlanDetail 페이지 개선
- **지도 URL 입력 필드**: 실시간 파싱 지원
- **파싱 결과 표시**: 성공/실패 상태와 추출된 좌표
- **좌표 필드 강화**: 유효성 검증 및 파싱된 좌표 표시
- **초기화 버튼**: 좌표와 파싱 결과 초기화

### 2. PlanCard 표시 개선
- **정확한 좌표 표시**: 소수점 4자리로 표시
- **지도 서비스 구분**: Google지도, Naver지도 등 구분 표시
- **상태별 색상**: 좌표 있음(파란색), 지도 링크만 있음(노란색)

## 🚀 사용 예시

### 1. Google Maps URL 파싱
```
입력: https://www.google.com/maps/@37.5665,126.9780,15z
결과: 위도 37.5665, 경도 126.9780 (Google Maps)
```

### 2. Naver 지도 URL 파싱
```
입력: https://map.naver.com/v5/?c=126.9780,37.5665,15
결과: 위도 37.5665, 경도 126.9780 (Naver Map)
```

### 3. 실제 사용 플로우
1. 사용자가 일정 추가/편집 페이지에서 지도 URL 입력
2. 500ms 후 자동으로 좌표 파싱 시도
3. 파싱 성공 시 위도/경도 필드에 자동 입력
4. 저장 시 Firebase에 map_url과 좌표 모두 저장
5. PlanCard에서 지도 서비스별로 구분하여 표시

## 🧪 테스트

### 실행 방법
```bash
npm test mapUrlParser
```

### 테스트 커버리지
- Google Maps (다양한 URL 형식)
- Naver 지도
- Kakao Map  
- Apple Maps
- 일반 좌표 형식
- 에러 처리 및 유효성 검증
- 유틸리티 함수들

## 🔄 데이터 마이그레이션

### 기존 데이터 호환성
기존 Plan 데이터는 그대로 유지되며, map_url 필드가 없어도 정상 작동합니다.

### 새 필드 추가
```javascript
// Firestore에서 기존 plans 컬렉션에 새 필드가 자동으로 추가됩니다
{
  // ... 기존 필드들
  map_url: "https://maps.google.com/@37.5665,126.978,15z", // 새로 추가
  latitude: 37.5665,   // 기존 필드 (자동 파싱으로 채워질 수 있음)
  longitude: 126.978   // 기존 필드 (자동 파싱으로 채워질 수 있음)
}
```

## 📋 지원되는 URL 형식

### Google Maps
- `https://maps.google.com/@lat,lng,zoom`
- `https://www.google.com/maps/@lat,lng,zoom`
- `https://maps.google.com/?q=lat,lng`
- `https://maps.google.com/maps?q=lat,lng`

### Naver 지도
- `https://map.naver.com/v5/?c=lng,lat,zoom`
- `https://map.naver.com/v5/search/위치?c=lng,lat,zoom`

### Kakao Map
- `https://map.kakao.com/?urlX=lng&urlY=lat`
- `https://map.kakao.com/link/map/위치,lat,lng`

### Apple Maps
- `https://maps.apple.com/?ll=lat,lng`
- `https://maps.apple.com/?q=lat,lng`

### 일반 형식
- `?latitude=lat&longitude=lng`
- `?lat=lat&lng=lng`
- `lat,lng` (URL 내 좌표)

## ⚠️ 제한사항 및 주의사항

1. **단축 URL**: 일부 단축 URL(goo.gl 등)은 제한적으로 지원
2. **좌표 정확도**: 지도 서비스별로 좌표 정확도가 다를 수 있음
3. **파싱 실패**: 지원하지 않는 형식의 URL은 파싱 실패
4. **네트워크 독립적**: URL 파싱만 하며 실제 지도 API 호출 없음

## 🔧 문제해결

### 파싱이 안 되는 경우
1. 지원하는 지도 서비스인지 확인
2. URL에 좌표 정보가 포함되어 있는지 확인
3. 브라우저 개발자 도구에서 콘솔 로그 확인

### 좌표가 부정확한 경우
1. 원본 URL이 정확한 위치를 가리키는지 확인
2. 수동으로 위도/경도 입력 가능
3. 파싱된 좌표를 수정하여 저장 가능

---

**📝 작성일**: 2025-08-09  
**🎯 적용 버전**: v2.0  
**🔄 호환성**: 기존 데이터와 100% 호환  
**📊 성능 영향**: 무시할 수 있는 수준  