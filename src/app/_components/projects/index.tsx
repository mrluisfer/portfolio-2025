'use client';
import Container from '../../../components/container';
import Title from '../../../components/title';
import { Project } from './project';

import { NAVIGATION_NAMES } from '@/constants/navigation-names';
import { FolderRootIcon } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { projects } from './projects-list';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

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

        <Carousel className={'mx-auto mt-5 w-full md:max-w-4xl'}>
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.name}>
                <Project project={project} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="mt-8 flex items-center justify-center">
          <Button asChild className="text-white" size={'lg'}>
            <Link href="/projects">
              <FolderRootIcon />
              View All Projects
            </Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}
