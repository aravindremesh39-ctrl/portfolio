import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { name, title, tagline, subTagline, avatar } = portfolioData.personalInfo;

  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  // Fade up variant
  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-[#0B0B0B] pt-24 pb-16 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Side Details */}
        <motion.div
          className="lg:col-span-7 flex flex-col justify-center text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Tag / Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mb-6"
            variants={itemVariants}
          >
            <span className="flex items-center justify-center w-4 h-4 rounded-full bg-accentOrange text-black">
              <Check size={10} strokeWidth={4} />
            </span>
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-white/80">
              {title}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[2.85rem] xl:text-[3.75rem] 2xl:text-7xl font-extrabold tracking-tight leading-[1.05] text-white font-display mb-6"
            variants={itemVariants}
          >
            DESIGNING DIGITAL
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-accentOrange">
              EXPERIENCES
            </span> THAT
            <br />
            PEOPLE REMEMBER
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-base sm:text-lg text-white/60 max-w-xl mb-8 leading-relaxed"
            variants={itemVariants}
          >
            {subTagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 items-center"
            variants={itemVariants}
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-white text-black font-semibold text-sm tracking-wider hover:bg-accentOrange hover:text-white transition-all duration-300 transform hover:scale-[1.03] shadow-lg shadow-white/5"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-transparent text-white font-semibold text-sm tracking-wider border border-white/20 hover:border-accentOrange hover:bg-white/5 transition-all duration-300 transform hover:scale-[1.03]"
            >
              Let's Collaborate
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side Portrait */}
        <motion.div
          className="lg:col-span-5 flex justify-center items-center relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        >
          {/* Animated decorative glowing circle behind the portrait */}
          <div className="absolute -top-12 -left-12 w-72 h-72 rounded-full bg-accentOrange/10 blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-72 h-72 rounded-full bg-white/5 blur-[120px] pointer-events-none" />

          {/* Portrait Container */}
          <div className="relative w-full max-w-[420px] lg:max-w-[340px] xl:max-w-[420px] aspect-[4/5] rounded-[2rem] overflow-hidden glass-panel p-3">
            <div className="w-full h-full rounded-[1.8rem] overflow-hidden relative group">
              <motion.img
                src={avatar}
                alt={name}
                className="w-full h-full object-cover filter brightness-[0.85] transition-all duration-700 group-hover:scale-105"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Achievement Badge */}
            <motion.div
              className="absolute -bottom-4 -left-4 md:-left-8 bg-black/85 backdrop-blur-md border border-white/10 px-5 py-4 rounded-2xl flex items-center gap-3 shadow-glass"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-10 h-10 rounded-full bg-accentOrange/25 border border-accentOrange/50 flex items-center justify-center text-accentOrange text-sm font-bold">
                50+
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-semibold text-white tracking-wide">Projects Delivered</span>
                <span className="text-[10px] text-white/50">Across Web & Mobile</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Social Links - Fixed on Right (for Desktop) and Absolute for Mobile Layout */}
      <div className="hidden lg:flex fixed right-10 bottom-16 flex-col items-center gap-6 z-40">
        <div className="w-[1px] h-20 bg-white/20 mb-2" />
        {portfolioData.socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.25em] text-white/40 hover:text-accentOrange transition-all duration-300 py-2 hover:-translate-x-1"
            style={{ writingMode: 'vertical-rl' }}
          >
            {social.name}
          </a>
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 z-10 pointer-events-none">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-white/40" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
