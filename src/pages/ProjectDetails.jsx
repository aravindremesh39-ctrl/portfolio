import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, ArrowRight, ExternalLink, Calendar, User, Clock, 
  Briefcase, CheckCircle2, Sparkles, X, ChevronLeft, ChevronRight,
  Layers, Image, PenTool, Film, Video, Sliders, Figma, Box, Cpu, Layout
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const toolIconMap = {
  "Adobe Photoshop": <Image size={18} />,
  "Adobe Illustrator": <PenTool size={18} />,
  "Adobe XD": <Figma size={18} />,
  "Adobe After Effects": <Film size={18} />,
  "Adobe Premiere Pro": <Video size={18} />,
  "Adobe Lightroom": <Sliders size={18} />,
  "Figma": <Figma size={18} />,
  "Canva": <Sparkles size={18} />,
  "Blender": <Box size={18} />,
  "Autodesk Maya (3D Maya)": <Cpu size={18} />,
  "UI/UX": <Layout size={18} />
};

const ProjectDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [lightboxImage, setLightboxImage] = useState(null);

  // Find current project by slug
  const projects = portfolioData.projects;
  const projectIndex = projects.findIndex(p => p.slug === slug);
  const project = projects[projectIndex];

  // Scroll to top when slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 text-center">
        <h2 className="font-bebas text-5xl text-[#C8102E] mb-4">PROJECT NOT FOUND</h2>
        <p className="text-sm text-white/60 mb-8">The project case study you are looking for does not exist.</p>
        <Link
          to="/"
          className="px-8 py-3.5 rounded-full bg-[#C8102E] text-white font-bebas text-lg tracking-widest hover:bg-[#E50914] transition-colors"
        >
          BACK TO PORTFOLIO
        </Link>
      </div>
    );
  }

  // Previous and Next projects
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  // Related Projects (excluding current)
  const relatedProjects = projects.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-[#050505] text-white selection:bg-[#C8102E] selection:text-white font-poppins relative"
    >
      {/* Background Radial Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C8102E]/10 rounded-full blur-[180px] pointer-events-none z-0" />

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 bg-[#050505]/80 backdrop-blur-xl border-b border-white/10 py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/70 hover:text-[#C8102E] transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>BACK TO PROJECTS</span>
          </Link>

          <Link to="/" className="font-bebas text-xl text-white tracking-widest hover:text-[#C8102E] transition-colors">
            ARAVIND RAMESH
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-12 space-y-16">
        
        {/* ================= HERO SECTION ================= */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1 rounded-full bg-[#C8102E]/20 text-[#C8102E] border border-[#C8102E]/40 text-xs font-semibold uppercase tracking-widest">
              {project.category}
            </span>
            <span className="text-xs text-white/40 font-mono">
              YEAR: {project.year}
            </span>
          </div>

          <h1 className="font-bebas text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[0.95]">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-white/70 max-w-3xl leading-relaxed font-light">
            {project.description}
          </p>

          {/* Large Hero Banner Image */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full rounded-3xl overflow-hidden border border-white/10 shadow-glass group">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
          </div>
        </div>

        {/* ================= PROJECT INFORMATION CARD ================= */}
        <div className="glass-card p-6 md:p-8 rounded-3xl border border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-widest font-semibold text-white/40 block mb-1">CLIENT</span>
            <span className="text-sm font-medium text-white">{project.client || "Client Work"}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-widest font-semibold text-white/40 block mb-1">DURATION</span>
            <span className="text-sm font-medium text-white">{project.duration || "3 Weeks"}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-widest font-semibold text-white/40 block mb-1">ROLE</span>
            <span className="text-sm font-medium text-white">{project.role || "Lead Designer"}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-widest font-semibold text-white/40 block mb-1">INDUSTRY</span>
            <span className="text-sm font-medium text-white">{project.industry || "Design & Tech"}</span>
          </div>
        </div>

        {/* ================= TOOLS USED BADGES ================= */}
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-widest font-semibold text-white/50 block">SOFTWARE & TOOLS USED</span>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tool) => (
              <div
                key={tool}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-white/90 hover:border-[#C8102E]/50 transition-colors"
              >
                <span className="text-[#C8102E]">{toolIconMap[tool] || <Sparkles size={16} />}</span>
                <span>{tool}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= PROJECT OVERVIEW & NARRATIVE ================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pt-6 border-t border-white/10">
          <div className="md:col-span-4">
            <h2 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide leading-none sticky top-24">
              PROJECT <span className="text-[#C8102E]">OVERVIEW</span>
            </h2>
          </div>

          <div className="md:col-span-8 space-y-8 text-sm sm:text-base text-white/70 leading-relaxed font-light">
            <div>
              <h3 className="text-base font-semibold text-white mb-2 uppercase tracking-wider text-[#C8102E]">OVERVIEW</h3>
              <p>{project.overview || project.description}</p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-white mb-2 uppercase tracking-wider text-[#C8102E]">THE OBJECTIVE</h3>
              <p>{project.objective || "To craft a compelling, modern digital visual identity and user interface experience."}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="glass-card p-6 rounded-2xl border border-white/10">
                <h4 className="text-xs uppercase tracking-widest font-semibold text-[#C8102E] mb-2">DESIGN CHALLENGE</h4>
                <p className="text-xs sm:text-sm text-white/70">{project.challenge}</p>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-white/10">
                <h4 className="text-xs uppercase tracking-widest font-semibold text-[#C8102E] mb-2">SOLUTIONS CREATED</h4>
                <p className="text-xs sm:text-sm text-white/70">{project.solution}</p>
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold text-white mb-2 uppercase tracking-wider text-[#C8102E]">FINAL OUTCOME</h3>
              <p>{project.outcome}</p>
            </div>
          </div>
        </div>

        {/* ================= DESIGN PROCESS TIMELINE ================= */}
        {project.designProcess && (
          <div className="space-y-8 pt-8 border-t border-white/10">
            <div className="flex flex-col items-center text-center">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#C8102E] mb-1">WORKFLOW</span>
              <h2 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide">DESIGN PROCESS</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {project.designProcess.map((proc) => (
                <div key={proc.step} className="glass-card p-5 rounded-2xl border border-white/10 flex flex-col justify-between">
                  <span className="font-bebas text-3xl text-[#C8102E] mb-2">{proc.step}</span>
                  <h4 className="font-bebas text-xl text-white tracking-wide mb-1">{proc.name}</h4>
                  <p className="text-[11px] text-white/60 leading-snug">{proc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= PROJECT GALLERY WITH LIGHTBOX ================= */}
        <div className="space-y-6 pt-8 border-t border-white/10">
          <div className="flex flex-col items-center text-center">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#C8102E] mb-1">VISUAL ASSETS</span>
            <h2 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide">PROJECT GALLERY</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(project.gallery || [project.coverImage]).map((imgUrl, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                onClick={() => setLightboxImage(imgUrl)}
                className="cursor-pointer aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 glass-card relative group"
              >
                <img
                  src={imgUrl}
                  alt={`${project.title} gallery ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#C8102E]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-full bg-black/80 text-xs font-semibold text-white tracking-wider border border-white/20">
                    CLICK TO ENLARGE 🔍
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= RESULTS & KEY METRICS ================= */}
        {project.results && (
          <div className="glass-card p-8 rounded-3xl border border-[#C8102E]/30 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {project.results.map((res, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="font-bebas text-4xl sm:text-5xl text-[#C8102E] leading-none mb-1">{res.value}</span>
                <span className="text-xs uppercase tracking-widest font-medium text-white/70">{res.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* ================= PREVIOUS & NEXT PROJECT NAVIGATION ================= */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-10 border-t border-white/10">
          <Link
            to={`/projects/${prevProject.slug}`}
            className="w-full sm:w-auto px-6 py-4 rounded-2xl glass-card border border-white/10 hover:border-[#C8102E]/50 flex items-center gap-4 group transition-colors"
          >
            <ChevronLeft size={24} className="text-[#C8102E] group-hover:-translate-x-1 transition-transform" />
            <div className="flex flex-col text-left">
              <span className="text-[10px] uppercase tracking-widest text-white/40 font-semibold">PREVIOUS PROJECT</span>
              <span className="font-bebas text-xl text-white group-hover:text-[#C8102E] transition-colors">{prevProject.title}</span>
            </div>
          </Link>

          <Link
            to={`/projects/${nextProject.slug}`}
            className="w-full sm:w-auto px-6 py-4 rounded-2xl glass-card border border-white/10 hover:border-[#C8102E]/50 flex items-center justify-end gap-4 group transition-colors text-right"
          >
            <div className="flex flex-col text-right">
              <span className="text-[10px] uppercase tracking-widest text-white/40 font-semibold">NEXT PROJECT</span>
              <span className="font-bebas text-xl text-white group-hover:text-[#C8102E] transition-colors">{nextProject.title}</span>
            </div>
            <ChevronRight size={24} className="text-[#C8102E] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* ================= RELATED PROJECTS ================= */}
        <div className="space-y-8 pt-12 border-t border-white/10">
          <div className="flex flex-col items-center text-center">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#C8102E] mb-1">EXPLORE MORE</span>
            <h2 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide">RELATED PROJECTS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProjects.map((rel) => (
              <Link
                key={rel.slug}
                to={`/projects/${rel.slug}`}
                className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-[#C8102E]/50 group transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden bg-black/40">
                  <img
                    src={rel.coverImage}
                    alt={rel.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-[#C8102E]">{rel.category}</span>
                  <h3 className="font-bebas text-2xl text-white group-hover:text-[#C8102E] transition-colors mt-1">{rel.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </main>

      {/* ================= LIGHTBOX MODAL ================= */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl p-4 sm:p-8 flex items-center justify-center"
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-[#C8102E] transition-colors"
            >
              <X size={24} />
            </button>
            <img
              src={lightboxImage}
              alt="Enlarged gallery asset"
              className="max-w-full max-h-[88vh] rounded-2xl object-contain border border-white/10 shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectDetails;
