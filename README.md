<!-- ═══════════════════════════════════════════════════════════════════════
     VOLTA — animated README. Every animation below is a public SVG service
     (capsule-render / readme-typing-svg / shields.io), so it renders on
     GitHub without shipping extra files.
     ═══════════════════════════════════════════════════════════════════════ -->

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:5B8DEF,30:4DE8A0,60:E8D44D,100:F8A93B&height=200&section=header&text=VOLTA&fontSize=92&fontColor=14120e&fontAlignY=40&desc=a%20loud%20little%20portfolio%20template&descAlignY=60&descSize=17&animation=twinkling" width="100%" alt="VOLTA — a loud little portfolio template" />

<a href="https://github.com/">
  <img src="https://readme-typing-svg.demolab.com?font=Space+Mono&weight=700&size=17&duration=2600&pause=700&color=FE428E&center=true&vCenter=true&width=760&lines=Next.js+%2B+hand-written+CSS;Zero+animation+libraries;Everything+moves+on+purpose;Fork+it%2C+recolour+it%2C+ship+it+in+an+afternoon" alt="typing" />
</a>

<br />

<img src="https://img.shields.io/badge/next.js_15-14120e?style=for-the-badge&logo=nextdotjs&logoColor=cbf24d" />
<img src="https://img.shields.io/badge/react_19-14120e?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/static_export-14120e?style=for-the-badge&logo=githubpages&logoColor=cbf24d" />
<img src="https://img.shields.io/badge/0_animation_libs-14120e?style=for-the-badge&logo=javascript&logoColor=E8D44D" />
<img src="https://img.shields.io/badge/license_MIT-14120e?style=for-the-badge&logo=opensourceinitiative&logoColor=4DE8A0" />

<br /><br />

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:FE428E,25:F8A93B,50:E8D44D,75:4DE8A0,100:5B8DEF&height=4" width="100%" alt="rainbow divider" />

</div>

<div align="center">

### 🖼️ what it looks like

<img src="preview.png" width="820" alt="VOLTA hero — oversized display type, portrait card, acid-lime accents" />

<sub><a href="preview-full.jpg">↕ open the <b>full-page</b> screenshot</a></sub>

</div>

<br />

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=0:FE428E,50:F8A93B,100:E8D44D&height=34&text=01%20%20OVERVIEW&fontSize=16&fontColor=14120e&fontAlign=50&animation=twinkling" width="100%" alt="01 overview" />
</div>

VOLTA is a one-page portfolio for designers, developers and creative generalists who would rather be **loud than beige**. It ships as a **fully static Next.js export** — no server, no database, no animation dependency — and deploys free on GitHub Pages, Vercel, Netlify or Cloudflare Pages.

Everything on the page comes from a single file: [`content/site.js`](content/site.js). Change your name, your projects and your FAQ there; the layout, motion and art direction stay intact.

<table>
<tr>
<td width="50%" valign="top">

**Built for**

- designers who code
- front-end devs with taste
- creative studios & duos
- anyone bored of template-y templates

</td>
<td width="50%" valign="top">

**Not built for**

- blogs or CMS-driven sites
- e-commerce
- 12-page corporate sites
- anyone who wants a page builder

</td>
</tr>
</table>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=0:F8A93B,50:E8D44D,100:4DE8A0&height=34&text=02%20%20WHAT'S%20INSIDE&fontSize=16&fontColor=14120e&fontAlign=50&animation=twinkling" width="100%" alt="02 what's inside" />
</div>

| ✦                 | Detail                                                                                                                                                           |
| :---------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **10 sections**   | ticker · nav · hero · disciplines marquee · about & stats · selected work · FAQ accordion · contact · footer · mobile menu                                       |
| **Custom cursor** | dot + lagging ring, labelled disc over project cards, auto-inverts on dark sections, off for touch & reduced-motion users                                        |
| **Motion**        | masked line reveals, scroll-triggered fades, magnetic buttons, pointer parallax portrait, count-up stats, infinite marquees, clip-path menu, scroll progress bar |
| **Type**          | Archivo (display) · Instrument Serif (italic accent) · Space Mono (meta) — self-hosted at build time via `next/font`                                             |
| **Colour**        | bone `#EDE8DD` · ink `#14120E` · acid `#CBF24D` · clay `#D9603B`, all as CSS variables                                                                           |
| **Accessibility** | skip link, focus-visible rings, `aria-expanded` accordion & menu, keyboard-closeable overlay, full `prefers-reduced-motion` fallback                             |
| **Performance**   | ~110 kB first-load JS, no images requested by JS, zero third-party scripts, zero runtime CSS-in-JS                                                               |
| **Responsive**    | 390 px → 1920 px, fluid `clamp()` type scale, single-column mobile layout, distinct tablet breakpoint                                                            |

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=0:E8D44D,50:4DE8A0,100:3BC9DB&height=34&text=03%20%20QUICK%20START&fontSize=16&fontColor=14120e&fontAlign=50&animation=twinkling" width="100%" alt="03 quick start" />
</div>

```bash
# 1 — install
npm install

# 2 — run it hot
npm run dev          # → http://localhost:3000

# 3 — build the static site
npm run build        # → ./out

# 4 — look at the built site the way the internet will
npm run preview      # → http://localhost:3000
```

