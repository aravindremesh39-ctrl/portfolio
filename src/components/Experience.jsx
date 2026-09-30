import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, Building, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const experiences = portfolioData.experiences;
  const education = portfolioData.education;

  return (
    <section id="experience" className="relative py-24 bg-[#0B0B0B] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#FF7A00]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 space-y-20">
        
        {/* ================= WORK EXPERIENCE SECTION ================= */}
        <div>
          <div className="flex flex-col items-center text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF7A00]/10 border border-[#FF7A00]/30 mb-4"
            >
              <Briefcase size={14} className="text-[#FF7A00]" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#FF7A00]">
                WORK EXPERIENCE
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-bebas text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none"
            >
              CAREER <span className="text-[#FF7A00]">EXPERIENCE</span>
            </motion.h2>
          </div>

          {/* Experience Card */}
          <div className="space-y-6">
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card p-6 md:p-8 rounded-3xl border border-white/10 hover:border-[#FF7A00]/50 transition-all duration-300 shadow-glass"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-white/10">
                  <div>
                    <span className="text-xs text-[#FF7A00] font-semibold uppercase tracking-widest block mb-1">
                      {exp.role} ({exp.title})
                    </span>
                    <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide leading-none">
                      {exp.company}
                    </h3>
                  </div>

                  <div className="flex flex-col items-start sm:items-end gap-1.5">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF7A00]/15 border border-[#FF7A00]/30 text-[#FF7A00] font-bebas text-base tracking-wider">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-white/60">
                      <MapPin size={12} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-white/70 leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Tag Badges */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= EDUCATION SECTION ================= */}
        <div>
          <div className="flex flex-col items-center text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF7A00]/10 border border-[#FF7A00]/30 mb-4"
            >
              <GraduationCap size={14} className="text-[#FF7A00]" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#FF7A00]">
                ACADEMIC QUALIFICATIONS
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-bebas text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none"
            >
              EDUCATION & <span className="text-[#FF7A00]">DIPLOMA</span>
            </motion.h2>
          </div>

          {/* Education Card */}
          <div className="space-y-6">
            {education.map((edu) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card p-6 md:p-8 rounded-3xl border border-white/10 hover:border-[#FF7A00]/50 transition-all duration-300 shadow-glass"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-white/10">
                  <div>
                    <span className="text-xs text-[#FF7A00] font-semibold uppercase tracking-widest block mb-1">
                      {edu.institution} ({edu.location})
                    </span>
                    <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide leading-none">
                      {edu.degree}
                    </h3>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF7A00]/15 border border-[#FF7A00]/30 text-[#FF7A00] font-bebas text-base tracking-wider">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <p className="text-sm text-white/70 leading-relaxed mb-6">
                  {edu.description}
                </p>

                {/* Tag Badges */}
                <div className="flex flex-wrap gap-2">
                  {edu.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
