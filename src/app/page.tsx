'use client';

import About from '@/components/about';
import Experience from '@/components/experience';
import Hero from '@/components/hero';
import Skills from '@/components/skills';
import Terminal from '@/components/terminal';

export default function AppPage() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <About />
      <Terminal />
      <Skills />
      <Experience />
    </div>
  );
}
