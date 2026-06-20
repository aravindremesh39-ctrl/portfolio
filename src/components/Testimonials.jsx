import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Testimonials = () => {
  return (
    <section
      id="testimonials"
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
          05 / REVIEWS
        </motion.div>

        {/* Title */}
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-white mb-16 font-display text-left"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          Client Appreciations
        </motion.h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {portfolioData.testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.author}
              className="glass-panel p-8 md:p-12 rounded-[2.5rem] shadow-glass flex flex-col justify-between relative text-left group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, borderColor: 'rgba(255,122,0,0.2)' }}
            >
              {/* Giant decorative quotation mark */}
              <div className="text-7xl md:text-8xl font-serif text-accentOrange/10 group-hover:text-accentOrange/20 transition-colors duration-500 absolute top-4 left-6 pointer-events-none select-none">
                “
              </div>

              <div className="relative z-10 pt-6">
                <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 font-light italic">
                  {testimonial.quote}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white tracking-wider font-display">
                    {testimonial.author}
                  </span>
                  <span className="text-xs text-white/40 mt-0.5">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
