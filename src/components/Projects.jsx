import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import {
  Folder, ArrowRight, ArrowLeft, ChevronRight,
  PenTool, Layout, Layers, Box, Film, Video,
  Briefcase, Star, Image as ImageIcon
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

/* ─── Category definitions ─────────────────────────────────────────────── */
const CATEGORIES = [
  { key: 'Graphic Design',  label: 'Graphic Design',  icon: ImageIcon,  color: 'from-orange-500/20 to-orange-700/10' },
  { key: 'UI/UX',           label: 'UI/UX Design',    icon: Layout,     color: 'from-blue-500/20 to-blue-700/10'   },
  { key: '2D',              label: '2D Design',       icon: PenTool,    color: 'from-pink-500/20 to-pink-700/10'   },
  { key: '3D',              label: '3D Design',       icon: Box,        color: 'from-purple-500/20 to-purple-700/10'},
  { key: 'Animation',       label: 'Animation',       icon: Film,       color: 'from-green-500/20 to-green-700/10' },
  { key: 'Videos',          label: 'Videos',          icon: Video,      color: 'from-red-500/20 to-red-700/10'     },
  { key: 'Branding',        label: 'Branding',        icon: Star,       color: 'from-yellow-500/20 to-yellow-700/10'},
  { key: 'Company Works',   label: 'Company Works',   icon: Briefcase,  color: 'from-teal-500/20 to-teal-700/10'  },
];

/* ─── Animation variants ────────────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show:   { opacity: 1, y: 0,  scale: 1,    transition: { duration: 0.4, ease: 'easeOut' } },
};
const pageVariants = {
  initial: { opacity: 0, x: 40 },
  enter:   { opacity: 1, x: 0,  transition: { duration: 0.35, ease: 'easeOut' } },
  exit:    { opacity: 0, x: -30, transition: { duration: 0.25, ease: 'easeIn'  } },
};

/* ─── Helper: get first cover image safely ──────────────────────────────── */
const getCover = (project) => {
  const ci = project.coverImage;
  if (Array.isArray(ci)) return ci[0];
  return ci || '';
};

/* ─── Project Card ──────────────────────────────────────────────────────── */
const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  const cover = getCover(project);

  return (
    <motion.div
      variants={itemVariants}
      className="group relative glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF7A00]/50 flex flex-col transition-all duration-300"
    >
      {/* Thumbnail */}
      <div
        className="relative aspect-[16/10] overflow-hidden bg-black/40 cursor-pointer"
        onClick={() => navigate(`/projects/${project.slug}`)}
      >
        {project.type === 'video' ? (
          <div className="w-full h-full flex items-center justify-center bg-black/60">
            <Video size={40} className="text-[#FF7A00]/60" />
          </div>
        ) : (
          <img
            src={cover}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        )}

        {/* Category badge */}
        <div className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full bg-[#0B0B0B]/80 backdrop-blur-md border border-white/15 text-[10px] uppercase tracking-widest font-semibold text-[#FF7A00]">
          {project.category}
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#0B0B0B]/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
          <span className="px-5 py-2.5 rounded-full bg-[#FF7A00] text-white font-bebas text-base tracking-widest flex items-center gap-2 shadow-orange-glow">
            VIEW PROJECT <ArrowRight size={15} />
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <Link to={`/projects/${project.slug}`}>
            <h3 className="font-bebas text-xl text-white tracking-wide group-hover:text-[#FF7A00] transition-colors mb-1 leading-tight line-clamp-1">
              {project.title}
            </h3>
          </Link>
          <p className="text-xs text-white/55 leading-relaxed line-clamp-2 mb-3">
            {project.description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-white/5">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 2).map((t) => (
              <span key={t} className="text-[10px] font-mono text-white/50 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                {t}
              </span>
            ))}
          </div>
          <Link
            to={`/projects/${project.slug}`}
            className="text-xs font-semibold text-[#FF7A00] uppercase tracking-wider flex items-center gap-1 hover:underline shrink-0 ml-2"
          >
            Details <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Category Card ─────────────────────────────────────────────────────── */
const CategoryCard = ({ cat, count, onClick }) => {
  const Icon = cat.icon;
  return (
    <motion.button
      variants={itemVariants}
      onClick={onClick}
      className="group relative aspect-square flex flex-col items-center justify-center gap-3 rounded-2xl glass-card overflow-hidden cursor-pointer text-center p-6 transition-all duration-300"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Gradient bg glow on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />

      {/* Orange corner accent */}
      <div className="absolute top-0 right-0 w-12 h-12 bg-[#FF7A00]/10 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon */}
      <div className="relative z-10 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-[#FF7A00]/15 group-hover:border-[#FF7A00]/40 flex items-center justify-center transition-all duration-300">
        <Icon size={26} className="text-white/60 group-hover:text-[#FF7A00] transition-colors duration-300" />
      </div>

      {/* Label */}
      <span className="relative z-10 font-bebas text-lg text-white/80 group-hover:text-white tracking-wide leading-tight transition-colors duration-300">
        {cat.label}
      </span>

      {/* Count */}
      {count > 0 && (
        <span className="relative z-10 text-[10px] font-semibold uppercase tracking-widest text-white/35 group-hover:text-[#FF7A00]/80 transition-colors duration-300">
          {count} {count === 1 ? 'project' : 'projects'}
        </span>
      )}

      {/* Bottom orange line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF7A00] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.button>
  );
};

/* ─── Main Component ────────────────────────────────────────────────────── */
const Projects = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const projects = portfolioData.projects;

  // Count per category
  const countMap = useMemo(() => {
    const map = {};
    CATEGORIES.forEach(c => { map[c.key] = 0; });
    projects.forEach(p => {
      if (map[p.category] !== undefined) map[p.category]++;
    });
    return map;
  }, [projects]);

  // Projects for active category
  const categoryProjects = useMemo(() => {
    if (!activeCategory) return [];
    return projects.filter(p => p.category === activeCategory.key);
  }, [activeCategory, projects]);

  const activeLabel = activeCategory?.label ?? '';

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#FF7A00]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF7A00]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* ── Section Header (always visible) ───────────────────────────── */}
        <div className="flex flex-col items-center text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF7A00]/10 border border-[#FF7A00]/30 mb-4"
          >
            <Folder size={14} className="text-[#FF7A00]" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#FF7A00]">
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
            SELECTED <span className="text-[#FF7A00]">PROJECTS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-sm text-white/50 mt-3 max-w-md"
          >
            {activeCategory
              ? `Showing all ${activeLabel} projects`
              : 'Select a category to explore the work'}
          </motion.p>
        </div>

        {/* ── Two views with AnimatePresence ────────────────────────────── */}
        <AnimatePresence mode="wait">

          {/* ── VIEW 1: Category Grid ──────────────────────────────────── */}
          {!activeCategory && (
            <motion.div
              key="category-grid"
              variants={pageVariants}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
              >
                {CATEGORIES.map((cat) => (
                  <CategoryCard
                    key={cat.key}
                    cat={cat}
                    count={countMap[cat.key] ?? 0}
                    onClick={() => setActiveCategory(cat)}
                  />
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* ── VIEW 2: Project Gallery ────────────────────────────────── */}
          {activeCategory && (
            <motion.div
              key={`gallery-${activeCategory.key}`}
              variants={pageVariants}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              {/* Gallery header / breadcrumb */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
                <div className="flex flex-col gap-1">
                  {/* Breadcrumb */}
                  <div className="flex items-center gap-1.5 text-[11px] text-white/40 font-mono uppercase tracking-widest">
                    <span>Selected Projects</span>
                    <ChevronRight size={12} />
                    <span className="text-[#FF7A00]">{activeLabel}</span>
                  </div>
                  <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide leading-none">
                    {activeLabel}
                    <span className="ml-3 text-lg text-[#FF7A00]/70">
                      ({categoryProjects.length})
                    </span>
                  </h3>
                </div>

                {/* Back button */}
                <button
                  onClick={() => setActiveCategory(null)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/15 text-sm font-semibold text-white/80 hover:text-white hover:bg-[#FF7A00]/15 hover:border-[#FF7A00]/50 transition-all duration-300 self-start sm:self-auto"
                >
                  <ArrowLeft size={15} />
                  Back to Categories
                </button>
              </div>

              {/* Project cards */}
              {categoryProjects.length === 0 ? (
                <div className="py-24 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
                    <Folder size={28} className="text-white/30" />
                  </div>
                  <p className="text-white/40 text-sm">No projects in this category yet.</p>
                </div>
              ) : (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
                >
                  {categoryProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </motion.div>
              )}
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
