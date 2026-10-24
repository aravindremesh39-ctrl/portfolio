import React, { useEffect, useRef } from 'react';

/**
 * MinimalGalaxyBackground
 * ─────────────────────────────────────────────────────────────────────────────
 * Clean, minimal cosmic background:
 *   • Deep black and charcoal atmosphere with subtle cosmic depth
 *   • Sparse, tiny starlight points in warm-white and faint amber/orange (#FF7A00)
 *   • Extremely subtle twinkling and gentle, slow parallax movement
 *   • Gentle, soft gravitational reaction when mouse approaches nearby stars
 *   • Zero distracting spiral clusters, loud nebulae, or heavy trails
 *   • Pure requestAnimationFrame with refs — zero React re-renders, 60-120fps
 *   • Respects `prefers-reduced-motion` and non-pointer devices
 *   • pointer-events: none — never interferes with interactions or text reading
 */

const TWO_PI = Math.PI * 2;
const rand = (min, max) => min + Math.random() * (max - min);
const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (val, min, max) => Math.max(min, Math.min(max, val));

// Minimal, elegant palette: starlight white, soft warm ivory, and subtle amber/orange
const STAR_PALETTE = [
  '255, 255, 255',      // Starlight White
  '250, 240, 230',      // Soft Warm Ivory
  '255, 215, 160',      // Faint Warm Amber
  '255, 140, 30',       // Subtle Accent Orange (#FF7A00 tone)
];

const GalaxyBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({
    x: -9999,
    y: -9999,
    smoothX: -9999,
    smoothY: -9999,
  });
  const rafRef = useRef(null);
  const isReducedMotion = useRef(false);

  useEffect(() => {
    isReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });

    let width = 0;
    let height = 0;

    // Sparse star & dust collections
    let stars = [];
    let dust = [];

    // Faint atmospheric gradient cache (cached once to save GPU/CPU)
    let atmosphereCache = null;

    const buildAtmosphereCache = (w, h) => {
      const offCanvas = document.createElement('canvas');
      offCanvas.width = w;
      offCanvas.height = h;
      const oCtx = offCanvas.getContext('2d');

      // 2 extremely subtle, soft ambient glows to give warmth without distraction
      const topGlow = oCtx.createRadialGradient(w * 0.5, h * 0.3, 0, w * 0.5, h * 0.3, w * 0.5);
      topGlow.addColorStop(0, 'rgba(255, 122, 0, 0.025)');
      topGlow.addColorStop(0.6, 'rgba(255, 122, 0, 0.008)');
      topGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');

      oCtx.fillStyle = topGlow;
      oCtx.fillRect(0, 0, w, h);

      const bottomGlow = oCtx.createRadialGradient(w * 0.7, h * 0.8, 0, w * 0.7, h * 0.8, w * 0.45);
      bottomGlow.addColorStop(0, 'rgba(255, 160, 50, 0.018)');
      bottomGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');

      oCtx.fillStyle = bottomGlow;
      oCtx.fillRect(0, 0, w, h);

      return offCanvas;
    };

    /* ─── Star Generator (Sparse, multi-depth layers) ─── */
    const makeStar = (w, h) => {
      const layer = Math.floor(rand(0, 3)); // 0: distant tiny, 1: mid-field, 2: near soft star
      const sizes = [0.55, 0.85, 1.4];
      const speeds = [0.015, 0.035, 0.07];
      const parallaxes = [0.006, 0.014, 0.028];

      return {
        x: rand(0, w),
        y: rand(0, h),
        vx: (Math.random() - 0.5) * speeds[layer],
        vy: (Math.random() - 0.5) * speeds[layer],
        radius: sizes[layer],
        layer,
        parallaxFactor: parallaxes[layer],
        baseAlpha: rand(0.25, 0.75),
        alpha: 0,
        twinkleT: rand(0, TWO_PI),
        twinkleSpeed: rand(0.005, 0.015),
        color: STAR_PALETTE[Math.floor(rand(0, STAR_PALETTE.length))],
        offsetX: 0,
        offsetY: 0,
      };
    };

    /* ─── Sparse Cosmic Dust ─── */
    const makeDust = (w, h) => ({
      x: rand(0, w),
      y: rand(0, h),
      vx: (Math.random() - 0.5) * 0.08,
      vy: (Math.random() - 0.5) * 0.08,
      radius: rand(0.45, 0.9),
      alpha: rand(0.06, 0.18),
      color: Math.random() < 0.6 ? '255, 230, 200' : '255, 160, 60',
    });

    /* ─── Resize and Build Scene ─── */
    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;

      const area = width * height;
      // Sparse particle density: 1 star per ~14000 px² (yielding ~60-80 stars on standard displays)
      const starCount = clamp(Math.floor(area / 14000), 45, 95);
      const dustCount = clamp(Math.floor(area / 28000), 20, 45);

      stars = Array.from({ length: starCount }, () => makeStar(width, height));
      dust = Array.from({ length: dustCount }, () => makeDust(width, height));

      atmosphereCache = buildAtmosphereCache(width, height);
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    /* ─── Mouse Movement ─── */
    const onMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;

      if (mouseRef.current.smoothX === -9999) {
        mouseRef.current.smoothX = e.clientX;
        mouseRef.current.smoothY = e.clientY;
      }
    };

    const onMouseLeave = () => {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onMouseLeave);

    /* ─── Render Loop (60-120 FPS) ─── */
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation for buttery, non-jarring parallax
      if (mouseRef.current.x > 0) {
        mouseRef.current.smoothX = lerp(mouseRef.current.smoothX, mouseRef.current.x, 0.08);
        mouseRef.current.smoothY = lerp(mouseRef.current.smoothY, mouseRef.current.y, 0.08);
      }

      const smX = mouseRef.current.smoothX;
      const smY = mouseRef.current.smoothY;
      const hasMouse = mouseRef.current.x > 0 && mouseRef.current.y > 0;

      // 1. Subtle, understated atmospheric warmth
      if (atmosphereCache) {
        ctx.drawImage(atmosphereCache, 0, 0);
      }

      // 2. Stars with subtle twinkling, slow parallax & gentle attraction
      const GRAV_RADIUS = 140;

      stars.forEach((s) => {
        // Slow natural drift
        s.x += s.vx;
        s.y += s.vy;

        if (s.x < -10) s.x = width + 10;
        if (s.x > width + 10) s.x = -10;
        if (s.y < -10) s.y = height + 10;
        if (s.y > height + 10) s.y = -10;

        // Very gentle twinkling
        s.twinkleT += s.twinkleSpeed;
        s.alpha = s.baseAlpha * (0.75 + 0.25 * Math.sin(s.twinkleT));

        let finalX = s.x;
        let finalY = s.y;

        if (hasMouse) {
          // Slow parallax
          const parallaxX = (smX - width * 0.5) * s.parallaxFactor;
          const parallaxY = (smY - height * 0.5) * s.parallaxFactor;
          finalX += parallaxX;
          finalY += parallaxY;

          // Gentle, subtle gravitational nudge
          if (!isReducedMotion.current && s.layer >= 1) {
            const dx = smX - s.x;
            const dy = smY - s.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < GRAV_RADIUS && dist > 1) {
              const normDist = (GRAV_RADIUS - dist) / GRAV_RADIUS;
              const pullForce = normDist * 8; // Restrained pull
              s.offsetX = lerp(s.offsetX, (dx / dist) * pullForce, 0.05);
              s.offsetY = lerp(s.offsetY, (dy / dist) * pullForce, 0.05);
            } else {
              s.offsetX = lerp(s.offsetX, 0, 0.03);
              s.offsetY = lerp(s.offsetY, 0, 0.03);
            }
          }
        }

        finalX += s.offsetX;
        finalY += s.offsetY;

        // Soft halo on larger foreground stars
        if (s.radius > 1.0) {
          const haloSize = s.radius * 3.2;
          const haloGrad = ctx.createRadialGradient(finalX, finalY, 0, finalX, finalY, haloSize);
          haloGrad.addColorStop(0, `rgba(${s.color}, ${s.alpha * 0.4})`);
          haloGrad.addColorStop(1, `rgba(${s.color}, 0)`);

          ctx.beginPath();
          ctx.arc(finalX, finalY, haloSize, 0, TWO_PI);
          ctx.fillStyle = haloGrad;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(finalX, finalY, s.radius, 0, TWO_PI);
        ctx.fillStyle = `rgba(${s.color}, ${s.alpha})`;
        ctx.fill();
      });

      // 3. Sparse floating cosmic dust
      dust.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;

        if (d.x < 0) d.x = width;
        if (d.x > width) d.x = 0;
        if (d.y < 0) d.y = height;
        if (d.y > height) d.y = 0;

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.radius, 0, TWO_PI);
        ctx.fillStyle = `rgba(${d.color}, ${d.alpha})`;
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};

export default GalaxyBackground;
