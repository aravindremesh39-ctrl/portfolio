import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Testimonials = () => {
  const testimonials = portfolioData.testimonials;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="relative py-28 bg-[#050505] overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#C8102E]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8102E]/10 border border-[#C8102E]/30 mb-4"
          >
            <MessageSquare size={14} className="text-[#C8102E]" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C8102E]">
              CLIENT FEEDBACK
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-bebas text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none"
          >
            TESTIMONIALS & <span className="text-[#C8102E]">REVIEWS</span>
          </motion.h2>
        </div>

        {/* Carousel Slider Card */}
        <div className="relative glass-card p-8 md:p-12 rounded-3xl border border-white/10 shadow-glass min-h-[300px] flex flex-col justify-between">
          <Quote size={48} className="text-[#C8102E]/30 absolute top-8 right-8" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-between h-full z-10"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-[#C8102E] mb-6">
                {[...Array(testimonials[currentIndex].rating || 5)].map((_, i) => (
                  <Star key={i} size={18} fill="#C8102E" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed font-light italic mb-8">
                "{testimonials[currentIndex].quote}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#C8102E]"
                />
                <div className="flex flex-col text-left">
                  <span className="font-bebas text-2xl text-white tracking-wide">
                    {testimonials[currentIndex].author}
                  </span>
                  <span className="text-xs text-white/50 font-medium">
                    {testimonials[currentIndex].role}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center gap-3 justify-end pt-6">
            <button
              onClick={prevTestimonial}
              aria-label="Previous Testimonial"
              className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#C8102E] transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              aria-label="Next Testimonial"
              className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#C8102E] transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
