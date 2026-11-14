'use client';

import { useEffect, useState } from 'react';
import { site } from '@/content/site';
import Magnetic from './Magnetic';
import { ArrowUpRight } from './icons';
import s from './Nav.module.css';

export default function Nav() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <header className={s.header} data-stuck={stuck ? 'true' : 'false'} data-open={open ? 'true' : 'false'}>
        <div className={s.inner}>
          <a className={s.wordmark} href="#top" onClick={() => setOpen(false)} aria-label={`${site.name} — home`}>
            {site.wordmark}
            <span className={s.reg}>&copy;</span>
          </a>

          <nav className={s.links} aria-label="Primary">
            {site.nav.map((item, i) => (
              <a key={item.href} className={s.link} href={item.href}>
                <span className={s.num}>0{i + 1}</span>
                {item.label}
              </a>
            ))}
          </nav>

          <div className={s.right}>
            <span className={s.status}>
              <span className={s.pulse} aria-hidden="true" />
              {site.availability}
            </span>

            <div className={s.ctaWrap}>
              <Magnetic strength={0.22}>
                <a className={`btn btn--acid ${s.cta}`} href="#contact">
                  start a project <ArrowUpRight size={12} />
                </a>
              </Magnetic>
            </div>

            <button
              className={s.burger}
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-menu" className={s.menu} data-open={open ? 'true' : 'false'} data-theme="dark">
        <div className={s.menuInner}>
          <nav aria-label="Mobile">
            {site.nav.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                className={s.menuLink}
                style={{ '--i': i }}
                onClick={() => setOpen(false)}
              >
                <span className={s.menuNum}>0{i + 1}</span>
                {item.label}
              </a>
            ))}
          </nav>

          <div className={s.menuFoot}>
            <a className="sweep" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <div className={s.socials}>
              {site.footer.socials.map((social) => (
                <a key={social.label} className="sweep" href={social.href} target="_blank" rel="noreferrer">
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
