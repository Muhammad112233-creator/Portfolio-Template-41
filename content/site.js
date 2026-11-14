/**
 * ─────────────────────────────────────────────────────────────
 *  VOLTA — edit this file to make the template yours.
 *  Every piece of copy on the site comes from here.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  /* ── identity ─────────────────────────────────────────────── */
  name: 'Mira Okonkwo',
  firstName: 'mira',
  lastName: 'okonkwo',
  wordmark: 'volta',
  role: 'independent designer & front-end developer',
  tagline: 'design-minded. code-fluent. allergic to beige.',
  location: 'Lisbon, PT',
  timezone: 'Europe/Lisbon',
  email: 'hello@volta.studio',
  resumeUrl: '#',

  /* ── announcement ticker ──────────────────────────────────── */
  ticker: [
    'booking q3 2027',
    'two project slots open',
    'design + build, no handoffs',
    'based in lisbon, working everywhere',
  ],

  /* ── navigation ───────────────────────────────────────────── */
  nav: [
    { label: 'work', href: '#work' },
    { label: 'about', href: '#about' },
    { label: 'faq', href: '#faq' },
    { label: 'contact', href: '#contact' },
  ],
  availability: 'open for projects',

  /* ── hero ─────────────────────────────────────────────────── */
  hero: {
    eyebrow: 'hello — i\u2019m',
    subhead: 'nine years of shipping brands, products and the websites that hold them together.',
    primaryCta: { label: 'see the work', href: '#work' },
    secondaryCta: { label: 'download cv', href: '#' },
    portrait: '/images/portrait.jpg',
    portraitAlt: 'Studio portrait of Mira Okonkwo against a warm bone backdrop',
    portraitCaption: 'shot on a tuesday, no filter, one coffee in',
    scrollCue: 'scroll for the good stuff',
    footNote: 'portfolio no. 03 \u2014 rebuilt from scratch, twice',
  },

  /* ── skills marquee ───────────────────────────────────────── */
  skills: [
    'brand systems',
    'creative direction',
    'design engineering',
    'art direction',
    'motion',
    'type design',
    'front-end',
    'product design',
  ],

  /* ── about / manifesto ────────────────────────────────────── */
  about: {
    label: '01 — about',
    heading: ['i don\u2019t hand off.', 'i ship.'],
    body: [
      'Most portfolios promise “end-to-end”. I actually do it: research, identity, type, interface, then the code that makes it move. One person, one thread, no translation loss between the deck and the deploy.',
      'I work with founders and small teams who have taste but no time — and with in-house teams who need someone who can argue a point and then go build it. If the brief is “make it feel expensive”, we should talk.',
    ],
    highlight: ['ship', 'taste', 'code'],
    disciplines: ['brand', 'web', 'product', 'motion', 'editorial', 'packaging'],
    stats: [
      { value: 9, suffix: '+', label: 'years in the trade' },
      { value: 47, suffix: '', label: 'projects shipped' },
      { value: 6, suffix: '', label: 'awards, two of them shiny' },
    ],
  },

  /* ── work ─────────────────────────────────────────────────── */
  workLabel: '02 — selected work',
  workHeading: 'Work I\u2019d show my mum.',
  work: [
    {
      index: '01',
      title: 'Northwind Coffee',
      subtitle: 'identity, packaging & shop',
      year: '2026',
      tags: ['brand', 'packaging', 'web'],
      image: '/images/work-1.jpg',
      alt: 'Chrome torus sculpture on a bone backdrop',
      href: '#',
      featured: true,
    },
    {
      index: '02',
      title: 'Pallet',
      subtitle: 'replatform for a furniture label',
      year: '2025',
      tags: ['product', 'front-end'],
      image: '/images/work-2.jpg',
      alt: 'Flat-lay of brand identity materials and paper swatches',
      href: '#',
    },
    {
      index: '03',
      title: 'Solstice Festival',
      subtitle: 'campaign site that sold out',
      year: '2025',
      tags: ['creative dev', 'motion'],
      image: '/images/work-3.jpg',
      alt: 'Layered translucent glass sheets in lime and ivory',
      href: '#',
    },
    {
      index: '04',
      title: 'Field Notes',
      subtitle: 'an editorial app for slow readers',
      year: '2024',
      tags: ['product', 'editorial'],
      image: '/images/work-4.jpg',
      alt: 'Folded brochure and phone on a bone surface',
      href: '#',
    },
    {
      index: '05',
      title: 'Hexa Type',
      subtitle: 'a variable typeface for screens',
      year: '2024',
      tags: ['type design', 'brand'],
      image: '/images/work-5.jpg',
      alt: 'Typographic poster with abstract geometric shapes on a bone wall',
      href: '#',
    },
  ],
  workFooterCta: { label: 'there\u2019s more where that came from', href: '#' },

  /* ── faq ──────────────────────────────────────────────────── */
  faqLabel: '03 — before you ask',
  faqHeading: 'The honest answers.',
  faq: [
    {
      q: 'What do you actually do all day?',
      a: 'Design systems, interfaces, and the front-end that carries them. If it has type, spacing, states and a deployment, it\u2019s mine.',
    },
    {
      q: 'How fast can we start?',
      a: 'Usually within two weeks. If it\u2019s genuinely on fire, say so in the first line of your email and I\u2019ll make room.',
    },
    {
      q: 'What does a project cost?',
      a: 'Fixed-fee, scoped after a short paid discovery. Websites start around €6k, identity systems around €9k, and I say no to “just a logo” jobs.',
    },
    {
      q: 'Do you work with agencies?',
      a: 'Yes — as a white-label design engineer. I\u2019ll happily be invisible on the credits if the work stays good.',
    },
    {
      q: 'Who should not hire you?',
      a: 'Anyone who wants a yes-person, a spec-free miracle, or a page built from six conflicting PDFs by three stakeholders. I need one decision-maker.',
    },
    {
      q: 'What\u2019s the fastest way to a great result?',
      a: 'Send me the real constraints: budget, deadline, the thing you\u2019re scared of. Clarity is the cheapest thing you can give a designer.',
    },
  ],

  /* ── contact ──────────────────────────────────────────────── */
  contact: {
    label: '04 — say something',
    headingTop: 'let\u2019s make',
    headingBottom: 'something loud',
    blurb: 'One email. No forms, no “discovery call” theatre. Tell me what you\u2019re building and what\u2019s in the way.',
    buttonLabel: 'email me',
    email: 'hello@volta.studio',
    marquee: ['available for freelance', 'booking q3 2027', 'no recruiters, please'],
  },

  /* ── footer ───────────────────────────────────────────────── */
  footer: {
    socials: [
      { label: 'instagram', href: 'https://instagram.com' },
      { label: 'linkedin', href: 'https://linkedin.com' },
      { label: 'read.cv', href: 'https://read.cv' },
      { label: 'github', href: 'https://github.com' },
    ],
    note: 'designed & built by mira. powered by too much coffee.',
    colophon: 'Next.js · hand-written CSS · no animation libraries',
    backToTop: 'back to top',
  },
};
