import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3.5 bg-[#0B0B0B]/85 backdrop-blur-xl border-b border-white/10 shadow-glass'
            : 'py-6 bg-transparent border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 group text-decoration-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF7A00] to-[#C95F00] border border-[#FF7A00]/40 flex items-center justify-center font-bebas text-xl text-white tracking-widest shadow-orange-glow group-hover:scale-105 transition-transform duration-300">
              AR
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bebas text-lg tracking-wider text-white group-hover:text-[#FF7A00] transition-colors leading-none">
                ARAVIND RAMESH
              </span>
              <span className="text-[9px] uppercase tracking-widest text-white/40 leading-tight">
                PORTFOLIO
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId || (activeSection === 'hero' && sectionId === 'home');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 relative ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-[#FF7A00] rounded-full -z-10 shadow-orange-glow"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              className="group relative px-6 py-2.5 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#C95F00] text-white font-medium text-xs uppercase tracking-widest overflow-hidden shadow-orange-glow hover:shadow-orange-glow-lg transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:text-[#FF7A00] transition-colors"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0B0B0B]/95 backdrop-blur-2xl pt-28 px-6 pb-12 flex flex-col justify-between lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="font-bebas text-3xl tracking-wider text-white/80 hover:text-[#FF7A00] transition-colors py-2 border-b border-white/5 flex items-center justify-between group"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight size={20} className="text-white/30 group-hover:text-[#FF7A00] group-hover:translate-x-1 transition-all" />
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col gap-4 pt-8">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 rounded-xl bg-[#FF7A00] text-white font-bebas text-xl text-center tracking-widest shadow-orange-glow"
              >
                LET'S TALK
              </a>
              <div className="text-center text-xs text-white/40 uppercase tracking-widest pt-2">
                © 2026 ARAVIND RAMESH • ALL RIGHTS RESERVED
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
