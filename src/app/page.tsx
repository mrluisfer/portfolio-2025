import type { Metadata } from 'next';
import About from '@/components/about';
import Connect from '@/components/connect';
import Grid from '@/components/grid';
import Hero from '@/components/hero';
import Navigation from '@/components/navigation';
import Profile from '@/components/profile';
import { Projects } from '@/components/projects';
import Skills from '@/components/skills';
import Terminal from '@/components/terminal';

export const metadata: Metadata = {
  title: 'Portfolio 2025 - mrluisfer',
  description:
    'Professional portfolio of mrluisfer — frontend and fullstack developer specializing in React, Tailwind, TanStack, and modern technologies.',
  authors: [{ name: 'Luis Fernando Alvarez' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Portfolio 2025 - mrluisfer',
    description:
      'Explore the latest projects, tech stack, and experience of mrluisfer in modern web development.',
    type: 'website',
    url: 'https://mrluisfer.vercel.app',
    images: [
      {
        url: '/projects/portfolio-preview.png',
        width: 1200,
        height: 630,
        alt: 'Portfolio preview of mrluisfer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio 2025 - mrluisfer',
    description:
      'Frontend and fullstack developer building modern solutions with TanStack, React, and more.',
    images: ['/projects/portfolio-preview.png'],
    creator: '@mrluisfer_',
  },
  icons: {
    icon: '/favicon.svg',
  },
  metadataBase: new URL('https://mrluisfer.vercel.app'),
};

export default function HomePage() {
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
