import React from 'react';
import { motion } from 'framer-motion';
import { User, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { bio } = portfolioData.about;
  const { avatar } = portfolioData.personalInfo;

  return (
    <section id="about" className="relative py-24 bg-[#050505] overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#C8102E]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8102E]/10 border border-[#C8102E]/30 mb-4"
          >
            <User size={14} className="text-[#C8102E]" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C8102E]">
              ABOUT ME
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-bebas text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none"
          >
            BIOGRAPHY
          </motion.h2>
        </div>

        {/* Clean Modern Biography Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 1: Portrait Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-sm lg:max-w-none rounded-3xl overflow-hidden glass-panel p-3 border border-white/10 shadow-glass group">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="/assets/aravind.png"
                  alt="Aravind Ramesh"
                  className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-4 -right-2 glass-panel-red px-5 py-3.5 rounded-2xl border border-[#C8102E]/40 shadow-red-glow flex items-center gap-3 bg-[#050505]/90 backdrop-blur-xl">
                <div className="w-10 h-10 rounded-xl bg-[#C8102E] flex items-center justify-center text-white font-bebas text-xl shrink-0">
                  <Award size={20} />
                </div>
                <div>
                  <div className="font-bebas text-xl text-white tracking-wider leading-none">
                    3+ YEARS
                  </div>
                  <div className="text-[9px] text-white/70 uppercase tracking-widest font-semibold mt-0.5">
                    DESIGN EXPERIENCE
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Simplified Pure Biography Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col text-left space-y-6"
          >
            {bio.map((paragraph, index) => (
              <p
                key={index}
                className="text-base sm:text-lg text-white/80 leading-relaxed font-light"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
