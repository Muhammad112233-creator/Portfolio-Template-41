'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
import { site } from '@/content/site';
import { asset } from '@/lib/asset';
import Magnetic from './Magnetic';
import { ArrowUpRight, ArrowDown, Sparkle } from './icons';
import s from './Hero.module.css';

export default function Hero() {
  const figureRef = useRef(null);
  const [clock, setClock] = useState('');

  /* live local time in the studio's timezone */
  useEffect(() => {
    const tick = () => {
      try {
        setClock(
          new Intl.DateTimeFormat('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: site.timezone,
            hour12: false,
          }).format(new Date())
        );
      } catch {
        setClock('');
      }
    };
    tick();
    const id = setInterval(tick, 20000);
    return () => clearInterval(id);
  }, []);

  /* pointer parallax on the portrait */
  useEffect(() => {
    const el = figureRef.current;
    if (!el) return;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;

    const onMove = (event) => {
      const rect = el.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty('--px', `${(x * -14).toFixed(2)}px`);
      el.style.setProperty('--py', `${(y * -14).toFixed(2)}px`);
      el.style.setProperty('--rx', `${(y * 3.2).toFixed(2)}deg`);
      el.style.setProperty('--ry', `${(x * -3.2).toFixed(2)}deg`);
    };

    const onLeave = () => {
      el.style.setProperty('--px', '0px');
      el.style.setProperty('--py', '0px');
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ry', '0deg');
    };

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <section className={s.hero} id="top">
      <div className={`shell ${s.grid}`}>
        <div className={s.left}>
          <p className={`eyebrow ${s.eyebrow}`} data-reveal>
            <Sparkle size={9} />
            {site.hero.eyebrow}
          </p>

          <h1 className={s.name}>
            <span className="mask">
              <span>{site.firstName}</span>
            </span>
            <span className={`mask ${s.nameLine2}`} style={{ '--reveal-delay': 1 }}>
              <span>{site.lastName}</span>
            </span>
          </h1>

          <p className={`serif ${s.tagline}`} data-reveal style={{ '--reveal-delay': 2 }}>
            {site.tagline.split(' ').map((word, i) => (
              <Fragment key={`${word}-${i}`}>
                <span className={s.word}>{word}</span>{' '}
              </Fragment>
            ))}
          </p>

          <p className={`lede ${s.subhead}`} data-reveal style={{ '--reveal-delay': 3 }}>
            {site.hero.subhead}
          </p>

          <div className={s.actions} data-reveal style={{ '--reveal-delay': 4 }}>
            <Magnetic strength={0.2}>
              <a className={`btn btn--solid ${s.primary}`} href={site.hero.primaryCta.href}>
                {site.hero.primaryCta.label}
                <span className="btn__arrow">
                  <ArrowUpRight size={13} />
                </span>
              </a>
            </Magnetic>
            <a className={`sweep ${s.secondary}`} href={site.hero.secondaryCta.href}>
              {site.hero.secondaryCta.label}
            </a>
          </div>

          <div className={s.meta} data-reveal style={{ '--reveal-delay': 5 }}>
            <span className={s.metaItem}>
              <i className={s.metaDot} aria-hidden="true" />
              {site.location}
            </span>
            <span className={s.metaItem}>local time {clock || '--:--'}</span>
            <span className={s.metaItem}>{site.role}</span>
          </div>
        </div>

        <div className={s.right}>
          <figure className={s.figure} ref={figureRef}>
            <div className={s.frame} aria-hidden="true" />
            <div className={s.imageWrap}>
              <img
                className={s.image}
                src={asset(site.hero.portrait)}
                alt={site.hero.portraitAlt}
                width={1200}
                height={1500}
                loading="eager"
                decoding="async"
              />
            </div>

            <figcaption className={s.caption}>{site.hero.portraitCaption}</figcaption>

            <div className={s.badge} aria-hidden="true">
              <svg viewBox="0 0 100 100" className={s.badgeSvg}>
                <defs>
                  <path
                    id="badgeCircle"
                    d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"
                    fill="none"
                  />
                </defs>
                <text>
                  <textPath href="#badgeCircle" startOffset="0">
                    open for projects · open for projects ·
                  </textPath>
                </text>
              </svg>
              <ArrowUpRight size={16} />
            </div>
          </figure>
        </div>
      </div>

      <div className={`shell ${s.foot}`}>
        <a className={s.scrollCue} href="#about">
          <span>{site.hero.scrollCue}</span>
          <span className={s.cueLine}>
            <ArrowDown size={14} />
          </span>
        </a>
        <span className={`mono ${s.footNote}`}>{site.hero.footNote}</span>
      </div>
    </section>
  );
}
