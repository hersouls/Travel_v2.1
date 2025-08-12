import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../contexts';
import { useNavigationCallback } from '../utils/navigationCallback';
import { GlassCard } from '../components/GlassCard';
import { WaveButton } from '../components/WaveButton';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { 
  Search, 
  Plus, 
  Heart, 
  MapPin, 
  Star,
  Utensils,
  Bed,
  Car,
  Filter,
  Clock,
  Navigation,
} from 'lucide-react';
import { 
  collection, 
  query, 
  onSnapshot, 
  addDoc, 
  updateDoc, 
  doc, 
  increment,
  Timestamp 
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Place } from '../types/place';
import { Plan } from '../types/plan';

interface PlaceCardProps {
  place: Place;
  onSelect: (place: Place) => void;
  onToggleFavorite: (place: Place) => void;
}

const PlaceCard: React.FC<PlaceCardProps> = ({ place, onSelect, onToggleFavorite }) => {
  const getTypeIcon = (type: Plan['type']) => {
    switch (type) {
      case 'attraction':
        return <Star className="w-5 h-5 text-travel-orange" />;
      case 'restaurant':
        return <Utensils className="w-5 h-5 text-travel-green" />;
      case 'hotel':
        return <Bed className="w-5 h-5 text-travel-purple" />;
      case 'transport':
        return <Car className="w-5 h-5 text-travel-blue" />;
      default:
        return <MapPin className="w-5 h-5 text-white/80" />;
    }
  };

  const getTypeLabel = (type: Plan['type']) => {
    switch (type) {
      case 'attraction':
        return '관광지';
      case 'restaurant':
        return '음식점';
      case 'hotel':
        return '숙소';
      case 'transport':
        return '교통';
      default:
        return '기타';
    }
  };

  return (
    <GlassCard variant="light" hoverable className="cursor-pointer">
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0" onClick={() => onSelect(place)}>
          <div className="flex items-center space-x-2 mb-2">
            {getTypeIcon(place.type)}
            <span className="text-xs text-white/60 bg-white/10 px-2 py-1 rounded-full">
              {getTypeLabel(place.type)}
            </span>
            {place.favorite && (
              <Heart className="w-4 h-4 text-red-400 fill-current" />
            )}
          </div>
          
          <h3 className="text-lg font-semibold text-white mb-1 truncate">
            {place.name}
          </h3>
          
          {place.address && (
            <div className="flex items-center space-x-1 text-white/60 text-sm mb-2">
              <MapPin className="w-3 h-3" />
              <span className="truncate">{place.address}</span>
            </div>
          )}
          
          {place.rating && place.rating > 0 && (
            <div className="flex items-center space-x-1 mb-2">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-white/80 text-sm">{place.rating}</span>
            </div>
          )}

          {place.latitude && place.longitude && (
            <div className="flex items-center space-x-1 text-white/50 text-xs mb-2">
              <Navigation className="w-3 h-3" />
              <span>{place.latitude.toFixed(6)}, {place.longitude.toFixed(6)}</span>
            </div>
          )}
          
          <div className="flex items-center justify-between text-xs text-white/50">
            <div className="flex items-center space-x-1">
              <Clock className="w-3 h-3" />
              <span>{place.usage_count || 0}번 사용</span>
            </div>
            {place.created_at && (
              <span>
                {place.created_at.toDate().toLocaleDateString('ko-KR', { timeZone: 'Asia/Seoul' })}
              </span>
            )}
          </div>
        </div>
        
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(place);
          }}
          className="ml-2 p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          <Heart 
            className={`w-5 h-5 ${
              place.favorite ? 'text-red-400 fill-current' : 'text-white/40'
            }`} 
          />
        </button>
      </div>
    </GlassCard>
  );
};

