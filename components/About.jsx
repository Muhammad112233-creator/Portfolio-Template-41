import { site } from '@/content/site';
import CountUp from './CountUp';
import { Sparkle } from './icons';
import s from './About.module.css';

const keywords = new Set(site.about.highlight.map((word) => word.toLowerCase()));

/** Wraps the words listed in content.about.highlight with an animated marker. */
function withMarks(text) {
  const pattern = new RegExp(`(${site.about.highlight.join('|')})`, 'gi');
  return text.split(pattern).map((chunk, i) =>
    keywords.has(chunk.toLowerCase()) ? (
      <mark key={`${chunk}-${i}`} className={s.mark}>
        {chunk}
      </mark>
    ) : (
      <span key={`${chunk}-${i}`}>{chunk}</span>
    )
  );
}

export default function About() {
  const { about } = site;

  return (
    <section className={`section ${s.about}`} id="about">
      <div className={`shell ${s.grid}`}>
        <aside className={s.aside}>
          <span className={`eyebrow ${s.label}`}>
            <Sparkle size={9} />
            {about.label}
          </span>
          <span className={s.line} aria-hidden="true" />
        </aside>

        <div className={s.content}>
          <h2 className={s.heading}>
            {about.heading.map((line, i) => (
              <span className={`mask ${i === about.heading.length - 1 ? s.accent : ''}`} key={line}>
                <span>{line}</span>
              </span>
            ))}
          </h2>

          <div className={s.body} data-reveal>
            {about.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{withMarks(paragraph)}</p>
            ))}
          </div>

          <ul className={s.disciplines} data-reveal style={{ '--reveal-delay': 1 }}>
            {about.disciplines.map((discipline) => (
              <li key={discipline}>
                <span className={s.pill}>{discipline}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`shell ${s.stats}`}>
        {about.stats.map((stat, i) => (
          <div className={s.stat} key={stat.label} data-reveal style={{ '--reveal-delay': i }}>
            <span className={s.statValue}>
              <CountUp value={stat.value} suffix={stat.suffix} />
            </span>
            <span className={s.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
