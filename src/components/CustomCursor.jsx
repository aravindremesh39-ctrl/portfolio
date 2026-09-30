import React, { useEffect, useRef, useState } from 'react';

/**
 * Premium Custom Mouse Cursor
 * - Smooth trailing/lag with requestAnimationFrame lerp
 * - Dual element: responsive core dot + buttery trailing glowing follower ring
 * - Subtle magnetic effect on interactive buttons/links
 * - 100% GPU-accelerated translate3d on wrapper + smooth scale transitions on visual inner
 * - Zero React re-renders during mouse movement (direct DOM updates)
 * - Automatic graceful fallback on touch/coarse devices and prefers-reduced-motion
 */
const CustomCursor = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const containerRef = useRef(null);
  const dotWrapperRef = useRef(null);
  const dotVisualRef = useRef(null);
  const ringWrapperRef = useRef(null);
  const ringVisualRef = useRef(null);

  // Position and state refs (zero re-renders)
  const mouse = useRef({ x: -100, y: -100 });
  const dotPos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const targetRing = useRef({ x: -100, y: -100 });

  const isVisible = useRef(false);
  const isHovered = useRef(false);
  const isMouseDown = useRef(false);
  const magneticTarget = useRef(null);
  const animFrameId = useRef(null);

  useEffect(() => {
    // Only enable for precision pointers and users without reduced-motion preference
    const mediaHover = window.matchMedia('(hover: hover) and (pointer: fine)');
    const mediaReduced = window.matchMedia('(prefers-reduced-motion: reduce)');

    const checkEnabled = () => {
      const allowed = mediaHover.matches && !mediaReduced.matches;
      setIsEnabled(allowed);
      if (allowed) {
        document.documentElement.classList.add('custom-cursor-active');
      } else {
        document.documentElement.classList.remove('custom-cursor-active');
      }
    };

    checkEnabled();

    mediaHover.addEventListener?.('change', checkEnabled);
    mediaReduced.addEventListener?.('change', checkEnabled);

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
      mediaHover.removeEventListener?.('change', checkEnabled);
      mediaReduced.removeEventListener?.('change', checkEnabled);
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    const container = containerRef.current;
    const dotWrapper = dotWrapperRef.current;
    const dotVisual = dotVisualRef.current;
    const ringWrapper = ringWrapperRef.current;
    const ringVisual = ringVisualRef.current;

    if (!container || !dotWrapper || !dotVisual || !ringWrapper || !ringVisual) return;

    // Interactive element selectors
    const interactiveSelector =
      'a, button, input, textarea, select, [role="button"], .glass-card, [data-cursor="hover"], .interactive-hover';
    const magneticSelector = 'a, button, [role="button"]';

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (!isVisible.current) {
        isVisible.current = true;
        // Snap immediately to initial position to avoid flying in from top-left
        dotPos.current.x = e.clientX;
        dotPos.current.y = e.clientY;
        ringPos.current.x = e.clientX;
        ringPos.current.y = e.clientY;
        targetRing.current.x = e.clientX;
        targetRing.current.y = e.clientY;
        container.style.opacity = '1';
      }

      // Check hover state and magnetic targets
      const target = e.target;
      if (target && target instanceof Element) {
        const interactiveEl = target.closest(interactiveSelector);
        const hovered = Boolean(interactiveEl);

        if (hovered !== isHovered.current) {
          isHovered.current = hovered;
          applyVisualState();
        }

        const magneticEl = target.closest(magneticSelector);
        magneticTarget.current = magneticEl || null;
      }
    };

    const handleMouseDown = () => {
      isMouseDown.current = true;
      applyVisualState();
    };

    const handleMouseUp = () => {
      isMouseDown.current = false;
      applyVisualState();
    };

    const handleMouseLeave = () => {
      isVisible.current = false;
      container.style.opacity = '0';
      magneticTarget.current = null;
    };

    const handleMouseEnter = () => {
      if (mouse.current.x > 0 && mouse.current.y > 0) {
        isVisible.current = true;
        container.style.opacity = '1';
      }
    };

    // Update inner visual styles (scale, colors, glow)
    const applyVisualState = () => {
      if (!ringVisual || !dotVisual) return;

      if (isMouseDown.current) {
        // Active click state
        ringVisual.style.transform = 'scale(0.85)';
        ringVisual.style.backgroundColor = 'rgba(255, 122, 0, 0.42)';
        ringVisual.style.borderColor = '#FF7A00';
        ringVisual.style.boxShadow = '0 0 24px rgba(255, 122, 0, 0.85)';

        dotVisual.style.transform = 'scale(1.35)';
        dotVisual.style.opacity = '1';
      } else if (isHovered.current) {
        // Hovering interactive elements
        ringVisual.style.transform = 'scale(1.72)';
        ringVisual.style.backgroundColor = 'rgba(255, 122, 0, 0.2)';
        ringVisual.style.borderColor = '#FF7A00';
        ringVisual.style.boxShadow = '0 0 28px rgba(255, 122, 0, 0.7)';

        dotVisual.style.transform = 'scale(0.55)';
        dotVisual.style.opacity = '0.6';
      } else {
        // Default floating state
        ringVisual.style.transform = 'scale(1)';
        ringVisual.style.backgroundColor = 'rgba(255, 122, 0, 0.12)';
        ringVisual.style.borderColor = 'rgba(255, 255, 255, 0.45)';
        ringVisual.style.boxShadow = '0 0 16px rgba(255, 122, 0, 0.35)';

        dotVisual.style.transform = 'scale(1)';
        dotVisual.style.opacity = '1';
      }
    };

    // 60-120fps GPU render loop
    const render = () => {
      const mouseX = mouse.current.x;
      const mouseY = mouse.current.y;

      // 1. Calculate magnetic offset if hovering a button/link
      if (magneticTarget.current && document.contains(magneticTarget.current)) {
        const rect = magneticTarget.current.getBoundingClientRect();
        // Check if pointer is still within a generous area around the element
        if (
          mouseX >= rect.left - 24 &&
          mouseX <= rect.right + 24 &&
          mouseY >= rect.top - 24 &&
          mouseY <= rect.bottom + 24
        ) {
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const distX = mouseX - centerX;
          const distY = mouseY - centerY;
          // Elegant magnetic cushion: 28% pull towards element center
          targetRing.current.x = centerX + distX * 0.42;
          targetRing.current.y = centerY + distY * 0.42;
        } else {
          magneticTarget.current = null;
          targetRing.current.x = mouseX;
          targetRing.current.y = mouseY;
        }
      } else {
        targetRing.current.x = mouseX;
        targetRing.current.y = mouseY;
      }

      // 2. Interpolate positions (lerp)
      // Core dot tracks with sharp precision (lerp 0.7)
      const dotLerp = 0.7;
      dotPos.current.x += (mouseX - dotPos.current.x) * dotLerp;
      dotPos.current.y += (mouseY - dotPos.current.y) * dotLerp;

      // Follower ring glides with cinematic trailing inertia (lerp 0.16)
      const ringLerp = 0.16;
      ringPos.current.x += (targetRing.current.x - ringPos.current.x) * ringLerp;
      ringPos.current.y += (targetRing.current.y - ringPos.current.y) * ringLerp;

      // Prevent micro-jitter on resting state
      if (Math.abs(mouseX - dotPos.current.x) < 0.05) dotPos.current.x = mouseX;
      if (Math.abs(mouseY - dotPos.current.y) < 0.05) dotPos.current.y = mouseY;
      if (Math.abs(targetRing.current.x - ringPos.current.x) < 0.05) ringPos.current.x = targetRing.current.x;
      if (Math.abs(targetRing.current.y - ringPos.current.y) < 0.05) ringPos.current.y = targetRing.current.y;

      // 3. Apply pure GPU transforms (translate3d)
      dotWrapper.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0) translate(-50%, -50%)`;
      ringWrapper.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isEnabled]);

  if (!isEnabled) return null;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[999999] overflow-hidden transition-opacity duration-300"
      style={{ opacity: 0 }}
    >
      {/* Outer Follower Ring Wrapper (translate3d without CSS transitions) */}
      <div
        ref={ringWrapperRef}
        className="pointer-events-none absolute top-0 left-0 will-change-transform"
        style={{ transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)' }}
      >
        {/* Visual Ring (Smooth scale and color transitions) */}
        <div
          ref={ringVisualRef}
          className="pointer-events-none rounded-full backdrop-blur-[1px]"
          style={{
            width: '28px',
            height: '28px',
            backgroundColor: 'rgba(255, 122, 0, 0.12)',
            border: '1px solid rgba(255, 255, 255, 0.45)',
            boxShadow: '0 0 16px rgba(255, 122, 0, 0.35)',
            transform: 'scale(1)',
            transformOrigin: 'center center',
            transition:
              'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
          }}
        />
      </div>

      {/* Core Responsive Dot Wrapper (translate3d) */}
      <div
        ref={dotWrapperRef}
        className="pointer-events-none absolute top-0 left-0 will-change-transform"
        style={{ transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)' }}
      >
        {/* Visual Dot */}
        <div
          ref={dotVisualRef}
          className="pointer-events-none rounded-full"
          style={{
            width: '6px',
            height: '6px',
            backgroundColor: '#FFFFFF',
            boxShadow: '0 0 8px rgba(255, 122, 0, 0.85)',
            transform: 'scale(1)',
            transformOrigin: 'center center',
            transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease',
          }}
        />
      </div>
    </div>
  );
};

export default CustomCursor;