export const PlaceSearch: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { smartGoBack } = useNavigationCallback(searchParams);
  const tripId = searchParams.get('trip');
  
  const [places, setPlaces] = useState<Place[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<Plan['type'] | 'all'>('all');
  const [sortBy, setSortBy] = useState<'recent' | 'favorite' | 'usage'>('recent');
  const [loading, setLoading] = useState(true);
  const [showNewPlaceForm, setShowNewPlaceForm] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // New Place Form
  const [newPlace, setNewPlace] = useState({
    name: '',
    address: '',
    type: 'attraction' as Plan['type'],
    rating: 0,
    latitude: '',
    longitude: '',
  });

  const placeTypes = [
    { value: 'all' as const, label: '전체', icon: '📍' },
    { value: 'attraction' as const, label: '관광지', icon: '🏛️' },
    { value: 'restaurant' as const, label: '음식점', icon: '🍽️' },
    { value: 'hotel' as const, label: '숙소', icon: '🏨' },
    { value: 'transport' as const, label: '교통', icon: '🚗' },
    { value: 'other' as const, label: '기타', icon: '📍' },
  ];

  const sortOptions = [
    { value: 'recent' as const, label: '최근 추가순' },
    { value: 'favorite' as const, label: '즐겨찾기' },
    { value: 'usage' as const, label: '자주 사용' },
  ];

  useEffect(() => {
    if (!user) return;

    const placesQuery = query(
      collection(db, 'users', user.uid, 'places')
    );

    const unsubscribe = onSnapshot(
      placesQuery,
      (snapshot) => {
        const placesData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Place[];
        setPlaces(placesData);
        setLoading(false);
      },
      (error) => {
        console.error('Places 로딩 실패:', error);
        setLoading(false);
      }
    );

    return unsubscribe;
  }, [user]);

  // Filter and sort places
  const filteredAndSortedPlaces = useMemo(() => {
    let filtered = places;

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(place => 
        place.name.toLowerCase().includes(query) ||
        (place.address && place.address.toLowerCase().includes(query))
      );
    }

    // Type filter
    if (selectedType !== 'all') {
      filtered = filtered.filter(place => place.type === selectedType);
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'favorite':
          if (a.favorite && !b.favorite) return -1;
          if (!a.favorite && b.favorite) return 1;
          return (b.usage_count || 0) - (a.usage_count || 0);
        case 'usage':
          return (b.usage_count || 0) - (a.usage_count || 0);
        case 'recent':
        default:
          return b.created_at.toMillis() - a.created_at.toMillis();
      }
    });

    return filtered;
  }, [places, searchQuery, selectedType, sortBy]);

  const handleSelectPlace = async (place: Place) => {
    try {
      setError(null);
      
      // Usage count 증가
      await updateDoc(doc(db, 'users', user!.uid, 'places', place.id), {
        usage_count: increment(1),
        last_used: Timestamp.now(),
      });

      // TripDetail로 돌아가면서 선택된 장소 정보 전달
      if (tripId) {
        // URL을 통해 데이터 전달 (간단한 방법)
        const params = new URLSearchParams({
          place_name: place.name,
          address: place.address || '',
          type: place.type,
          rating: place.rating?.toString() || '0',
          latitude: place.latitude?.toString() || '',
          longitude: place.longitude?.toString() || '',
        });
        navigate(`/trips/${tripId}/plans/new?${params.toString()}`);
      } else {
        smartGoBack(navigate, '/');
      }
    } catch (error) {
      console.error('장소 선택 실패:', error);
      setError('장소 선택 중 오류가 발생했습니다. 다시 시도해주세요.');
      
      // 네비게이션은 약간의 지연 후 진행
      setTimeout(() => {
        if (tripId) {
          navigate(`/trips/${tripId}/plans/new`);
        } else {
          smartGoBack(navigate, '/');
        }
      }, 2000);
    }
  };

  const handleToggleFavorite = async (place: Place) => {
    try {
      setError(null);
      await updateDoc(doc(db, 'users', user!.uid, 'places', place.id), {
        favorite: !place.favorite,
        updated_at: Timestamp.now(),
      });
      setSuccess(place.favorite ? '즐겨찾기에서 제거했습니다.' : '즐겨찾기에 추가했습니다.');
      setTimeout(() => setSuccess(null), 3000);
    } catch (error) {
      console.error('즐겨찾기 토글 실패:', error);
      setError('즐겨찾기 설정 중 오류가 발생했습니다.');
      setTimeout(() => setError(null), 5000);
    }
  };

  const handleAddNewPlace = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !newPlace.name.trim()) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const placeData: Omit<Place, 'id'> = {
        name: newPlace.name.trim(),
        address: newPlace.address.trim() || undefined,
        type: newPlace.type,
        rating: newPlace.rating || undefined,
        latitude: newPlace.latitude ? parseFloat(newPlace.latitude) : undefined,
        longitude: newPlace.longitude ? parseFloat(newPlace.longitude) : undefined,
        favorite: false,
        usage_count: 0,
        created_at: Timestamp.now(),
        updated_at: Timestamp.now(),
      };

      await addDoc(collection(db, 'users', user.uid, 'places'), placeData);
      
      // Form reset
      setNewPlace({
        name: '',
        address: '',
        type: 'attraction',
        rating: 0,
        latitude: '',
        longitude: '',
      });
      setShowNewPlaceForm(false);
      setSuccess('새 장소가 성공적으로 추가되었습니다!');
      setTimeout(() => setSuccess(null), 3000);
    } catch (error) {
      console.error('새 장소 추가 실패:', error);
      setError('장소 추가 중 오류가 발생했습니다. 다시 시도해주세요.');
      setTimeout(() => setError(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      setError('이 브라우저에서는 위치 서비스를 지원하지 않습니다.');
      return;
    }

    setError(null);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setNewPlace(prev => ({
          ...prev,
          latitude: latitude.toString(),
          longitude: longitude.toString(),
        }));
        setSuccess('현재 위치가 설정되었습니다.');
        setTimeout(() => setSuccess(null), 3000);
      },
      (error) => {
        console.error('위치 정보 가져오기 실패:', error);
        let errorMessage = '위치 정보를 가져올 수 없습니다.';
        
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = '위치 접근 권한이 거부되었습니다.';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = '위치 정보를 사용할 수 없습니다.';
            break;
          case error.TIMEOUT:
            errorMessage = '위치 정보 요청이 시간 초과되었습니다.';
            break;
        }
        
        setError(errorMessage);
        setTimeout(() => setError(null), 5000);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000,
      }
    );
  };

  // Skeleton Component
  const PlaceSkeleton = () => (
    <GlassCard variant="light" className="animate-pulse">
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-5 h-5 bg-white/20 rounded"></div>
            <div className="w-16 h-6 bg-white/20 rounded-full"></div>
          </div>
          <div className="w-3/4 h-6 bg-white/20 rounded mb-2"></div>
          <div className="w-1/2 h-4 bg-white/20 rounded mb-2"></div>
          <div className="flex items-center justify-between">
            <div className="w-20 h-4 bg-white/20 rounded"></div>
            <div className="w-24 h-4 bg-white/20 rounded"></div>
          </div>
        </div>
        <div className="ml-2 w-9 h-9 bg-white/20 rounded-lg"></div>
      </div>
    </GlassCard>
  );

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-20 px-4 pb-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-white text-center flex-1 text-glow">
                장소 검색
              </h1>
              <div className="w-10 h-10 bg-white/20 rounded-lg animate-pulse"></div>
            </div>
            
            <div className="mb-6">
              <div className="w-full h-12 bg-white/10 rounded-xl animate-pulse"></div>
            </div>
            
            <div className="mb-6 space-y-4">
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex-shrink-0 w-20 h-10 bg-white/10 rounded-lg animate-pulse"></div>
                ))}
              </div>
              <div className="flex space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-24 h-10 bg-white/10 rounded-lg animate-pulse"></div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <PlaceSkeleton key={i} />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      {/* Main Content */}
      <div className="pt-20 px-4 pb-6">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-white text-center flex-1 text-glow">
              장소 검색
            </h1>
            <WaveButton
              variant="ghost"
              size="sm"
              onClick={() => setShowNewPlaceForm(!showNewPlaceForm)}
              className="!p-2"
            >
              <Plus className="w-5 h-5" />
            </WaveButton>
          </div>

          {/* Error/Success Messages */}
          {error && (
            <div className="mb-4 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-200 text-sm">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-4 p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-200 text-sm">
              {success}
            </div>
          )}
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="장소명이나 주소로 검색..."
                className="w-full pl-12 pr-4 py-3 bg-glass-light backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-primary-300 focus:ring-1 focus:ring-primary-300"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="mb-6 space-y-4">
            {/* Type Filter */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Filter className="w-4 h-4 text-white/60" />
                <span className="text-white/60 text-sm">유형</span>
              </div>
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {placeTypes.map((type) => (
                  <button
                    key={type.value}
                    onClick={() => setSelectedType(type.value)}
                    className={`flex-shrink-0 px-3 py-2 rounded-lg text-sm transition-all ${
                      selectedType === type.value
                        ? 'bg-primary-500 text-white'
                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }`}
                  >
                    {type.icon} {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Options */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-white/60 text-sm">정렬</span>
              </div>
              <div className="flex space-x-2">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setSortBy(option.value)}
                    className={`px-3 py-2 rounded-lg text-sm transition-all ${
                      sortBy === option.value
                        ? 'bg-primary-500 text-white'
                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* New Place Form */}
          {showNewPlaceForm && (
            <GlassCard variant="travel" className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-4">새 장소 추가</h3>
              <form onSubmit={handleAddNewPlace} className="space-y-4">
                <div>
                  <input
                    type="text"
                    value={newPlace.name}
                    onChange={(e) => setNewPlace({ ...newPlace, name: e.target.value })}
                    placeholder="장소명 *"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-primary-300 focus:ring-1 focus:ring-primary-300"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    value={newPlace.address}
                    onChange={(e) => setNewPlace({ ...newPlace, address: e.target.value })}
                    placeholder="주소"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-primary-300 focus:ring-1 focus:ring-primary-300"
                  />
                </div>

                {/* 좌표 입력 */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/70 text-sm">위치 좌표 (선택사항)</span>
                    <WaveButton
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={getCurrentLocation}
                      className="!p-2"
                      title="현재 위치 가져오기"
                    >
                      <Navigation className="w-4 h-4" />
                    </WaveButton>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="number"
                        step="any"
                        value={newPlace.latitude}
                        onChange={(e) => setNewPlace({ ...newPlace, latitude: e.target.value })}
                        placeholder="위도 (latitude)"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-primary-300 focus:ring-1 focus:ring-primary-300"
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        step="any"
                        value={newPlace.longitude}
                        onChange={(e) => setNewPlace({ ...newPlace, longitude: e.target.value })}
                        placeholder="경도 (longitude)"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-primary-300 focus:ring-1 focus:ring-primary-300"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select
                    value={newPlace.type}
                    onChange={(e) => setNewPlace({ ...newPlace, type: e.target.value as Plan['type'] })}
                    className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-primary-300 focus:ring-1 focus:ring-primary-300"
                  >
                    {placeTypes.filter(t => t.value !== 'all').map(type => (
                      <option key={type.value} value={type.value} className="bg-primary-800">
                        {type.label}
                      </option>
                    ))}
                  </select>
                  
                  <div className="flex items-center space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewPlace({ ...newPlace, rating: star })}
                        className={`w-6 h-6 ${
                          star <= newPlace.rating ? 'text-yellow-400' : 'text-white/30'
                        }`}
                      >
                        <Star className="w-6 h-6 fill-current" />
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <WaveButton
                    type="submit"
                    variant="travel"
                    size="sm"
                    className="flex-1"
                    disabled={isSubmitting || !newPlace.name.trim()}
                  >
                    {isSubmitting ? '추가 중...' : '추가'}
                  </WaveButton>
                  <WaveButton
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowNewPlaceForm(false)}
                    disabled={isSubmitting}
                  >
                    취소
                  </WaveButton>
                </div>
              </form>
            </GlassCard>
          )}

          {/* Places List */}
          <div className="space-y-4">
            {filteredAndSortedPlaces.length === 0 ? (
              <GlassCard variant="light" className="text-center py-8">
                {searchQuery.trim() ? (
                  <>
                    <Search className="w-16 h-16 text-white/40 mx-auto mb-4" />
                    <p className="text-white/60 mb-4">
                      '{searchQuery}'에 대한 검색 결과가 없습니다
                    </p>
                    <WaveButton 
                      variant="travel" 
                      onClick={() => setShowNewPlaceForm(true)}
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      새 장소 추가
                    </WaveButton>
                  </>
                ) : (
                  <>
                    <MapPin className="w-16 h-16 text-white/40 mx-auto mb-4" />
                    <p className="text-white/60 mb-4">저장된 장소가 없어요</p>
                    <WaveButton 
                      variant="travel" 
                      onClick={() => setShowNewPlaceForm(true)}
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      첫 번째 장소 추가
                    </WaveButton>
                  </>
                )}
              </GlassCard>
            ) : (
              <>
                <div className="text-white/60 text-sm mb-2">
                  {filteredAndSortedPlaces.length}개의 장소
                </div>
                {filteredAndSortedPlaces.map((place) => (
                  <PlaceCard
                    key={place.id}
                    place={place}
                    onSelect={handleSelectPlace}
                    onToggleFavorite={handleToggleFavorite}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};