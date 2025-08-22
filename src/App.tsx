import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts';
import { WaveBackground } from './components/WaveBackground';
import { ConditionalMusicPlayer } from './components/ConditionalMusicPlayer';
import { ConditionalHeader } from './components/ConditionalHeader';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const TripCreate = lazy(() => import('./pages/TripCreate').then(module => ({ default: module.TripCreate })));
const TripEdit = lazy(() => import('./pages/TripEdit').then(module => ({ default: module.TripEdit })));
const TripDetail = lazy(() => import('./pages/TripDetail').then(module => ({ default: module.TripDetail })));
const PlanDetail = lazy(() => import('./pages/PlanDetail').then(module => ({ default: module.PlanDetail })));
const PlaceSearch = lazy(() => import('./pages/PlaceSearch').then(module => ({ default: module.PlaceSearch })));
const TripMap = lazy(() => import('./pages/TripMap').then(module => ({ default: module.TripMap })));
const Login = lazy(() => import('./pages/Login').then(module => ({ default: module.Login })));
const Settings = lazy(() => import('./pages/Settings').then(module => ({ default: module.Settings })));
const AboutUs = lazy(() => import('./components/AboutUs').then(module => ({ default: module.AboutUs })));
const TermsOfService = lazy(() => import('./components/TermsOfService').then(module => ({ default: module.TermsOfService })));

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-white text-xl">Loading...</div>
  </div>
);

function App() {

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen relative">
          <WaveBackground className="min-h-screen" />
          
          {/* Conditional Header */}
          <ConditionalHeader />
          
          <div className="relative z-10 min-h-screen">
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/trips/new" element={<TripCreate />} />
                <Route path="/trips/:id/edit" element={<TripEdit />} />
                <Route path="/trips/:id" element={<TripDetail />} />
                <Route path="/trips/:tripId/plans/new" element={<PlanDetail />} />
                <Route path="/trips/:tripId/plans/:planId" element={<PlanDetail />} />
                <Route path="/places/search" element={<PlaceSearch />} />
                <Route path="/trips/:id/map" element={<TripMap />} />
                <Route path="/trip-map" element={<TripMap />} />
                <Route path="*" element={<div>404 - Page Not Found</div>} />
              </Routes>
            </Suspense>
          </div>
          
          {/* Conditional Music Player - Fixed Bottom */}
          <ConditionalMusicPlayer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;