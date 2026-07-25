import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layout, Palette, Image, PenTool, Film, Video, Sliders, Figma, Sparkles, Box } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const skillIconMap = {
  "UI Design": <Layout size={22} />,
  "Artist": <Palette size={22} />,
  "Adobe Photoshop": <Image size={22} />,
  "Adobe XD": <Figma size={22} />,
  "Adobe Illustrator": <PenTool size={22} />,
  "Adobe After Effects": <Film size={22} />,
  "Adobe Premiere Pro": <Video size={22} />,
  "Adobe Lightroom": <Sliders size={22} />,
  "Figma": <Figma size={22} />,
  "Canva": <Sparkles size={22} />,
  "Blender": <Box size={22} />,
  "Autodesk Maya (3D Maya)": <Cpu size={22} />
};

const Skills = () => {
  const skillCategories = portfolioData.skills;
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categoryNames = ['All', ...skillCategories.map(c => c.category)];

  return (
    <section id="skills" className="relative py-24 bg-[#050505] overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#C8102E]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8102E]/10 border border-[#C8102E]/30 mb-4"
          >
            <Cpu size={14} className="text-[#C8102E]" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C8102E]">
              SKILLS & PROFICIENCY
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-bebas text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none"
          >
            CREATIVE <span className="text-[#C8102E]">TOOLKIT</span>
          </motion.h2>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categoryNames.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#C8102E] text-white shadow-red-glow scale-105'
                    : 'bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Categorized Skills Display */}
        <div className="space-y-12">
          {skillCategories
            .filter(catGroup => selectedCategory === 'All' || catGroup.category === selectedCategory)
            .map((catGroup) => (
              <div key={catGroup.category} className="flex flex-col gap-4">
                <h3 className="font-bebas text-2xl text-white/90 tracking-wide border-b border-white/10 pb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C8102E]" />
                  <span>{catGroup.category}</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {catGroup.items.map((skill) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      whileHover={{ y: -4 }}
                      className="glass-card p-5 rounded-2xl flex items-center justify-between border border-white/10 hover:border-[#C8102E]/50 group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-11 h-11 rounded-xl bg-[#C8102E]/15 border border-[#C8102E]/30 flex items-center justify-center text-[#C8102E] group-hover:bg-[#C8102E] group-hover:text-white transition-colors shadow-md shrink-0">
                          {skillIconMap[skill.name] || <Sparkles size={20} />}
                        </div>
                        <span className="font-bebas text-2xl text-white tracking-wide group-hover:text-[#C8102E] transition-colors">
                          {skill.name}
                        </span>
                      </div>

                      {/* Percentage pill badge */}
                      <span className="font-mono text-xs font-bold text-white/70 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                        {skill.percentage}%
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