> **Node 18.18+** is required (Node 20 recommended). No other tooling, no global CLIs.

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=0:4DE8A0,50:3BC9DB,100:5B8DEF&height=34&text=04%20%20STRUCTURE&fontSize=16&fontColor=14120e&fontAlign=50&animation=twinkling" width="100%" alt="04 structure" />
</div>

<details open>
<summary><b>Click to fold / unfold the file tree</b></summary>

```text
volta-portfolio/
├── app/
│   ├── globals.css        ← design tokens, base layer, shared utilities
│   ├── layout.jsx         ← fonts, metadata, ticker + nav + footer
│   └── page.jsx           ← section order for the page
├── components/
│   ├── About.jsx          ← sticky label + manifesto + stats
│   ├── Contact.jsx        ← ink CTA block with magnetic disc
│   ├── Cursor.jsx         ← custom cursor engine
│   ├── CountUp.jsx        ← scroll-triggered number counter
│   ├── Faq.jsx            ← accessible accordion
│   ├── Footer.jsx         ← wordmark marquee + socials
│   ├── Hero.jsx           ← name, portrait, live clock, parallax
│   ├── Magnetic.jsx       ← magnetic hover primitive
│   ├── Nav.jsx            ← sticky nav + fullscreen mobile menu
│   ├── Reveal.jsx         ← one IntersectionObserver for the page
│   ├── ScrollProgress.jsx ← top progress bar
│   ├── SkillsMarquee.jsx  ← two-row disciplines band
│   ├── Ticker.jsx         ← announcement strip
│   ├── Work.jsx           ← project grid with hover covers
│   ├── icons.jsx          ← inline SVG set
│   └── *.module.css       ← one stylesheet per component
├── content/
│   └── site.js            ← ★ ALL COPY & PROJECT DATA LIVES HERE
├── lib/
│   └── asset.js           ← base-path helper for GitHub Pages
├── public/
│   ├── images/            ← portrait + 5 project covers (AI-generated)
│   ├── favicon.svg
│   └── .nojekyll
├── next.config.mjs        ← static export + base path
└── package.json
```

</details>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=0:3BC9DB,50:5B8DEF,100:A463F2&height=34&text=05%20%20MAKE%20IT%20YOURS&fontSize=16&fontColor=14120e&fontAlign=50&animation=twinkling" width="100%" alt="05 make it yours" />
</div>

**1. Copy** — open `content/site.js`. Name, role, ticker lines, skills, about paragraphs, projects, FAQ, email, socials. Everything is a plain JS object, commented section by section.

```js
export const site = {
  name: "Mira Okonkwo",
  role: "independent designer & front-end developer",
  ticker: ["booking q3 2027", "two project slots open"],
  work: [
    {
      index: "01",
      title: "Northwind Coffee",
      subtitle: "identity, packaging & shop",
      year: "2026",
      tags: ["brand", "packaging", "web"],
      image: "/images/work-1.jpg",
      href: "https://your-case-study.com",
    },
  ],
  // …
};
```

**2. Images** — drop your own files into `public/images/` and point the paths at them. Keep project covers around **1600 × 1200** and the portrait at **4:5** for the cleanest crops.

**3. Colour** — edit the four variables at the top of `app/globals.css`:

```css
:root {
  --bone: #ede8dd; /* page background        */
  --ink: #14120e; /* text + dark sections   */
  --acid: #cbf24d; /* the loud accent        */
  --clay: #d9603b; /* secondary accent       */
}
```

**4. Type** — swap the three `next/font` imports in `app/layout.jsx` (Archivo → Instrument Serif → Space Mono) for any [Google font](https://fonts.google.com). Nothing else references font files by name.

**5. Sections** — reorder or delete sections in `app/page.jsx`. Each one is a self-contained component.

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=0:5B8DEF,50:A463F2,100:FE428E&height=34&text=06%20%20DEPLOY&fontSize=16&fontColor=14120e&fontAlign=50&animation=twinkling" width="100%" alt="06 deploy" />
</div>

<table>
<tr><th>Host</th><th>How</th><th>Base path needed?</th></tr>
<tr>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=0:A463F2,50:FE428E,100:F8A93B&height=34&text=07%20%20LICENSE%20%26%20CREDITS&fontSize=16&fontColor=14120e&fontAlign=50&animation=twinkling" width="100%" alt="07 license and credits" />
</div>

- **Code** — [MIT](LICENSE). Use it, sell it, fork it, print it on a shirt.
- **Copy** — the placeholder persona _Mira Okonkwo_, the project names and all FAQ answers are fictional. Replace them before you publish; they exist so the layout never looks empty.
- **Images** — the portrait and five project covers are AI-generated for this template and included under the same MIT licence. Swap them for your own work.
- **Fonts** — Archivo, Instrument Serif and Space Mono, all SIL Open Font License, served locally from your build.
- **This template is an original design.** It is not affiliated with, derived from, or a clone of any other portfolio site.

<br />

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:5B8DEF,40:4DE8A0,70:E8D44D,100:F8A93B&height=150&section=footer&text=now%20go%20make%20something%20loud&fontSize=26&fontColor=14120e&fontAlignY=72&animation=twinkling" width="100%" alt="footer" />

<sub>If VOLTA helped you land a client, a job or just a compliment — a ⭐ costs nothing.</sub>

</div>
