'use client';
import { Project } from './project';
import Container from '../container';
import Title from '../title';
import clsx from 'clsx';

import { NAVIGATION_NAMES } from '@/constants/navigation-names';
import { projects } from './projects-list';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import Link from 'next/link';

export function Projects() {
  return (
    <Container>
      <div id={NAVIGATION_NAMES.PROJECTS} className="mt-36">
        <div>
          <Title>
            <h1>My Projects</h1>
          </Title>
          <motion.span
            className="block text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            I'm currently working on
          </motion.span>
        </div>
        <div className="relative overflow-hidden pt-20">
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-10 bg-gradient-to-r from-white via-white/70 to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-10 bg-gradient-to-l from-white via-white/70 to-transparent" />

          <motion.div
            className="flex gap-6 active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: -1300, right: 0 }}
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            whileTap={{ cursor: 'grabbing' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                className={clsx(
                  'flex-shrink-0',
                  index === 0 && 'ml-10',
                  index === projects.length - 1 && 'mr-10'
                )}
              >
                <Project project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="mt-8 flex items-center justify-center">
          <Button asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}
