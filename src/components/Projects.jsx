import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 bg-[#0B0B0B]"
    >
      {/* Background radial highlight */}
      <div className="absolute left-0 bottom-1/4 w-96 h-96 rounded-full bg-accentOrange/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        
        {/* Section Label & Subtitle Grid */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.25em] text-accentOrange mb-4 flex items-center gap-3 font-semibold"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accentOrange" />
              03 / CASE STUDIES
            </motion.div>
            <motion.h2
              className="text-3xl md:text-5xl font-extrabold text-white font-display"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              Selected Works
            </motion.h2>
          </div>
          <motion.p
            className="text-white/40 text-sm md:text-base font-light tracking-wide max-w-xs text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Delivering high-aesthetic digital design solutions that elevate brand presence.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {portfolioData.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              className="group flex flex-col glass-panel p-4 rounded-[2.5rem] hover:bg-white/[0.04] transition-colors duration-500 shadow-glass"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Image Frame with Zoom Parallax Hover */}
              <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden relative bg-black/40">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover filter brightness-[0.9] group-hover:scale-105 transition-all duration-700 ease-[0.16, 1, 0.3, 1]"
                />
                
                {/* Floating View Arrow on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex items-center justify-center backdrop-blur-[2px]">
                  <motion.a
                    href="#contact"
                    className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ArrowUpRight size={20} strokeWidth={2.5} />
                  </motion.a>
                </div>
              </div>

              {/* Metadata Details */}
              <div className="p-4 flex flex-col text-left flex-grow justify-between">
                <div>
                  <div className="flex justify-between items-center text-xs tracking-widest text-white/40 uppercase mb-3">
                    <span>{project.category}</span>
                    <span className="font-display text-accentOrange">{project.year}</span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-white font-display mb-3 leading-tight group-hover:text-accentOrange transition-colors duration-300">
                    {project.title.split(' — ')[0]}
                  </h3>
                  
                  <p className="text-white/50 text-xs md:text-sm leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/80 hover:text-accentOrange transition-colors border-t border-white/5 pt-4"
                >
                  View Details
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
