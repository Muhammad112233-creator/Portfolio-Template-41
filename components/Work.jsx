import { site } from '@/content/site';
import { asset } from '@/lib/asset';
import { ArrowUpRight } from './icons';
import s from './Work.module.css';

export default function Work() {
  return (
    <section className={`section ${s.work}`} id="work">
      <div className="shell">
        <header className={s.head}>
          <span className={`eyebrow ${s.label}`} data-reveal>
            {site.workLabel}
          </span>
          <h2 className={s.heading}>
            <span className="mask">
              <span>{site.workHeading}</span>
            </span>
          </h2>
          <span className={s.count} aria-hidden="true">
            ({String(site.work.length).padStart(2, '0')})
          </span>
        </header>

        <div className={s.grid}>
          {site.work.map((item, i) => (
            <a
              className={s.card}
              key={item.index}
              href={item.href}
              data-cursor="view case"
              data-reveal
              style={{ '--reveal-delay': i % 2 }}
              aria-label={`${item.title} — ${item.subtitle}`}
            >
              <div className={s.media}>
                <img
                  className={s.image}
                  src={asset(item.image)}
                  alt={item.alt}
                  width={1400}
                  height={1050}
                  loading="lazy"
                  decoding="async"
                />
                <span className={s.veil} aria-hidden="true">
                  <span className={s.veilText}>
                    view case <ArrowUpRight size={14} />
                  </span>
                </span>
                <span className={s.index}>{item.index}</span>
                <span className={s.yearTag}>{item.year}</span>
              </div>

              <div className={s.info}>
                <div className={s.infoMain}>
                  <h3 className={s.title}>{item.title}</h3>
                  <p className={s.subtitle}>{item.subtitle}</p>
                </div>
                <span className={s.arrow} aria-hidden="true">
                  <ArrowUpRight size={18} />
                </span>
              </div>

              <ul className={s.tags}>
                {item.tags.map((tag) => (
                  <li key={tag} className={s.tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>

        <div className={s.more} data-reveal>
          <a className="sweep" href={site.workFooterCta.href}>
            {site.workFooterCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
