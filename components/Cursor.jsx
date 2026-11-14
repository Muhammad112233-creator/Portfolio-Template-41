'use client';

import { useEffect, useRef, useState } from 'react';
import s from './Cursor.module.css';

/**
 * Custom cursor: a fast dot, a lagging ring, and a labelled disc when hovering
 * elements that carry [data-cursor="view"].
 * Off for touch devices and reduced-motion users.
 */
export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState('');
  const [label, setLabel] = useState('');
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;
    setEnabled(true);

    const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { ...pointer };
    let raf = 0;
    let visible = false;

    const render = () => {
      ring.x += (pointer.x - ring.x) * 0.16;
      ring.y += (pointer.y - ring.y) * 0.16;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pointer.x}px, ${pointer.y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x.toFixed(2)}px, ${ring.y.toFixed(2)}px, 0)`;
      }
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    const onMove = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      if (!visible) {
        visible = true;
        document.body.classList.add('cursor-ready');
      }
    };

    // pointerover bubbles, so one listener handles the whole document
    const onOver = (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      setDark(Boolean(target.closest('[data-theme="dark"]')));

      const tagged = target.closest('[data-cursor]');
      if (tagged) {
        setMode('label');
        setLabel(tagged.getAttribute('data-cursor') || '');
        return;
      }

      if (target.closest('a, button, input, textarea, select, summary, [role="button"]')) {
        setMode('hover');
        setLabel('');
        return;
      }

      setMode('');
      setLabel('');
    };

    const onDown = () => setMode((m) => (m === 'label' ? m : 'press'));
    const onUp = () => setMode('');
    const onLeave = () => {
      visible = false;
      document.body.classList.remove('cursor-ready');
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerover', onOver, { passive: true });
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);
    document.addEventListener('pointerleave', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerover', onOver);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      document.removeEventListener('pointerleave', onLeave);
      document.body.classList.remove('cursor-ready');
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className={s.layer} aria-hidden="true" data-dark={dark ? 'true' : 'false'}>
      <div
        ref={ringRef}
        className={s.ring}
        data-mode={mode}
        data-has-label={label ? 'true' : 'false'}
      >
        <span className={s.label}>{label}</span>
      </div>
      <div ref={dotRef} className={s.dot} data-hidden={mode === 'label' ? 'true' : 'false'} />
    </div>
  );
}
