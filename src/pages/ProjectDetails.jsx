
import { useParams, Link, useNavigate } from 'react-router-dom';

import {
  ArrowLeft, ArrowRight, ExternalLink, Calendar, User, Clock,
  Briefcase, CheckCircle2, Sparkles, ChevronLeft, ChevronRight,
  Layers, Image, PenTool, Film, Video, Sliders, Figma, Box, Cpu, Layout
} from 'lucide-react';
import ImageLightbox from '../components/ImageLightbox';
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

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

  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setPreviewImage(null);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
          {project?.coverImage?.map((item) => (
            <div className="relative h-[300px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-glass group cursor-zoom-in"
              onClick={() => setPreviewImage(item)}
            >
              {project?.type === 'video' ? (
                <video
                  className="w-full h-full object-contain"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={project?.coverImage} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (

                <img
                  src={item}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
              )}


              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />

              {/* Hover Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <div className={`px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm ${project.type === "video" ? "hidden" : "block"}`}>
                  Click to Preview
                </div>
              </div>
            </div>
          ))}

          <AnimatePresence>
            {project.type !== "video" && previewImage && (
              <motion.div
                className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => setPreviewImage(null)}
              >
                {/* Close Button */}


                {/* Image */}
                <motion.img
                  src={previewImage}
                  alt="Preview"
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 20,
                  }}
                  className="max-w-[70vw] max-h-[70vh] rounded-2xl shadow-2xl object-contain"
                  onClick={(e) => e.stopPropagation()}
                />
              </motion.div>
            )}
          </AnimatePresence>
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






          </div>
        </div>

        {/* ================= DESIGN PROCESS TIMELINE ================= */}


        {/* ================= PROJECT GALLERY WITH LIGHTBOX ================= */}


        {/* ================= RESULTS & KEY METRICS ================= */}


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
      <ImageLightbox
        image={lightboxImage}
        alt={project ? `${project.title} – enlarged view` : 'Project image'}
        onClose={() => setLightboxImage(null)}
      />
    </motion.div>
  );
};

export default ProjectDetails;
