import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';

// Floating Red Ambient Particles Canvas
const ParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = Array.from({ length: 30 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.4 + 0.1,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 16, 46, ${p.alpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#C8102E';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

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
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorHovered, setCursorHovered] = useState(false);

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

  // Fast Custom Cursor Listener
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setCursorHovered(true);
    const handleMouseLeave = () => setCursorHovered(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const attachHoverEvents = () => {
      const interactiveEls = document.querySelectorAll('a, button, input, textarea, [role="button"]');
      interactiveEls.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    attachHoverEvents();
    const observer = new MutationObserver(attachHoverEvents);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <Router>
      <div className="relative bg-[#050505] text-white min-h-screen custom-cursor-active selection:bg-[#C8102E] selection:text-white font-poppins">
        
        {/* Snappy Cursor Follower */}
        <motion.div
          className="hidden md:block fixed pointer-events-none z-50 rounded-full mix-blend-screen"
          animate={{
            x: mousePosition.x - (cursorHovered ? 20 : 10),
            y: mousePosition.y - (cursorHovered ? 20 : 10),
            width: cursorHovered ? 40 : 20,
            height: cursorHovered ? 40 : 20,
            backgroundColor: cursorHovered ? 'rgba(200, 16, 46, 0.3)' : 'rgba(200, 16, 46, 0.7)',
            border: cursorHovered ? '1.5px solid #C8102E' : '1px solid rgba(255, 255, 255, 0.5)',
            boxShadow: cursorHovered ? '0 0 25px rgba(200, 16, 46, 0.9)' : '0 0 10px rgba(200, 16, 46, 0.5)',
          }}
          transition={{ type: 'spring', stiffness: 2000, damping: 50, mass: 0.01 }}
        />

        {/* Grain texture overlay */}
        <div className="grain-overlay" />

        {/* Floating Ambient Particles */}
        <ParticleCanvas />

        {/* Routes */}
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
