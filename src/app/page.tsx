'use client';

import About from '@/components/about';
import Hero from '@/components/hero';
import Principles from '@/components/principles';
import Skills from '@/components/skills';
import Terminal from '@/components/terminal';

export default function AppPage() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <About />
      <Terminal />
      <Skills />
      <Principles />
    </div>
  );
}
