import { site } from '@/content/site';
import Magnetic from './Magnetic';
import { ArrowUpRight, Sparkle } from './icons';
import s from './Contact.module.css';

function MarqueeRow() {
  return (
    <>
      {site.contact.marquee.map((word) => (
        <span className={s.marqueeWord} key={word}>
          {word}
          <Sparkle size={12} />
        </span>
      ))}
    </>
  );
}

export default function Contact() {
  const { contact } = site;

  return (
    <section className={s.contact} id="contact" data-theme="dark">
      <div
        className={`marquee ${s.topMarquee}`}
        style={{ '--marquee-speed': '30s', '--marquee-gap': '1.6rem' }}
        aria-hidden="true"
      >
        <div className="marquee__track">
          <MarqueeRow />
          <MarqueeRow />
        </div>
        <div className="marquee__track">
          <MarqueeRow />
          <MarqueeRow />
        </div>
      </div>

      <div className={`shell ${s.inner}`}>
        <span className={`eyebrow ${s.label}`} data-reveal>
          {contact.label}
        </span>

        <h2 className={s.heading}>
          <span className="mask">
            <span>{contact.headingTop}</span>
          </span>
          <span className={`mask ${s.headingAccent}`} style={{ '--reveal-delay': 1 }}>
            <span>{contact.headingBottom}</span>
          </span>
        </h2>

        <div className={s.row}>
          <p className={s.blurb} data-reveal style={{ '--reveal-delay': 2 }}>
            {contact.blurb}
          </p>

          <Magnetic strength={0.34}>
            <a
              className={s.circle}
              href={`mailto:${contact.email}`}
              data-cursor="say hi"
              aria-label={`Email ${site.name}`}
            >
              <span className={s.circleInner}>
                <span className={s.circleLabel}>{contact.buttonLabel}</span>
                <span className={s.circleArrow}>
                  <ArrowUpRight size={18} />
                </span>
              </span>
            </a>
          </Magnetic>
        </div>

        <a className={s.email} href={`mailto:${contact.email}`}>
          {contact.email}
        </a>
      </div>
    </section>
  );
}
