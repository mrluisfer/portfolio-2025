'use client';

import { Devto, DevtoDark } from '@/assets/icons/allIcons';
import { Button } from '@/components/ui/button';
import { Timeline, TimelineContent, TimelineDate, TimelineItem } from '@/components/ui/timeline';
import { ExternalLink } from 'lucide-react';
import { MotionConfig, motion, useReducedMotion, type Variants } from 'motion/react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

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

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function ProjectPosts() {
  const { theme } = useTheme();
  const prefersReducedMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: prefersReducedMotion ? {} : { staggerChildren: 0.06, delayChildren: 0.08 },
    },
  };

  const itemVariants: Variants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } };

  return (
    <MotionConfig reducedMotion={prefersReducedMotion ? 'always' : 'never'}>
      <section className="px-6 pb-12 sm:px-10">
        {/* Header */}
        <div className="mb-4 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <motion.h2
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="text-base font-medium text-neutral-900 dark:text-neutral-200"
          >
            Writings & Posts
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <Button asChild size="sm" className="gap-1 text-white">
              <Link href="https://dev.to/mrluisfer" rel="noopener noreferrer" target="_blank">
                View all <ExternalLink size={14} />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Banner placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: EASE }}
          className="flex h-24 items-center justify-center rounded-lg border border-dashed bg-neutral-50/70 text-neutral-600 backdrop-blur-[1px] dark:bg-neutral-800/80 dark:text-neutral-400"
        >
          internal API in progress...
        </motion.div>

        {/* Dev.to CTA */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: EASE }}
          className="mt-2 flex flex-wrap items-center justify-center gap-2 text-sm text-neutral-500"
        >
          <p>You can read my old posts on</p>
          <Button asChild variant="outline" size="sm" className="gap-2">
            <Link href="https://dev.to/mrluisfer" target="_blank" rel="noopener noreferrer">
              {theme === 'light' ? <Devto /> : <DevtoDark />}
              Dev.to
            </Link>
          </Button>
        </motion.div>

        {/* Timeline (siempre visible y animada on mount) */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="mx-auto mt-4 w-full max-w-2xl"
        >
          <Timeline className="divide-y rounded-xl border border-neutral-200/70 bg-white/60 shadow-sm backdrop-blur-sm dark:border-neutral-800/70 dark:bg-neutral-900/40">
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="contents"
            >
              {oldPosts.map((item) => (
                <li key={item.id} className="list-none">
                  <Link href={item.url} target="_blank" rel="noopener noreferrer" className="block">
                    <motion.div
                      variants={itemVariants}
                      transition={{ duration: 0.28, ease: EASE }}
                      whileHover={
                        prefersReducedMotion
                          ? undefined
                          : { y: -2, scale: 1.01, transition: { duration: 0.18, ease: EASE } }
                      }
                      whileTap={prefersReducedMotion ? undefined : { scale: 0.995 }}
                      className="transition-all"
                    >
                      <TimelineItem
                        step={item.id}
                        className="m-0! rounded-lg px-4! py-3! hover:bg-neutral-100/70 focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:outline-none dark:hover:bg-neutral-800/80 dark:focus-visible:ring-neutral-600"
                      >
                        <TimelineContent className="text-foreground">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <p className="text-sm text-neutral-700 dark:text-neutral-300">
                                {item.description}
                              </p>
                              <TimelineDate className="mt-1 text-xs text-neutral-500">
                                {item.date}
                              </TimelineDate>
                            </div>

                            <motion.span
                              aria-hidden
                              initial={false}
                              animate={{ rotate: 0 }}
                              whileHover={prefersReducedMotion ? undefined : { rotate: 12 }}
                              transition={{ type: 'tween', duration: 0.25, ease: EASE }}
                              className="shrink-0 rounded-full border border-neutral-200 bg-white/70 p-1 text-neutral-500 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/60"
                            >
                              <ExternalLink size={14} />
                            </motion.span>
                          </div>
                        </TimelineContent>
                      </TimelineItem>
                    </motion.div>
                  </Link>
                </li>
              ))}
            </motion.ul>
          </Timeline>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
