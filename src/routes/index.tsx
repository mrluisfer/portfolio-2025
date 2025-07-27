import About from '@/components/about';
import Connect from '@/components/connect';
import Grid from '@/components/grid';
import Hero from '@/components/hero';
import Navigation from '@/components/navigation';
import Profile from '@/components/profile';
import { Projects } from '@/components/projects';
import Skills from '@/components/skills';
import Terminal from '@/components/terminal';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Terminal />
      <Skills />
      <Projects />
      <Grid />
      <Profile />
      <Connect />
      <Navigation />
    </main>
  );
}
