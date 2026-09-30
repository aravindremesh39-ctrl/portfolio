import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

/**
 * ImageLightbox – premium fullscreen image viewer.
 *
 * Props:
 *   image   {string|null}  – src of the image to show; null = closed
 *   alt     {string}       – accessible alt text
 *   onClose {function}     – called when the lightbox should close
 */
const ImageLightbox = ({ image, alt = 'Project image', onClose }) => {
  // ESC key handler
  const handleKey = useCallback(
    (e) => { if (e.key === 'Escape') onClose(); },
    [onClose]
  );

  // Lock / unlock body scroll and bind ESC key
  useEffect(() => {
    if (!image) return;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [image, handleKey]);

  return (
    <AnimatePresence>
      {image && (
        /* ── Backdrop ── */
        <motion.div
          key="lightbox-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={onClose}
          className="fixed inset-0 flex items-center justify-center p-4 sm:p-8"
          style={{
            zIndex: 99999,
            background: 'rgba(0,0,0,0.92)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
          aria-modal="true"
          role="dialog"
          aria-label="Image lightbox"
        >
          {/* ── Close button ── */}
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.22, delay: 0.18 }}
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="absolute top-5 right-5 sm:top-7 sm:right-7
                       w-11 h-11 rounded-full
                       bg-white/10 hover:bg-[#FF7A00]
                       border border-white/20 hover:border-[#FF7A00]
                       text-white flex items-center justify-center
                       shadow-xl transition-colors duration-200
                       focus:outline-none focus:ring-2 focus:ring-[#FF7A00]"
            aria-label="Close lightbox"
          >
            <X size={20} strokeWidth={2.5} />
          </motion.button>

          {/* ── Image container ── */}
          <motion.div
            key={image}
            initial={{ opacity: 0, scale: 0.82, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex items-center justify-center
                       max-w-[92vw] max-h-[88vh]
                       rounded-2xl overflow-hidden"
            style={{ boxShadow: '0 0 80px rgba(255,122,0,0.18), 0 40px 120px rgba(0,0,0,0.6)' }}
          >
            <img
              src={image}
              alt={alt}
              draggable={false}
              className="block max-w-[92vw] max-h-[88vh] w-auto h-auto
                         object-contain rounded-2xl
                         border border-white/10"
            />

            {/* Subtle hint strip at the bottom */}
            <div className="absolute bottom-0 inset-x-0 h-10
                            bg-gradient-to-t from-black/60 to-transparent
                            flex items-end justify-center pb-2
                            pointer-events-none">
              <span className="flex items-center gap-1.5
                               text-[10px] uppercase tracking-[0.22em]
                               text-white/30 font-semibold">
                <ZoomIn size={10} />
                Click outside or press ESC to close
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageLightbox;
