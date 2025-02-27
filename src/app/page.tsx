import About from '@/components/about';
import Grid from '@/components/grid';
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
      <Grid />
    </div>
  );
}
