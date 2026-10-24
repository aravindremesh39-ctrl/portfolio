import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import CustomCursor from './components/CustomCursor';
import GalaxyBackground from './components/GalaxyBackground';

// Animated Route Wrapper
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:slug" element={<ProjectDetails />} />
    </Routes>
  );
};

function App() {
  // Lenis Smooth Scroll Initialization
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <div className="relative bg-[#0B0B0B] text-white min-h-screen selection:bg-[#FF7A00] selection:text-white font-poppins">
        {/* Premium Smooth Custom Cursor */}
        <CustomCursor />

        {/* Grain texture overlay */}
        <div className="grain-overlay" />

        {/* Galaxy Background */}
        <GalaxyBackground />

        {/* Routes */}
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
