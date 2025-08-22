import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Timeline, TimelineContent, TimelineDate, TimelineItem } from '@/components/ui/timeline';

const oldPosts = [
  {
    url: 'https://dev.to/mrluisfer/configurar-eslint-prettier-junto-con-vscode-3h00',
    date: 'May 24, 2021',
    title: 'Config Eslint and Prettier with VSCode',
    coverImg: '/posts/eslint.png',
    stack: ['webdev', 'vscode', 'javascript', 'prettier', 'eslint'],
    id: 1,
    description:
      'A guide on how to configure ESLint and Prettier in VSCode for a better development experience.',
  },
  {
    url: 'https://dev.to/mrluisfer/rutas-relativas-en-javascript-utilizando-vscode-5c7f',
    date: 'May 22, 2021',
    title: 'Relative Paths in JavaScript Using VSCode',
    coverImg: '/posts/aliases.png',
    stack: ['vscode', 'javascript', 'typescript', 'react'],
    id: 2,
    description: 'A guide on how to use relative paths in JavaScript with VSCode.',
  },
  {
    url: 'https://dev.to/mrluisfer/mis-temas-preferidos-vscode-41j',
    date: 'Jun 24, 2021',
    title: 'My Favorite Themes for VSCode',
    coverImg: '/posts/vscode.png',
    stack: ['webdev', 'vscode', 'javascript', 'prettier', 'eslint'],
    id: 3,
    description: 'A guide on my favorite themes for VSCode.',
  },
];

export default function ProjectPosts() {
  return (
    <section className="px-6 pb-12 sm:px-10">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-medium text-neutral-900">Writings & Posts</h2>
        <Button asChild size={'sm'}>
          <Link href="https://dev.to/mrluisfer" rel="noopener noreferrer" target="_blank">
            View all <ExternalLink size={14} />
          </Link>
        </Button>
      </div>
      <div className="flex h-24 items-center justify-center rounded-lg border border-dashed bg-neutral-50/60 text-neutral-500 capitalize">
        internal API in progress...
      </div>
      <div className="mt-2 flex items-center justify-center gap-1 text-sm text-neutral-500">
        <p>You can read my old posts on</p>
        <Button asChild variant={'link'}>
          <Link href={'https://dev.to/mrluisfer'} target="_blank" rel="noopener noreferrer">
            Dev.to
          </Link>
        </Button>
      </div>
      <div className="mx-auto mt-4 flex max-w-lg items-center justify-center">
        <Timeline className="divide-y rounded-lg border">
          {oldPosts.map((item) => (
            <Link href={item.url} key={item.id}>
              <TimelineItem
                key={item.id}
                step={item.id}
                className="m-0! px-4! py-3! transition-all hover:bg-neutral-100"
              >
                <TimelineContent className="text-foreground">
                  {item.description}
                  <TimelineDate className="mt-1">{item.date}</TimelineDate>
                </TimelineContent>
              </TimelineItem>
            </Link>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
