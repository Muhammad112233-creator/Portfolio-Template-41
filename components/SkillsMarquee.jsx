import { site } from '@/content/site';
import { Sparkle } from './icons';
import s from './SkillsMarquee.module.css';

function Row({ outline = false }) {
  return (
    <>
      {site.skills.map((skill) => (
        <span className={`${s.word} ${outline ? s.outline : ''}`} key={skill}>
          {skill}
          <Sparkle size={14} />
        </span>
      ))}
    </>
  );
}

export default function SkillsMarquee() {
  return (
    <section className={s.band} aria-label="Disciplines">
      <div
        className={`marquee ${s.row}`}
        style={{ '--marquee-speed': '42s', '--marquee-gap': '1.6rem' }}
      >
        <div className="marquee__track">
          <Row />
          <Row />
        </div>
        <div className="marquee__track" aria-hidden="true">
          <Row />
          <Row />
        </div>
      </div>

      <div
        className={`marquee ${s.row} ${s.rowOutline}`}
        data-reverse="true"
        style={{ '--marquee-speed': '54s', '--marquee-gap': '1.6rem' }}
        aria-hidden="true"
      >
        <div className="marquee__track">
          <Row outline />
          <Row outline />
        </div>
        <div className="marquee__track">
          <Row outline />
          <Row outline />
        </div>
      </div>
    </section>
  );
}
