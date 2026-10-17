import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';

const VpsPricing = lazy(() => import('./pages/VpsPricing'));
const CloudHosting = lazy(() => import('./pages/CloudHosting'));
const Domains = lazy(() => import('./pages/Domains'));
const Blog = lazy(() => import('./pages/Blog'));
const About = lazy(() => import('./pages/About'));
const SupportFaq = lazy(() => import('./pages/SupportFaq'));
const Auth = lazy(() => import('./pages/Auth'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const NotFound = lazy(() => import('./pages/NotFound'));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <div key={location.pathname} className="animate-page-enter">
      <Suspense
        fallback={
          <div className="min-h-screen bg-[#050508] flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-[#7F56D9] border-t-transparent animate-spin" />
          </div>
        }
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/vps" element={<VpsPricing />} />
          <Route path="/cloud-hosting" element={<CloudHosting />} />
          <Route path="/domains" element={<Domains />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<SupportFaq />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;