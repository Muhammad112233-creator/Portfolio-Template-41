'use client';

import { useState } from 'react';
import { site } from '@/content/site';
import { Plus } from './icons';
import s from './Faq.module.css';

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className={`section ${s.faq}`} id="faq">
      <div className={`shell ${s.grid}`}>
        <div className={s.aside}>
          <span className="eyebrow">{site.faqLabel}</span>
          <h2 className={s.heading}>
            <span className="mask">
              <span>{site.faqHeading}</span>
            </span>
          </h2>
        </div>

        <div className={s.list}>
          {site.faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <div className={s.item} key={item.q} data-open={isOpen ? 'true' : 'false'}>
                <h3>
                  <button
                    className={s.trigger}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-trigger-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span className={s.num}>{String(i + 1).padStart(2, '0')}</span>
                    <span className={s.question}>{item.q}</span>
                    <span className={s.icon} aria-hidden="true">
                      <Plus size={14} />
                    </span>
                  </button>
                </h3>

                <div
                  className={s.panel}
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  aria-hidden={!isOpen}
                >
                  <div className={s.panelInner}>
                    <p className={s.answer}>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
