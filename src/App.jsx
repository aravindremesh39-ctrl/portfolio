import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  useEffect(() => {
    const handleMouseEnter = () => setCursorVariant("hover");
    const handleMouseLeave = () => setCursorVariant("default");

    // Query interactive tags to trigger custom cursor expansion
    const attachHoverEvents = () => {
      const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    attachHoverEvents();

    // Re-attach in case components render dynamically
    const observer = new MutationObserver(attachHoverEvents);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const cursorVariants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      backgroundColor: "#FFFFFF",
      width: 16,
      height: 16,
      borderRadius: "50%",
      mixBlendMode: "difference",
      pointerEvents: "none",
      position: "fixed",
      zIndex: 9999,
      // Snappy response
      transition: { type: "spring", stiffness: 800, damping: 35, mass: 0.1 }
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      backgroundColor: "rgba(255, 122, 0, 0.05)",
      width: 48,
      height: 48,
      border: "1.5px solid #FF7A00",
      borderRadius: "50%",
      mixBlendMode: "normal",
      pointerEvents: "none",
      position: "fixed",
      zIndex: 9999,
      transition: { type: "spring", stiffness: 800, damping: 35, mass: 0.1 }
    }
  };

  return (
    <div className="relative bg-[#0B0B0B] text-white min-h-screen custom-cursor-active selection:bg-accentOrange selection:text-white">
      {/* Premium Cursor Follower for Desktop */}
      <motion.div
        variants={cursorVariants}
        animate={cursorVariant}
        className="hidden md:block pointer-events-none"
      />

      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Page Sections */}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
