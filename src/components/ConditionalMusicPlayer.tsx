import { useLocation } from 'react-router-dom';
import { MusicPlayer } from './MusicPlayer';

export function ConditionalMusicPlayer() {
  const location = useLocation();
  
  // 로그인 페이지에서는 MusicPlayer를 숨김
  if (location.pathname === '/login') {
    return null;
  }

  return (
    <div className="px-4 pb-4">
      <MusicPlayer />
    </div>
  );
}