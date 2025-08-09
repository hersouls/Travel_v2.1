import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import { cn } from '../lib/utils';
import { Plan } from '../types/plan';
import 'leaflet/dist/leaflet.css';

// Leaflet 아이콘 설정
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// 기본 마커 아이콘 설정
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

interface TravelMapProps {
  plans: Plan[];
  center?: LatLngTuple;
  zoom?: number;
  className?: string;
  height?: string;
  onPlanClick?: (plan: Plan) => void;
}

// 지도 중심점을 계산하는 컴포넌트
const MapController: React.FC<{ plans: Plan[] }> = ({ plans }) => {
  const map = useMap();
  
  useEffect(() => {
    if (plans.length === 0) return;
    
    const validPlans = plans.filter(plan => plan.latitude && plan.longitude);
    if (validPlans.length === 0) return;
    
    if (validPlans.length === 1) {
      const plan = validPlans[0];
      map.setView([plan.latitude!, plan.longitude!], 15);
    } else {
      const bounds = L.latLngBounds(
        validPlans.map(plan => [plan.latitude!, plan.longitude!] as LatLngTuple)
      );
      map.fitBounds(bounds, { padding: [20, 20] });
    }
  }, [plans, map]);
  
  return null;
};

export const TravelMap: React.FC<TravelMapProps> = ({
  plans,
  center = [37.5665, 126.9780], // 서울 시청 기본값
  zoom = 10,
  className,
  height = '400px',
  onPlanClick
}) => {
  const mapRef = useRef<L.Map>(null);
  
  // Day별로 정렬된 plans
  const sortedPlans = [...plans].sort((a, b) => {
    if (a.day !== b.day) return a.day - b.day;
    return a.start_time.localeCompare(b.start_time);
  });
  
  const validPlans = sortedPlans.filter(plan => plan.latitude && plan.longitude);
  
  // TODO: 향후 여행 경로를 선으로 연결할 때 사용할 좌표들
  // const polylinePositions: LatLngTuple[] = validPlans.map(plan => 
  //   [plan.latitude!, plan.longitude!] as LatLngTuple
  // );
  
  const getMarkerColor = (type: Plan['type']) => {
    switch (type) {
      case 'attraction':
        return '#f59e0b'; // travel-orange
      case 'restaurant':
        return '#10b981'; // travel-green
      case 'hotel':
        return '#8b5cf6'; // travel-purple
      case 'transport':
        return '#0ea5e9'; // travel-blue
      default:
        return '#6b7280'; // gray
    }
  };
  
  const createCustomIcon = (type: Plan['type'], orderNumber?: number) => {
    const color = getMarkerColor(type);
    return L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: ${color};
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: white;
          font-size: 12px;
        ">
          ${orderNumber || ''}
        </div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 16],
    });
  };
  
  return (
    <div className={cn('relative', className)} style={{ height }}>
      <MapContainer
        ref={mapRef}
        center={center}
        zoom={zoom}
        className="w-full h-full rounded-xl overflow-hidden"
        zoomControl={true}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        <MapController plans={validPlans} />
        
        {/* Plan들을 시간 순서대로 선으로 연결 */}
        {validPlans.map((plan, index) => {
          // 다음 Plan과 연결선 그리기
          if (index < validPlans.length - 1) {
            const currentPlan = plan;
            const nextPlan = validPlans[index + 1];
            
            // Day가 같은 경우 실선, 다른 경우 점선
            const isSameDay = currentPlan.day === nextPlan.day;
            
            return (
              <Polyline
                key={`line-${index}`}
                positions={[
                  [currentPlan.latitude!, currentPlan.longitude!],
                  [nextPlan.latitude!, nextPlan.longitude!]
                ]}
                pathOptions={{
                  color: isSameDay ? '#10b981' : '#f59e0b', // 같은 날은 초록색, 다른 날은 주황색
                  weight: isSameDay ? 3 : 2,
                  opacity: isSameDay ? 0.8 : 0.5,
                  dashArray: isSameDay ? '' : '5, 10', // 다른 날은 점선
                }}
              />
            );
          }
          return null;
        })}
        
        {validPlans.map((plan, index) => (
          <Marker
            key={index}
            position={[plan.latitude!, plan.longitude!]}
            icon={createCustomIcon(plan.type, index + 1)}
            eventHandlers={{
              click: () => onPlanClick?.(plan)
            }}
          >
            <Popup>
              <div className="p-2 min-w-[200px]">
                <h3 className="font-semibold text-lg mb-2">{plan.place_name}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {plan.start_time}
                  {plan.end_time && ` ~ ${plan.end_time}`}
                </p>
                <div className="flex items-center space-x-2">
                  <span 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: getMarkerColor(plan.type) }}
                  ></span>
                  <span className="text-sm capitalize">{plan.type}</span>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      {validPlans.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-xl">
          <div className="text-center text-white/80">
            <p className="text-lg font-semibold mb-2">위치 정보가 없습니다</p>
            <p className="text-sm">일정에 위치를 추가해보세요</p>
          </div>
        </div>
      )}
    </div>
  );
};