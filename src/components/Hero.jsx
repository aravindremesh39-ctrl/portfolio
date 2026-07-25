import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Sparkles, ArrowRight, ChevronDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Animated Counter Component for Statistics
const AnimatedCounter = ({ value, suffix = "+" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value, 10);
    if (start === end) return;

    const duration = 1200;
    const incrementTime = (duration / end);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}{suffix}</span>;
};

const Hero = () => {
  const { avatar } = portfolioData.personalInfo ? portfolioData.personalInfo : {};
  const heroRef = useRef(null);

  // Mouse tilt effect
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 10, y: y * -10 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Parallax background typography on scroll
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 600], [0, 100]);
  const smoothYParallax = useSpring(yParallax, { stiffness: 120, damping: 25 });

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-screen pt-28 pb-12 flex flex-col justify-between items-center bg-[#050505] overflow-hidden select-none"
    >
      {/* Top Bar Header Labels */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-white/50 border-b border-white/5 pb-4 z-20">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C8102E] animate-ping" />
          <span>UI/UX DESIGNER & GRAPHIC ARTIST</span>
        </div>
        <div className="flex items-center gap-2 text-white/70">
          <span className="text-[#C8102E]">✦</span>
          <span>CREATIVE PORTFOLIO</span>
        </div>
      </div>

      {/* Background Glowing Lights (z-0) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] bg-[#C8102E]/20 rounded-full blur-[140px] pointer-events-none z-0 animate-pulse-slow" />

      {/* Massive Background Typography 'PORTFOLIO' (Strictly behind Hero Image: z-0) */}
      <motion.div
        style={{ y: smoothYParallax }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 overflow-hidden"
      >
        <h1 className="font-bebas text-[22vw] sm:text-[20vw] font-extrabold tracking-tighter text-[#C8102E] opacity-[0.24] leading-none select-none drop-shadow-2xl">
          PORTFOLIO
        </h1>
      </motion.div>

      {/* Main Hero Grid Container (z-10 / z-20 so portrait overlaps PORTFOLIO) */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center my-auto z-10">
        
        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="lg:col-span-4 flex flex-col justify-center text-left z-20"
        >
          {/* Cursive Greeting */}
          <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#C8102E] mb-1 drop-shadow-md">
            Hello, I'm
          </span>

          {/* Headline Name - ARAVIND RAMESH */}
          <h1 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[0.9] mb-4">
            ARAVIND<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
              RAMESH
            </span>
          </h1>

          {/* Subheading Roles */}
          <div className="flex flex-col gap-1.5 mb-5">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
              <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#C8102E]">
                UI / UX Designer
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white/80">
                Graphic Designer
              </span>
            </div>
          </div>

          {/* Description Paragraph */}
          <p className="text-xs sm:text-sm text-white/60 leading-relaxed max-w-md mb-8">
            I design beautiful digital experiences, modern interfaces, 3D graphics, and branding with strategic visual excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-[#C8102E] text-white font-bebas text-lg tracking-widest hover:bg-[#E50914] transition-all duration-300 transform hover:scale-105 shadow-red-glow flex items-center gap-2 group"
            >
              <span>VIEW PORTFOLIO</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Center Portrait Image (Overlapping 'PORTFOLIO' text with z-20) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{
            rotateX: tilt.y,
            rotateY: tilt.x,
            transformStyle: 'preserve-3d',
          }}
          className="lg:col-span-5 flex justify-center items-center relative my-6 lg:my-0 group z-20"
        >
          {/* Outer Frame Container */}
          <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500">
            
            {/* Dark Gradient Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90 z-10" />

            {/* Portrait Image (Overlaps PORTFOLIO background text) */}
            <img
              src="/assets/aravind.png"
              alt="Aravind Ramesh"
              className="w-full h-full object-cover filter brightness-[0.9] contrast-[1.05] transition-transform duration-500 group-hover:scale-105"
              loading="eager"
            />

            {/* Bottom Dark Fade into background */}
            <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent z-10" />
          </div>

          {/* Floating Aesthetic Badge */}
          <div className="hidden sm:flex absolute right-[-10px] md:right-[-30px] top-1/2 -translate-y-1/2 max-w-[210px] glass-panel-red p-4 rounded-2xl border border-[#C8102E]/30 shadow-glass z-30 items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#C8102E]/30 border border-[#C8102E] flex items-center justify-center text-[#C8102E] shrink-0">
              <Sparkles size={16} />
            </div>
            <p className="text-[11px] text-white/80 leading-snug font-medium">
              Turning ideas into powerful digital experiences.
            </p>
          </div>
        </motion.div>

        {/* Right Side Vertical Statistics */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-3 flex flex-row lg:flex-col justify-around lg:justify-center items-center lg:items-end gap-8 lg:text-right border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8 z-20"
        >
          {/* Stat 1 */}
          <div className="flex flex-col items-center lg:items-end">
            <span className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-[#C8102E] leading-none drop-shadow-md">
              <AnimatedCounter value={3} suffix="+" />
            </span>
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mt-1">
              Years Experience
            </span>
          </div>

          <div className="hidden lg:block w-12 h-[1px] bg-white/10 my-2" />

          {/* Stat 2 */}
          <div className="flex flex-col items-center lg:items-end">
            <span className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-white leading-none drop-shadow-md">
              <AnimatedCounter value={40} suffix="+" />
            </span>
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mt-1">
              Projects Completed
            </span>
          </div>
        </motion.div>

      </div>

      {/* Bottom Scroll Indicator */}
      <div className="w-full flex justify-center z-20 pt-4">
        <a
          href="#about"
          className="flex flex-col items-center gap-1.5 text-white/40 hover:text-[#C8102E] transition-colors group"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] font-semibold">
            SCROLL DOWN
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          >
            <ChevronDown size={18} className="group-hover:text-[#C8102E]" />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
