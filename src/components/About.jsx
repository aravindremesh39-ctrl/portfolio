import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { philosophic, paragraphs, cvUrl } = portfolioData.about;

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-[#0B0B0B] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.25em] text-accentOrange mb-16 flex items-center gap-3 font-semibold"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accentOrange" />
          01 / ABOUT ME
        </motion.div>

        {/* About Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Philosophical statement - Left */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold leading-snug text-white font-display">
              {philosophic}
            </h2>
          </motion.div>

          {/* Description Paragraphs - Right */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {paragraphs.map((para, index) => (
              <p
                key={index}
                className="text-white/60 text-base md:text-lg leading-relaxed font-light"
              >
                {para}
              </p>
            ))}

            {/* Action Call - CV Download */}
            <motion.div
              className="mt-6"
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <a
                href={cvUrl}
                className="inline-flex items-center gap-3 text-sm font-semibold tracking-wider text-white hover:text-accentOrange transition-colors group"
              >
                Download Curriculum Vitae
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/20 group-hover:border-accentOrange group-hover:bg-accentOrange group-hover:text-white transition-all duration-350">
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
