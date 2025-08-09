# 🔄 강화된 콜백 시스템 가이드

## 개요

Moonwave Travel 애플리케이션에 포괄적인 콜백 시스템을 구현하여 사용자 경험을 개선했습니다. 이 시스템은 URL 상태 기반으로 컴포넌트 간 네비게이션을 관리하고, 브라우저 히스토리를 깔끔하게 유지합니다.

## 🔧 핵심 기능

### 1. URL 상태 기반 콜백 관리
- **인코딩/디코딩**: 콜백 정보를 URL 파라미터에 안전하게 저장
- **상태 보존**: 쿼리 파라미터, 프래그먼트, 컨텍스트 데이터 보존
- **히스토리 정리**: 브라우저 히스토리를 깔끔하게 유지

### 2. 스마트 네비게이션
- **스마트 뒤로가기**: 콜백이 있으면 콜백 실행, 없으면 히스토리 back
- **에러 처리**: 에러 발생 시 지연된 콜백 실행
- **Day 특화**: 특정 Day 탭으로의 정확한 복귀

## 📁 파일 구조

### 유틸리티 파일
- `src/utils/navigationCallback.ts` - 콜백 시스템 코어 로직

### 적용된 컴포넌트
- `src/pages/TripDetail.tsx` - Day 선택 상태 콜백
- `src/pages/PlanDetail.tsx` - 일정 편집 후 특정 Day로 복귀
- `src/pages/TripEdit.tsx` - 여행 편집 후 콜백
- `src/pages/PlaceSearch.tsx` - 장소 검색 후 콜백
- `src/components/Settings.tsx` - 설정 모달에서 콜백

## 🎯 사용법

### 1. 기본 콜백 생성

```typescript
import { NavigationCallback } from '../utils/navigationCallback';

// 현재 위치를 콜백으로 하는 URL 생성
const callbackUrl = NavigationCallback.createCallbackFromCurrent(
  '/target/path',
  {
    preserveQuery: true,      // 현재 쿼리 파라미터 보존
    preserveFragment: true,   // 현재 프래그먼트 보존
    contextData: { key: 'value' }  // 추가 컨텍스트 데이터
  }
);

navigate(callbackUrl);
```

### 2. Day 특화 콜백

```typescript
import { DayNavigationCallback } from '../utils/navigationCallback';

// Day 정보를 포함한 콜백 URL 생성
const dayCallbackUrl = DayNavigationCallback.createDayCallback(
  '/trips/123/plans/456',  // 대상 경로
  '123',                   // Trip ID
  3                        // Day 번호
);

navigate(dayCallbackUrl);
```

### 3. React Hook 사용

```typescript
import { useNavigationCallback } from '../utils/navigationCallback';

const MyComponent = () => {
  const [searchParams] = useSearchParams();
  const { 
    hasCallback, 
    executeCallback, 
    smartGoBack, 
    handleErrorWithCallback 
  } = useNavigationCallback(searchParams);

  const handleSuccess = () => {
    if (hasCallback) {
      executeCallback(navigate);
    } else {
      navigate('/fallback');
    }
  };

  const handleError = () => {
    handleErrorWithCallback(navigate, {
      delay: 3000,
      fallbackPath: '/error-fallback'
    });
  };

  const handleCancel = () => {
    smartGoBack(navigate, '/home');
  };
};
```

## 🔍 실제 사용 예시

### 1. 일정 편집 콜백
```
현재 위치: /trips/123 (Day 3 선택됨)
편집 클릭 → /trips/123/plans/456?returnPath=%2Ftrips%2F123&returnFragment=day-3
편집 완료 → /trips/123#day-3 (자동으로 Day 3 선택)
```

### 2. 여행 편집 콜백
```
현재 위치: /trips/123 (Day 2 선택됨, 스크롤 위치 기억)
편집 버튼 → /trips/123/edit?returnPath=%2Ftrips%2F123&contextData=...
편집 완료 → /trips/123 (Day 2 선택 및 스크롤 위치 복원)
```

### 3. 에러 처리 콜백
```
일정 저장 실패 → 3초 후 자동으로 원래 Day로 복귀
장소 검색 실패 → 2초 후 이전 페이지로 이동
```

## 💡 고급 기능

### 1. 컨텍스트 데이터 전달
```typescript
const callbackUrl = NavigationCallback.encodeCallback(
  '/target',
  '/return',
  {
    contextData: {
      selectedDay: 3,
      scrollPosition: 500,
      selectedFilters: ['restaurant', 'attraction']
    }
  }
);
```

### 2. 조건부 콜백 실행
```typescript
const { callbackState } = useNavigationCallback(searchParams);

if (callbackState?.contextData?.selectedDay) {
  // Day 정보가 있는 경우 특별 처리
  setSelectedDay(callbackState.contextData.selectedDay);
}
```

### 3. 히스토리 정리
```typescript
NavigationCallback.executeCallback(navigate, state, {
  cleanupHistory: true,     // URL 프래그먼트 자동 정리
  scrollToElement: 'day-3'  // 특정 요소로 스크롤
});
```

## 🛠 기술적 세부사항

### URL 인코딩 구조
```
/target/path?returnPath=/source&returnQuery={"key":"value"}&returnFragment=section&contextData={"data":"value"}
```

### 콜백 상태 인터페이스
```typescript
interface NavigationState {
  returnPath?: string;                    // 복귀 경로
  returnQuery?: Record<string, string>;   // 복귀 시 쿼리 파라미터
  returnFragment?: string;                // 복귀 시 프래그먼트
  contextData?: Record<string, any>;      // 추가 컨텍스트 데이터
}
```

## 🎨 사용자 경험 개선사항

### Before (기존)
- ❌ 일정 편집 후 첫 번째 Day로 이동
- ❌ 브라우저 뒤로가기 시 예상과 다른 동작
- ❌ 페이지 상태 손실 (선택된 Day, 스크롤 위치 등)

### After (강화된 콜백 시스템)
- ✅ 일정 편집 후 원래 Day로 정확한 복귀
- ✅ 상황에 맞는 스마트한 뒤로가기
- ✅ 페이지 상태 완벽 보존
- ✅ 에러 발생 시 자동 복구
- ✅ 깔끔한 URL 히스토리 관리

## 🚀 성능 최적화

### 1. 메모리 효율성
- URL 파라미터만 사용하여 메모리 사용량 최소화
- 불필요한 상태 저장 없음

### 2. 네트워크 효율성  
- 추가 API 호출 없이 URL 상태만으로 콜백 처리
- 컴포넌트 리렌더링 최소화

### 3. 사용자 체감 성능
- 즉시 반응하는 네비게이션
- 부드러운 페이지 전환
- 예측 가능한 동작

## 🔧 유지보수 가이드

### 새로운 콜백 추가하기
1. `NavigationCallback.createCallbackFromCurrent()` 사용
2. 대상 컴포넌트에서 `useNavigationCallback` 훅 적용
3. 성공/실패 시나리오에 맞는 콜백 실행

### 디버깅 팁
- 브라우저 개발자도구에서 URL 파라미터 확인
- `console.log(callbackState)로` 상태 확인
- 네트워크 탭에서 불필요한 리다이렉트 체크

---

**📝 작성일**: 2025-08-09  
**🎯 적용 범위**: 전체 애플리케이션  
**⚡ 성능 영향**: 무시할 수 있는 수준  
**🔄 호환성**: 기존 코드와 100% 호환