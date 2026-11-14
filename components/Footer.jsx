import { site } from '@/content/site';
import { ArrowUpRight, Sparkle } from './icons';
import s from './Footer.module.css';

function WordRow() {
  return (
    <>
      {[0, 1, 2].map((i) => (
        <span className={s.big} key={i}>
          {site.wordmark}
          <Sparkle size={26} />
        </span>
      ))}
    </>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={s.footer} data-theme="dark">
      <div
        className={`marquee ${s.wordmarkMarquee}`}
        style={{ '--marquee-speed': '46s', '--marquee-gap': '2.2rem' }}
        aria-hidden="true"
      >
        <div className="marquee__track">
          <WordRow />
          <WordRow />
        </div>
        <div className="marquee__track">
          <WordRow />
          <WordRow />
        </div>
      </div>

      <div className={`shell ${s.inner}`}>
        <div className={s.cols}>
          <div className={s.col}>
            <span className={s.colLabel}>say hello</span>
            <a className={s.mail} href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>

          <div className={s.col}>
            <span className={s.colLabel}>elsewhere</span>
            <ul className={s.socials}>
              {site.footer.socials.map((social) => (
                <li key={social.label}>
                  <a className={s.social} href={social.href} target="_blank" rel="noreferrer">
                    {social.label}
                    <ArrowUpRight size={11} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={s.col}>
            <span className={s.colLabel}>colophon</span>
            <p className={s.note}>
              {site.footer.note}
              <br />
              {site.footer.colophon}
            </p>
          </div>
        </div>

        <div className={s.bottom}>
          <span className={s.copy}>
            &copy; {year} {site.name}. all rights reserved.
          </span>
          <a className={s.top} href="#top">
            {site.footer.backToTop}
            <span className={s.topArrow}>
              <ArrowUpRight size={13} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
