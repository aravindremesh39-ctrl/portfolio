import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { name } = portfolioData.personalInfo;

  return (
    <footer className="w-full bg-[#0B0B0B] border-t border-white/5 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Section - Copyright */}
        <div className="text-left">
          <p className="text-xs tracking-widest text-white/40 uppercase font-medium">
            &copy; 2026 {name.toUpperCase()}. Engineered with luxury principles.
          </p>
        </div>

        {/* Right Section - Social Handles */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {portfolioData.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest text-white/50 hover:text-accentOrange transition-colors duration-300 py-1"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
