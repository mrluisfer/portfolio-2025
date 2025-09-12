'use client';
import Navigation from '@/app/_components/navigation';
import ProjectHeader from './_components/project-header';
import ProjectHero from './_components/project-hero';
import ProjectPosts from './_components/project-posts';
import ProjectTimeline from './_components/project-timeline';
import Projects from './_components/projects';

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-neutral-50 pt-10 pb-16 xl:pb-32 dark:bg-neutral-900">
      <div className="mx-auto w-full max-w-5xl rounded-3xl bg-white shadow-sm ring-1 ring-black/5 dark:bg-neutral-950">
        <ProjectHeader />
        <ProjectHero />
        <Projects />
        <ProjectTimeline />
        <ProjectPosts />
      </div>
      <Navigation />
    </main>
  );
}
