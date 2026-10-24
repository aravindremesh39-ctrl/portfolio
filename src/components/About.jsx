import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { bio } = portfolioData.about;

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FF7A00]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">

        {/* ABOUT ME Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF7A00]/10 border border-[#FF7A00]/30 mb-4"
        >
          <User size={14} className="text-[#FF7A00]" />
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#FF7A00]">
            ABOUT ME
          </span>
        </motion.div>

        {/* BIOGRAPHY Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-bebas text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none mb-10"
        >
          BIOGRAPHY
        </motion.h2>

        {/* Biography Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 sm:p-12 rounded-3xl flex flex-col space-y-6 text-center"
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
    </section>
  );
};

export default About;
