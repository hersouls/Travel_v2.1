import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts';
import { GlassCard } from '../components/GlassCard';
import { WaveButton } from '../components/WaveButton';
import { Header } from '../components/Header';

import { TravelMap } from '../components/TravelMap';
import { PlanCard } from '../components/PlanCard';
import { 
  Filter, 
  MapPin, 
  Calendar,
  Navigation,
  Edit3,
  ArrowLeft
} from 'lucide-react';
import { 
  doc, 
  onSnapshot, 
  collection, 
  query, 
  where, 
  orderBy,
  updateDoc
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Trip } from '../types/trip';
import { Plan } from '../types/plan';
import { addDaysYmd, getUtcWeekday, getUtcYmdParts } from '../utils/time';

export const TripMap: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [trips, setTrips] = useState<Trip[]>([]);
  const [trip, setTrip] = useState<Trip | null>(null);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [filteredPlans, setFilteredPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedDay, setSelectedDay] = useState<number | 'all'>('all');
  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [selectedTripId, setSelectedTripId] = useState<string | null>(id || null);
  
  // 좌표 입력 모달
  const [showCoordinateModal, setShowCoordinateModal] = useState(false);
  const [coordinateInput, setCoordinateInput] = useState({
    planId: '',
    latitude: '',
    longitude: '',
  });

  // 모든 여행 데이터 로드 (전체 지도 보기 모드)
  useEffect(() => {
    if (!user || id) return;
    
    const tripsQuery = query(
      collection(db, 'trips'),
      where('user_id', '==', user.uid),
      orderBy('created_at', 'desc')
    );
    
    const unsubscribe = onSnapshot(tripsQuery, (snapshot) => {
      const tripsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Trip[];
      setTrips(tripsData);
      setLoading(false);
    });
    
    return () => unsubscribe();
  }, [user, id]);

  // 특정 여행과 플랜 데이터 로드
  useEffect(() => {
    if (!user) return;
    
    const tripId = selectedTripId || id;
    if (!tripId) {
      // 전체 플랜 로드
      const plansQuery = query(
        collection(db, 'plans'),
        orderBy('day', 'asc'),
        orderBy('start_time', 'asc')
      );
      
      const plansUnsubscribe = onSnapshot(
        plansQuery,
        (snapshot) => {
          const plansData = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          })) as Plan[];
          // 사용자의 여행에 속한 플랜만 필터링
          const userTripIds = trips.map(t => t.id);
          const userPlans = plansData.filter(p => userTripIds.includes(p.trip_id));
          setPlans(userPlans);
        }
      );
      
      return () => plansUnsubscribe();
    }

    // Trip 데이터 구독
    const tripUnsubscribe = onSnapshot(
      doc(db, 'trips', tripId),
      (doc) => {
        if (doc.exists()) {
          const tripData = { id: doc.id, ...doc.data() } as Trip;
          if (tripData.user_id !== user.uid) {
            setError('접근 권한이 없습니다.');
            setLoading(false);
            return;
          }
          setTrip(tripData);
        } else {
          setError('여행을 찾을 수 없습니다.');
        }
        setLoading(false);
      },
      (error) => {
        console.error('Trip 로딩 실패:', error);
        setError('여행 데이터를 불러오는데 실패했습니다.');
        setLoading(false);
      }
    );

    // Plans 데이터 구독
    const plansQuery = query(
      collection(db, 'plans'),
      where('trip_id', '==', tripId),
      orderBy('day', 'asc'),
      orderBy('start_time', 'asc')
    );

    const plansUnsubscribe = onSnapshot(
      plansQuery,
      (snapshot) => {
        const plansData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Plan[];
        setPlans(plansData);
      },
      (error) => {
        console.error('Plans 로딩 실패:', error);
      }
    );

    return () => {
      tripUnsubscribe();
      plansUnsubscribe();
    };
  }, [selectedTripId, id, user, trips]);

  // Filter plans based on selected day
  useEffect(() => {
    if (selectedDay === 'all') {
      setFilteredPlans(plans);
    } else {
      setFilteredPlans(plans.filter(plan => plan.day === selectedDay));
    }
  }, [plans, selectedDay]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-lg">지도를 불러오는 중...</div>
      </div>
    );
  }

  if (error || (!trip && id)) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <GlassCard variant="travel" className="text-center">
          <p className="text-white mb-4">{error || '여행을 찾을 수 없습니다.'}</p>
          <WaveButton onClick={() => navigate('/')}>
            Back
          </WaveButton>
        </GlassCard>
      </div>
    );
  }

  const getTripDuration = () => {
    if (!trip) return 0;
    const start = new Date(trip.start_date);
    const end = new Date(trip.end_date);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
  };

  const getDayWithDate = (dayNumber: number) => {
    if (!trip) return `Day ${dayNumber}`;

    const target = addDaysYmd(trip.start_date, dayNumber - 1);
    const { month, day } = getUtcYmdParts(target);
    const mm = String(month).padStart(2, '0');
    const dd = String(day).padStart(2, '0');
    const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
    const dayName = dayNames[getUtcWeekday(target)];

    return `${mm}.${dd}.${dayName}`;
  };

  const days = trip ? Array.from({ length: getTripDuration() }, (_, i) => i + 1) : [];
  const plansWithCoordinates = filteredPlans.filter(plan => plan.latitude && plan.longitude);

  const handlePlanClick = (plan: Plan) => {
    setSelectedPlan(plan);
    setShowSidebar(true);
  };

  const handleEditPlan = (plan: Plan) => {
    navigate(`/trips/${id}/plans/${plan.id}`);
  };

  const handleAddCoordinates = (plan: Plan) => {
    setCoordinateInput({
      planId: plan.id!,
      latitude: plan.latitude?.toString() || '',
      longitude: plan.longitude?.toString() || '',
    });
    setShowCoordinateModal(true);
  };

  const handleSaveCoordinates = async () => {
    if (!coordinateInput.planId || !coordinateInput.latitude || !coordinateInput.longitude) return;
    
    const lat = parseFloat(coordinateInput.latitude);
    const lng = parseFloat(coordinateInput.longitude);
    
    if (isNaN(lat) || isNaN(lng) || lat < -90 || lat > 90 || lng < -180 || lng > 180) {
      alert('올바른 좌표를 입력해주세요. (위도: -90~90, 경도: -180~180)');
      return;
    }

    try {
      await updateDoc(doc(db, 'plans', coordinateInput.planId), {
        latitude: lat,
        longitude: lng,
        updated_at: new Date(),
      });
      
      setShowCoordinateModal(false);
      setCoordinateInput({ planId: '', latitude: '', longitude: '' });
    } catch (error) {
      console.error('좌표 저장 실패:', error);
      alert('좌표 저장에 실패했습니다.');
    }
  };

  return (
    <div className="h-screen relative overflow-hidden">
      <Header />
      
      {/* Title Bar */}
      <div className="fixed top-16 left-0 right-0 z-20 bg-black/20 backdrop-blur-lg">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {(id || selectedTripId) && (
                <WaveButton
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    if (id) {
                      navigate(-1);
                    } else if (selectedTripId) {
                      navigate(`/trips/${selectedTripId}`);
                    }
                  }}
                  className="!p-2"
                >
                  <ArrowLeft className="w-5 h-5" />
                </WaveButton>
              )}
              <h1 className="text-xl font-bold text-white text-glow">
                {trip ? `${trip.title} 지도` : '전체 여행 지도'}
              </h1>
            </div>
            <WaveButton
              variant="ghost"
              size="sm"
              onClick={() => setShowSidebar(!showSidebar)}
              className="!p-2 ml-4"
            >
              <Filter className="w-5 h-5" />
            </WaveButton>
          </div>
        </div>
        
        {/* Trip Selector - For overall map view */}
        {!id && trips.length > 0 && (
          <div className="px-4 pb-4">
            <GlassCard variant="light" className="p-3">
              <div className="flex items-center space-x-2 mb-2">
                <MapPin className="w-4 h-4 text-white/60" />
                <span className="text-white/60 text-sm">여행 선택</span>
              </div>
              
              <div className="flex space-x-2 overflow-x-auto pb-2">
                <button
                  onClick={() => {
                    setSelectedTripId(null);
                    setSelectedDay('all');
                  }}
                  className={`flex-shrink-0 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    !selectedTripId
                      ? 'bg-primary-500 text-white'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  전체
                </button>
                
                {trips.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      setSelectedTripId(t.id!);
                      setTrip(t);
                      setSelectedDay(1);
                    }}
                    className={`flex-shrink-0 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedTripId === t.id
                        ? 'bg-primary-500 text-white'
                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }`}
                  >
                    {t.title}
                  </button>
                ))}
              </div>
              
              {/* Day Filter - When a trip is selected */}
              {selectedTripId && trip && (
                <div className="mt-3 pt-3 border-t border-white/10">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="w-4 h-4 text-white/60" />
                    <span className="text-white/60 text-sm">Day 필터</span>
                  </div>
                  
                  <div className="flex space-x-2 overflow-x-auto pb-2">
                    <button
                      onClick={() => setSelectedDay('all')}
                      className={`flex-shrink-0 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedDay === 'all'
                          ? 'bg-primary-500 text-white'
                          : 'bg-white/10 text-white/70 hover:bg-white/20'
                      }`}
                    >
                      전체
                      <span className="ml-1 text-xs bg-white/20 rounded-full px-1">
                        {plansWithCoordinates.length}
                      </span>
                    </button>
                    
                    {days.map((day) => {
                      const dayPlansWithCoords = plans.filter(p => p.day === day && p.latitude && p.longitude);
                      return (
                        <button
                          key={day}
                          onClick={() => setSelectedDay(day)}
                          className={`relative flex-shrink-0 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                            selectedDay === day
                              ? 'bg-primary-500 text-white'
                              : 'bg-white/10 text-white/70 hover:bg-white/20'
                          }`}
                        >
                          <div className="flex flex-col items-center">
                            <div className="flex items-center gap-1">
                              <span>Day {day}</span>
                              {dayPlansWithCoords.length > 0 && (
                                <span className="text-xs bg-white/20 rounded-full px-1.5">
                                  {dayPlansWithCoords.length}
                                </span>
                              )}
                            </div>
                            <span className="text-xs opacity-70">{getDayWithDate(day)}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </GlassCard>
          </div>
        )}
      </div>

      {/* Map */}
      <div className={`fixed inset-0 ${!id && trips.length > 0 && selectedTripId ? 'pt-96' : !id && trips.length > 0 ? 'pt-72' : 'pt-32'} px-4`}>
        <TravelMap
          plans={filteredPlans}
          onPlanClick={handlePlanClick}
          className="h-full w-full"
          height="100%"
        />
      </div>

      {/* Day Filter - Bottom (only for specific trip view) */}
      {id && trip && (
        <div className="absolute bottom-4 left-4 right-4 z-10 px-4">
          <GlassCard variant="light" className="p-4">
            <div className="flex items-center space-x-2 mb-3">
              <Calendar className="w-4 h-4 text-white/60" />
              <span className="text-white/60 text-sm">Day 필터</span>
            </div>
            
            <div className="flex space-x-2 overflow-x-auto pb-2">
              <button
                onClick={() => setSelectedDay('all')}
                className={`flex-shrink-0 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedDay === 'all'
                    ? 'bg-primary-500 text-white'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                전체
                <span className="ml-1 text-xs bg-white/20 rounded-full px-1">
                  {plansWithCoordinates.length}
                </span>
              </button>
              
              {days.map((day) => {
                const dayPlansWithCoords = plans.filter(p => p.day === day && p.latitude && p.longitude);
                return (
                  <button
                    key={day}
                    onClick={() => setSelectedDay(day)}
                    className={`relative flex-shrink-0 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedDay === day
                        ? 'bg-primary-500 text-white'
                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <div className="flex items-center gap-1">
                        <span>Day {day}</span>
                        {dayPlansWithCoords.length > 0 && (
                          <span className="text-xs bg-white/20 rounded-full px-1.5">
                            {dayPlansWithCoords.length}
                          </span>
                        )}
                      </div>
                      <span className="text-xs opacity-70">{getDayWithDate(day)}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </GlassCard>
        </div>
      )}

      {/* Sidebar */}
      {showSidebar && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-30"
            onClick={() => setShowSidebar(false)}
          />
          <div className="fixed right-0 top-0 h-full w-80 bg-black/50 backdrop-blur-lg z-40 overflow-y-auto">
            <div className="p-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">일정 목록</h2>
                <button
                  onClick={() => setShowSidebar(false)}
                  className="text-white/60 hover:text-white"
                >
                  ✕
                </button>
              </div>
              
              {selectedPlan && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-4">선택된 일정</h3>
                  <PlanCard plan={selectedPlan} />
                  <div className="mt-3 space-y-2">
                    <WaveButton
                      variant="travel"
                      size="sm"
                      onClick={() => handleEditPlan(selectedPlan)}
                      className="w-full"
                    >
                      <Edit3 className="w-4 h-4 mr-2" />
                      일정 편집
                    </WaveButton>
                    {(!selectedPlan.latitude || !selectedPlan.longitude) && (
                      <WaveButton
                        variant="ghost"
                        size="sm"
                        onClick={() => handleAddCoordinates(selectedPlan)}
                        className="w-full"
                      >
                        <Navigation className="w-4 h-4 mr-2" />
                        위치 추가
                      </WaveButton>
                    )}
                  </div>
                </div>
              )}
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  {selectedDay === 'all' ? '전체 일정' : `Day ${selectedDay} 일정`}
                </h3>
                
                {filteredPlans.length === 0 ? (
                  <div className="text-center py-8">
                    <MapPin className="w-12 h-12 text-white/40 mx-auto mb-4" />
                    <p className="text-white/60">일정이 없습니다</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {filteredPlans.map((plan) => (
                      <div key={plan.id} className="relative">
                        <PlanCard 
                          plan={plan} 
                          onClick={() => setSelectedPlan(plan)}
                        />
                        {(!plan.latitude || !plan.longitude) && (
                          <div className="absolute top-2 right-2">
                            <button
                              onClick={() => handleAddCoordinates(plan)}
                              className="w-6 h-6 bg-red-500/80 rounded-full flex items-center justify-center text-white text-xs"
                              title="위치 정보 없음"
                            >
                              !
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Coordinate Input Modal */}
      {showCoordinateModal && (
        <>
          <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setShowCoordinateModal(false)} />
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <GlassCard variant="travel" className="w-full max-w-md">
              <h3 className="text-lg font-semibold text-white mb-4">
                <Navigation className="w-5 h-5 inline mr-2" />
                좌표 입력
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    위도 (Latitude) *
                  </label>
                  <input
                    type="text"
                    value={coordinateInput.latitude}
                    onChange={(e) => setCoordinateInput({ ...coordinateInput, latitude: e.target.value })}
                    placeholder="예: 35.710063"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-primary-300 focus:ring-1 focus:ring-primary-300"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    경도 (Longitude) *
                  </label>
                  <input
                    type="text"
                    value={coordinateInput.longitude}
                    onChange={(e) => setCoordinateInput({ ...coordinateInput, longitude: e.target.value })}
                    placeholder="예: 139.810700"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-primary-300 focus:ring-1 focus:ring-primary-300"
                  />
                </div>
                
                <div className="bg-travel-blue/20 border border-travel-blue/30 rounded-xl p-3">
                  <p className="text-white/80 text-sm">
                    💡 <strong>좌표 찾는 방법:</strong><br/>
                    1. Google Maps에서 장소 검색<br/>
                    2. 장소를 우클릭 → 좌표 복사<br/>
                    3. 위도, 경도 순서로 입력
                  </p>
                </div>
                
                <div className="flex space-x-3">
                  <WaveButton
                    variant="travel"
                    onClick={handleSaveCoordinates}
                    className="flex-1"
                  >
                    저장
                  </WaveButton>
                  <WaveButton
                    variant="ghost"
                    onClick={() => setShowCoordinateModal(false)}
                    className="flex-1"
                  >
                    취소
                  </WaveButton>
                </div>
              </div>
            </GlassCard>
          </div>
        </>
      )}

      {/* No coordinates warning */}
      {plansWithCoordinates.length === 0 && (
        <div className="absolute top-1/2 left-4 right-4 z-10 transform -translate-y-1/2 px-4">
          <GlassCard variant="light" className="text-center">
            <Navigation className="w-12 h-12 text-white/40 mx-auto mb-4" />
            <p className="text-white/60 mb-2">지도에 표시할 일정이 없습니다</p>
            <p className="text-white/50 text-sm">일정에 위치 정보를 추가해보세요</p>
          </GlassCard>
        </div>
      )}
    </div>
  );
};