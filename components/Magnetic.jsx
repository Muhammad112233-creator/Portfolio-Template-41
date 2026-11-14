'use client';

import { useEffect, useRef } from 'react';

/**
 * Magnetic hover: the element drifts toward the pointer, then springs back.
 * Disabled for touch and for people who prefer reduced motion.
 */
export default function Magnetic({ children, strength = 0.28, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;

    let frame = 0;
    let target = { x: 0, y: 0 };
    let current = { x: 0, y: 0 };

    const render = () => {
      current.x += (target.x - current.x) * 0.16;
      current.y += (target.y - current.y) * 0.16;
      el.style.transform = `translate3d(${current.x.toFixed(2)}px, ${current.y.toFixed(2)}px, 0)`;
      if (Math.abs(target.x - current.x) > 0.1 || Math.abs(target.y - current.y) > 0.1) {
        frame = requestAnimationFrame(render);
      } else {
        frame = 0;
      }
    };

    const kick = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };

    const onMove = (event) => {
      const rect = el.getBoundingClientRect();
      target = {
        x: (event.clientX - (rect.left + rect.width / 2)) * strength,
        y: (event.clientY - (rect.top + rect.height / 2)) * strength,
      };
      kick();
    };

    const onLeave = () => {
      target = { x: 0, y: 0 };
      kick();
    };

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);

    return () => {
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
      cancelAnimationFrame(frame);
    };
  }, [strength]);

  return (
    <span ref={ref} className={className} style={{ display: 'inline-block', willChange: 'transform' }}>
      {children}
    </span>
  );
}
