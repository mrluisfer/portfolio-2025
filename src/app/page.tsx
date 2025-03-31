import About from '@/components/about';
import Connect from '@/components/connect';
import Grid from '@/components/grid';
import Hero from '@/components/hero';
import Profile from '@/components/profile';
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
      <Profile />
      <Connect />
    </div>
  );
}
