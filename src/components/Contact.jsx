import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { FaLinkedinIn, FaGithub, FaInstagram, FaBehance, FaDribbble } from 'react-icons/fa';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { email, phone, location, availability } = portfolioData.personalInfo;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const socialIconMap = {
    LinkedIn: <FaLinkedinIn size={18} />,
    GitHub: <FaGithub size={18} />,
    Instagram: <FaInstagram size={18} />,
    Behance: <FaBehance size={18} />,
    Dribbble: <FaDribbble size={18} />
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger Confetti celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#C8102E', '#FFFFFF', '#E50914']
        });
      } catch (err) {
        console.log("Confetti triggered");
      }
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-28 bg-[#050505] overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#C8102E]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8102E]/10 border border-[#C8102E]/30 mb-4"
          >
            <Mail size={14} className="text-[#C8102E]" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C8102E]">
              GET IN TOUCH
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-bebas text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none"
          >
            LET'S WORK <span className="text-[#C8102E]">TOGETHER</span>
          </motion.h2>
          <p className="text-sm text-white/60 max-w-lg mt-3">
            Have a project in mind or want to collaborate? Send a message and let me create something extraordinary for you.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Details & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide mb-4">
                TALK TO ME
              </h3>
              <p className="text-sm text-white/60 leading-relaxed mb-8">
                I am currently open to freelance opportunities, strategic design projects, full-time contracts, and design consultations.
              </p>

              {/* Info Items */}
              <div className="flex flex-col gap-6 mb-10">
                <div className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-white/10 hover:border-[#C8102E]/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#C8102E]/15 border border-[#C8102E]/30 flex items-center justify-center text-[#C8102E] shrink-0">
                    <Mail size={20} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] uppercase tracking-widest text-white/40 font-semibold">EMAIL</span>
                    <a href={`mailto:${email}`} className="text-sm sm:text-base font-semibold text-white hover:text-[#C8102E] transition-colors">
                      {email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-white/10 hover:border-[#C8102E]/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#C8102E]/15 border border-[#C8102E]/30 flex items-center justify-center text-[#C8102E] shrink-0">
                    <Phone size={20} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] uppercase tracking-widest text-white/40 font-semibold">PHONE / WHATSAPP</span>
                    <a href={`tel:${phone}`} className="text-sm sm:text-base font-semibold text-white hover:text-[#C8102E] transition-colors">
                      {phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-white/10 hover:border-[#C8102E]/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#C8102E]/15 border border-[#C8102E]/30 flex items-center justify-center text-[#C8102E] shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] uppercase tracking-widest text-white/40 font-semibold">LOCATION</span>
                    <span className="text-sm sm:text-base font-semibold text-white">
                      {location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-white/40 block mb-4">
                CONNECT ON SOCIALS
              </span>
              <div className="flex flex-wrap gap-3">
                {portfolioData.socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="w-11 h-11 rounded-xl glass-card border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#C8102E] hover:border-[#C8102E] transition-all duration-300 transform hover:scale-110 shadow-md"
                  >
                    {socialIconMap[s.name] || <Sparkles size={18} />}
                  </a>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 glass-card p-8 md:p-10 rounded-3xl border border-white/10 shadow-glass"
          >
            {submitted ? (
              <div className="py-16 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#C8102E] text-white flex items-center justify-center mb-6 shadow-red-glow animate-bounce">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-bebas text-4xl text-white tracking-wide mb-2">
                  MESSAGE SENT SUCCESSFULLY!
                </h3>
                <p className="text-sm text-white/60 max-w-md mb-6">
                  Thank you for reaching out. I will review your inquiry and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-white font-bebas text-sm tracking-wider hover:bg-white/20"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest font-semibold text-white/70">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#C8102E] focus:ring-1 focus:ring-[#C8102E] transition-colors text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest font-semibold text-white/70">
                      YOUR EMAIL *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#C8102E] focus:ring-1 focus:ring-[#C8102E] transition-colors text-sm"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest font-semibold text-white/70">
                    SUBJECT *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. UI/UX Design Project Inquiry"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#C8102E] focus:ring-1 focus:ring-[#C8102E] transition-colors text-sm"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest font-semibold text-white/70">
                    MESSAGE *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project goals, timelines, and requirements..."
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#C8102E] focus:ring-1 focus:ring-[#C8102E] transition-colors text-sm resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[#C8102E] text-white font-bebas text-xl tracking-widest hover:bg-[#E50914] transition-all duration-300 shadow-red-glow flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>SENDING MESSAGE...</span>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
