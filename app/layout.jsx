import { Archivo, Instrument_Serif, Space_Mono } from 'next/font/google';
import { site } from '@/content/site';
import { asset } from '@/lib/asset';

import ScrollProgress from '@/components/ScrollProgress';
import Cursor from '@/components/Cursor';
import Ticker from '@/components/Ticker';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

import './globals.css';

const display = Archivo({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const mono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: `${site.name} — ${site.role}`,
  description: `${site.tagline} Portfolio of ${site.name}, ${site.role} based in ${site.location}.`,
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    images: [asset('/images/portrait.jpg')],
    type: 'website',
  },
  icons: {
    icon: asset('/favicon.svg'),
  },
};

export const viewport = {
  themeColor: '#ede8dd',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${serif.variable} ${mono.variable}`}>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <ScrollProgress />
        <Cursor />
        <Ticker />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
