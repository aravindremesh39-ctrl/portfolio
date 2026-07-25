import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#030303] border-t border-white/10 py-10 px-6 md:px-12 select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Brand info */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#C8102E] flex items-center justify-center font-bebas text-base text-white shadow-red-glow">
            AR
          </div>
          <span className="text-xs text-white/50 tracking-wider">
            © 2026 <strong className="text-white font-medium">Aravind Ramesh</strong>. All rights reserved.
          </span>
        </div>

        {/* Center Tagline */}
        <div className="text-xs text-white/40 uppercase tracking-widest font-mono text-center">
          Designed & Developed with React, Vite & Tailwind CSS
        </div>

        {/* Right Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-[#C8102E] hover:border-[#C8102E] transition-all duration-300 transform hover:scale-110 shadow-md group"
          title="Back to Top"
        >
          <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>
    </footer>
  );
};

export default Footer;
