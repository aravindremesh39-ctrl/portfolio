import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Palette, Code, Sparkles, Film, ArrowRight, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const getServiceIcon = (iconName) => {
  switch (iconName) {
    case 'Figma':
      return <Layers size={28} />;
    case 'Palette':
      return <Palette size={28} />;
    case 'Code':
      return <Code size={28} />;
    case 'Sparkles':
      return <Sparkles size={28} />;
    case 'Film':
      return <Film size={28} />;
    default:
      return <Sparkles size={28} />;
  }
};

const Services = () => {
  const services = portfolioData.services;

  return (
    <section id="services" className="relative py-28 bg-[#050505] overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C8102E]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8102E]/10 border border-[#C8102E]/30 mb-4"
          >
            <Sparkles size={14} className="text-[#C8102E]" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C8102E]">
              WHAT I OFFER
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-bebas text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none"
          >
            PREMIUM <span className="text-[#C8102E]">SERVICES</span>
          </motion.h2>
          <p className="text-sm text-white/60 max-w-lg mt-3">
            Delivering end-to-end creative and technical solutions to turn strategic concepts into high-converting digital products.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card p-8 rounded-3xl border border-white/10 hover:border-[#C8102E]/50 transition-all duration-500 flex flex-col justify-between group shadow-glass relative"
            >
              {/* Glowing Top Border Highlight */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#C8102E] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-[#C8102E]/15 border border-[#C8102E]/30 flex items-center justify-center text-[#C8102E] group-hover:bg-[#C8102E] group-hover:text-white transition-all duration-500 mb-6 shadow-md">
                  {getServiceIcon(service.icon)}
                </div>

                {/* Title */}
                <h3 className="font-bebas text-3xl text-white tracking-wide group-hover:text-[#C8102E] transition-colors mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Feature Bullets */}
                <div className="flex flex-col gap-2 pt-4 border-t border-white/5 mb-6">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-white/80">
                      <Check size={14} className="text-[#C8102E] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button Link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-white/70 group-hover:text-[#C8102E] transition-colors pt-2"
              >
                <span>Discuss Project</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
