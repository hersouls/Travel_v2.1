import { useLocation } from 'react-router-dom';
import { Header } from './Header';

export function ConditionalHeader() {
  const location = useLocation();
  
  // 로그인 페이지에서는 Header를 숨김
  if (location.pathname === '/login') {
    return null;
  }

  return <Header />;
}