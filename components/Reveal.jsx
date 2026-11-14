'use client';

import { useEffect } from 'react';

/**
 * One observer for the whole page.
 * Any element with [data-reveal] or .mask fades/slides in once it enters view.
 */
export default function Reveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('[data-reveal], .mask'));
    if (!els.length) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.05 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
