import About from '@/app/_components/about';
import Connect from '@/app/_components/connect';
import Grid from '@/app/_components/grid';
import Hero from '@/app/_components/hero';
import Navigation from '@/app/_components/navigation';
import Profile from '@/app/_components/profile';
import { Projects } from '@/app/_components/projects';
import { Quote } from '@/app/_components/quote';
import Terminal from '@/app/_components/terminal';
import type { Metadata } from 'next';
import Skills from './_components/skills';

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
      <Quote />
      <Profile />
      <Connect />
      <Navigation />
    </main>
  );
}
