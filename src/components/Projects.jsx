import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Folder, ExternalLink, ArrowRight, Eye } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  // Categories
  const filterCategories = ['All', 'Posters', 'Branding', 'UI/UX', '2D Design', '3D Design', 'Animation'];

  const filteredProjects = selectedFilter === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category.toLowerCase() === selectedFilter.toLowerCase() || p.category.toLowerCase().includes(selectedFilter.toLowerCase()));

  return (
    <section id="projects" className="relative py-24 bg-[#050505] overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#C8102E]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8102E]/10 border border-[#C8102E]/30 mb-4"
          >
            <Folder size={14} className="text-[#C8102E]" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C8102E]">
              FEATURED PORTFOLIO
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-bebas text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none"
          >
            SELECTED <span className="text-[#C8102E]">PROJECTS</span>
          </motion.h2>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {filterCategories.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                  selectedFilter === filter
                    ? 'bg-[#C8102E] text-white shadow-red-glow scale-105'
                    : 'bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-[#C8102E]/50 flex flex-col justify-between"
              >
                {/* Thumbnail Container */}
                <Link to={`/projects/${project.slug}`} className="relative aspect-[16/10] overflow-hidden bg-black/40 block">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Category Pill Badge */}
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-[#050505]/80 backdrop-blur-md border border-white/15 text-[10px] uppercase tracking-widest font-semibold text-[#C8102E]">
                    {project.category}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#050505]/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-10">
                    <span className="px-5 py-2.5 rounded-full bg-[#C8102E] text-white font-bebas text-base tracking-widest flex items-center gap-2 shadow-red-glow">
                      <span>VIEW CASE STUDY</span>
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <Link to={`/projects/${project.slug}`}>
                      <h3 className="font-bebas text-2xl text-white tracking-wide group-hover:text-[#C8102E] transition-colors mb-2">
                        {project.title}
                      </h3>
                    </Link>
                    <p className="text-xs text-white/60 line-clamp-2 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Badges & View Link */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 2).map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono text-white/50 bg-white/5 px-2 py-0.5 rounded border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/projects/${project.slug}`}
                      className="text-xs font-semibold text-[#C8102E] uppercase tracking-wider flex items-center gap-1 hover:underline"
                    >
                      <span>Details</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
