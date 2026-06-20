import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 bg-[#0B0B0B]"
    >
      {/* Decorative blurred background orb */}
      <div className="absolute right-0 top-1/4 w-80 h-80 rounded-full bg-accentOrange/5 blur-[120px] pointer-events-none" />

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
          02 / EXPERTISE
        </motion.div>

        {/* Title */}
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-white mb-16 font-display"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          My Craft & Arsenal
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {portfolioData.skills.map((category, idx) => (
            <motion.div
              key={category.category}
              className="glass-panel p-8 md:p-10 rounded-[2rem] shadow-glass flex flex-col justify-between"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, borderColor: 'rgba(255,122,0,0.2)' }}
            >
              <div>
                <h3 className="text-xl font-bold tracking-wide text-white mb-8 font-display border-b border-white/5 pb-4">
                  {category.category}
                </h3>

                <div className="space-y-6">
                  {category.items.map((skill) => (
                    <div key={skill.name} className="flex flex-col gap-2">
                      <div className="flex justify-between items-center text-sm font-medium">
                        <span className="text-white/80">{skill.name}</span>
                        <span className="text-accentOrange font-display">{skill.level}%</span>
                      </div>
                      
                      {/* Animated Progress Bar */}
                      <div className="w-full h-[3px] bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-accentOrange to-orange-400 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
