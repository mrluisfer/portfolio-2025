'use client';
import * as React from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectHeader from './_components/project-header';
import ProjectTimeline from './_components/project-timeline';
import ProjectHero from './_components/project-hero';
import Projects from './_components/projects';
import ProjectPosts from './_components/project-posts';

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-neutral-50 py-10">
      <div className="mx-auto w-full max-w-5xl rounded-3xl bg-white shadow-sm ring-1 ring-black/5">
        <ProjectHeader />
        <ProjectHero />
        <Projects />
        <ProjectTimeline />
        <ProjectPosts />
      </div>
    </main>
  );
}
