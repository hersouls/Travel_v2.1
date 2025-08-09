import { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Shuffle } from 'lucide-react';
import { WaveButton } from './WaveButton';
import { GlassCard } from './GlassCard';
import { cn } from '../lib/utils';
import { useAuth } from '../contexts';

interface MusicTrack {
  id: string;
  title: string;
  artist: string;
  audioUrl: string;
}

const TRACKS: MusicTrack[] = [
  { id: '1', title: 'Glass Vault', artist: 'Moonwave', audioUrl: '/Music/10. Glass Vault.mp3' },
  { id: '2', title: 'Null Error Grace Part1', artist: 'Moonwave', audioUrl: '/Music/11. Null Error Grace Part1.mp3' },
  { id: '3', title: 'Shine Bright', artist: 'Moonwave', audioUrl: '/Music/13. Shine Bright.mp3' },
  { id: '4', title: 'Moonwave', artist: 'Moonwave', audioUrl: '/Music/17. Moonwave.mp3' },
  { id: '5', title: 'Phantom Fairy', artist: 'Moonwave', audioUrl: '/Music/5. Phantom Fairy.mp3' },
];

export function MusicPlayer() {
  const { user } = useAuth();
  const audioRef = useRef<HTMLAudioElement>(null);
  
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [isShuffleMode, setIsShuffleMode] = useState(true);

  const currentTrack = TRACKS[currentTrackIndex];

  // 오디오 이벤트 핸들러
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleDurationChange = () => setDuration(audio.duration);
    const handleEnded = () => {
      setIsPlaying(false);
      // 다음 트랙으로 이동
      const nextIndex = isShuffleMode 
        ? Math.floor(Math.random() * TRACKS.length)
        : (currentTrackIndex + 1) % TRACKS.length;
      setCurrentTrackIndex(nextIndex);
      
      // 자동으로 다음 트랙 재생
      setTimeout(async () => {
        const audio = audioRef.current;
        if (audio) {
          try {
            await audio.play();
            setIsPlaying(true);
          } catch (error) {
            console.error('자동 재생 실패:', error);
            setIsPlaying(false);
          }
        }
      }, 500);
    };
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('durationchange', handleDurationChange);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('durationchange', handleDurationChange);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrackIndex, isShuffleMode]);

  // 볼륨 설정
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // 트랙 변경 시 상태 초기화
  useEffect(() => {
    setCurrentTime(0);
    setDuration(0);
    setIsPlaying(false);
  }, [currentTrackIndex]);

  // 재생/일시정지
  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('재생 오류:', error);
      setIsPlaying(false);
    }
  };

  // 이전 트랙
  const previousTrack = async () => {
    const prevIndex = isShuffleMode 
      ? Math.floor(Math.random() * TRACKS.length)
      : currentTrackIndex > 0 ? currentTrackIndex - 1 : TRACKS.length - 1;
    setCurrentTrackIndex(prevIndex);
    
    // 트랙 변경 후 자동 재생
    setTimeout(async () => {
      const audio = audioRef.current;
      if (audio) {
        try {
          await audio.play();
          setIsPlaying(true);
        } catch (error) {
          console.error('자동 재생 실패:', error);
          setIsPlaying(false);
        }
      }
    }, 100);
  };

  // 다음 트랙
  const nextTrack = async () => {
    const nextIndex = isShuffleMode 
      ? Math.floor(Math.random() * TRACKS.length)
      : (currentTrackIndex + 1) % TRACKS.length;
    setCurrentTrackIndex(nextIndex);
    
    // 트랙 변경 후 자동 재생
    setTimeout(async () => {
      const audio = audioRef.current;
      if (audio) {
        try {
          await audio.play();
          setIsPlaying(true);
        } catch (error) {
          console.error('자동 재생 실패:', error);
          setIsPlaying(false);
        }
      }
    }, 100);
  };

  // 시간 포맷
  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!user) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50">
      <GlassCard variant="strong" className="p-4 backdrop-blur-xl">
        <audio 
          ref={audioRef}
          src={currentTrack.audioUrl}
          preload="metadata"
        />

        <div className="flex items-center space-x-4">
          {/* 트랙 정보 */}
          <div className="flex-1 min-w-0">
            <div className="text-white font-medium text-sm truncate">
              {currentTrack.title}
            </div>
            <div className="text-white/60 text-xs truncate">
              {currentTrack.artist}
            </div>
          </div>

          {/* 컨트롤 버튼 */}
          <div className="flex items-center space-x-2">
            <WaveButton
              variant="ghost"
              size="sm"
              onClick={() => setIsShuffleMode(!isShuffleMode)}
              className={cn('p-2', isShuffleMode ? 'text-primary-400' : 'text-white/60')}
              ariaLabel="셔플 모드"
            >
              <Shuffle className="w-4 h-4" />
            </WaveButton>

            <WaveButton
              variant="ghost"
              size="sm"
              onClick={previousTrack}
              className="p-2 text-white/80 hover:text-white"
              ariaLabel="이전 트랙"
            >
              <SkipBack className="w-4 h-4" />
            </WaveButton>

            <WaveButton
              variant="primary"
              size="sm"
              onClick={togglePlay}
              className="p-3"
              ariaLabel={isPlaying ? '일시정지' : '재생'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </WaveButton>

            <WaveButton
              variant="ghost"
              size="sm"
              onClick={nextTrack}
              className="p-2 text-white/80 hover:text-white"
              ariaLabel="다음 트랙"
            >
              <SkipForward className="w-4 h-4" />
            </WaveButton>

            <div className="hidden sm:flex items-center space-x-2">
              <WaveButton
                variant="ghost"
                size="sm"
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 text-white/80 hover:text-white"
                ariaLabel={isMuted ? '음소거 해제' : '음소거'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </WaveButton>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-20 h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div className="hidden md:block text-xs text-white/60 min-w-[80px] text-right">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>
        </div>

        {/* 진행률 바 */}
        <div className="mt-3">
          <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary-400 to-primary-600 transition-all duration-300"
              style={{
                width: duration > 0 ? `${(currentTime / duration) * 100}%` : '0%'
              }}
            />
          </div>
        </div>
      </GlassCard>
    </div>
  );
}