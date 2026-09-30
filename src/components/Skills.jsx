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
    <section id="skills" className="relative py-24 bg-[#0B0B0B] overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#FF7A00]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF7A00]/10 border border-[#FF7A00]/30 mb-4"
          >
            <Cpu size={14} className="text-[#FF7A00]" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#FF7A00]">
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
            CREATIVE <span className="text-[#FF7A00]">TOOLKIT</span>
          </motion.h2>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categoryNames.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#FF7A00] text-white shadow-orange-glow scale-105'
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
                  <span className="w-2 h-2 rounded-full bg-[#FF7A00]" />
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
                      className="glass-card p-5 rounded-2xl flex items-center justify-between border border-white/10 hover:border-[#FF7A00]/50 group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-11 h-11 rounded-xl bg-[#FF7A00]/15 border border-[#FF7A00]/30 flex items-center justify-center text-[#FF7A00] group-hover:bg-[#FF7A00] group-hover:text-white transition-colors shadow-md shrink-0">
                          {skillIconMap[skill.name] || <Sparkles size={20} />}
                        </div>
                        <span className="font-bebas text-2xl text-white tracking-wide group-hover:text-[#FF7A00] transition-colors">
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
