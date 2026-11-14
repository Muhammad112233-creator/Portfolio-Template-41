import { site } from '@/content/site';
import { Sparkle } from './icons';
import s from './Ticker.module.css';

function Row() {
  return (
    <>
      {site.ticker.map((item) => (
        <span className={s.item} key={item}>
          <Sparkle size={10} />
          {item}
        </span>
      ))}
    </>
  );
}

export default function Ticker() {
  return (
    <div className={s.bar}>
      <div className={`marquee ${s.marquee}`} style={{ '--marquee-speed': '34s', '--marquee-gap': '1.9rem' }}>
        <div className="marquee__track">
          <Row />
          <Row />
        </div>
        <div className="marquee__track" aria-hidden="true">
          <Row />
          <Row />
        </div>
      </div>
    </div>
  );
}
