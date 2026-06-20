import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { email, location } = portfolioData.personalInfo;
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus('submitting');
    
    // Simulate API request
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-[#0B0B0B]"
    >
      {/* Decorative background glows */}
      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-accentOrange/5 blur-[150px] pointer-events-none" />

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
          06 / COLLABORATION
        </motion.div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-12">
          
          {/* Info Column - Left */}
          <div className="lg:col-span-5 text-left flex flex-col justify-between h-full">
            <div>
              <motion.h2
                className="text-3xl md:text-5xl font-extrabold leading-[1.1] text-white font-display mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                LET'S CREATE SOMETHING REMARKABLE TOGETHER.
              </motion.h2>
              <motion.p
                className="text-white/50 text-base md:text-lg font-light leading-relaxed mb-10 max-w-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Are you seeking a high-end designer to elevate your digital presence or product system? Get in touch, and let’s shape unforgettable experiences.
              </motion.p>
            </div>

            {/* Methods */}
            <motion.div
              className="flex flex-col gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex gap-4 items-start">
                <span className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accentOrange mt-1">
                  <Mail size={16} />
                </span>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-white/40 block mb-1">
                    Direct Correspondence
                  </span>
                  <a
                    href={`mailto:${email}`}
                    className="text-white font-semibold text-base hover:text-accentOrange transition-colors"
                  >
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accentOrange mt-1">
                  <MapPin size={16} />
                </span>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-white/40 block mb-1">
                    Current HQ
                  </span>
                  <span className="text-white/80 font-medium text-sm">
                    {location}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form Column - Right */}
          <motion.div
            className="lg:col-span-7 w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-panel p-8 md:p-10 rounded-[2.5rem] shadow-glass relative overflow-hidden">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="text-accentOrange mb-6"
                    >
                      <CheckCircle2 size={64} strokeWidth={1.5} />
                    </motion.div>
                    <h3 className="text-2xl font-bold font-display text-white mb-2">
                      Proposal Received!
                    </h3>
                    <p className="text-white/50 text-sm max-w-sm">
                      Thank you for reaching out. I've received your request and will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-8 px-6 py-2.5 rounded-full border border-white/10 hover:border-accentOrange hover:bg-white/5 text-xs uppercase tracking-widest text-white transition-all duration-300"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6 text-left"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs uppercase tracking-widest text-white/50 font-medium">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                        className="w-full bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-accentOrange focus:bg-white/[0.05] rounded-xl px-5 py-4 text-white placeholder-white/20 text-sm focus:outline-none transition-all duration-300"
                        disabled={status === 'submitting'}
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs uppercase tracking-widest text-white/50 font-medium">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. john@example.com"
                        className="w-full bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-accentOrange focus:bg-white/[0.05] rounded-xl px-5 py-4 text-white placeholder-white/20 text-sm focus:outline-none transition-all duration-300"
                        disabled={status === 'submitting'}
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-xs uppercase tracking-widest text-white/50 font-medium">
                        Project Details
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        required
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your product, timeline, and requirements..."
                        className="w-full bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-accentOrange focus:bg-white/[0.05] rounded-xl px-5 py-4 text-white placeholder-white/20 text-sm focus:outline-none transition-all duration-300 resize-none"
                        disabled={status === 'submitting'}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full mt-2 px-8 py-4 rounded-xl bg-white hover:bg-accentOrange hover:text-white text-black font-semibold text-sm tracking-wider flex items-center justify-center gap-2 transform hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          Sending Proposal...
                        </>
                      ) : (
                        <>
                          Send Proposal
                          <Send size={14} />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
