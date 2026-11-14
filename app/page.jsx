import Reveal from '@/components/Reveal';
import Hero from '@/components/Hero';
import SkillsMarquee from '@/components/SkillsMarquee';
import About from '@/components/About';
import Work from '@/components/Work';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Reveal />
      <Hero />
      <SkillsMarquee />
      <About />
      <Work />
      <Faq />
      <Contact />
    </>
  );
}
