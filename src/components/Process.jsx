import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Process = () => {
  return (
    <section
      id="process"
      className="relative py-24 md:py-32 bg-[#0B0B0B]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.25em] text-accentOrange mb-4 flex items-center gap-3 font-semibold"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accentOrange" />
          04 / THE METHOD
        </motion.div>

        {/* Title */}
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-white mb-16 font-display text-left"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          Design Process Philosophy
        </motion.h2>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {portfolioData.process.map((step, idx) => (
            <motion.div
              key={step.number}
              className="glass-panel p-8 rounded-[2rem] shadow-glass flex flex-col justify-between text-left relative overflow-hidden group min-h-[300px]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, borderColor: 'rgba(255,122,0,0.2)' }}
            >
              {/* Subtle Glowing Background Circle on Card Hover */}
              <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-accentOrange/0 group-hover:bg-accentOrange/5 blur-xl transition-all duration-500" />

              <div>
                {/* Step Number */}
                <span className="text-4xl md:text-5xl font-bold font-display text-white/10 group-hover:text-accentOrange/35 transition-colors duration-500 block mb-6">
                  {step.number}
                </span>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-white mb-4 tracking-wide font-display group-hover:text-white transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-white/50 text-xs md:text-sm leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>

              {/* Bottom decorative bar indicator */}
              <div className="w-8 h-[2px] bg-white/15 rounded-full mt-8 group-hover:w-full group-hover:bg-accentOrange transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
