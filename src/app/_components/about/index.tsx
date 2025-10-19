'use client';
import { motion } from 'motion/react';

import FocusedOn from '@/app/_components/about/focused-on';
import { NAVIGATION_NAMES } from '@/constants/navigation-names';
import Container from '../../../components/container';
import Lottie from 'lottie-react';
import craft from '@/lotties/craft.json';
import { LayoutDashboardIcon, ServerIcon } from 'lucide-react';

export default function About() {
  return (
    <Container asChild>
      <div
        className="h-[450px] text-center sm:h-auto sm:py-[100px] md:py-[200px]"
        id={NAVIGATION_NAMES.ABOUT}
      >
        <span className="text-2xl opacity-60">👋 Hey, I'm Luis Alvarez</span>
        <motion.div
          className="my-4 text-5xl font-semibold"
          initial={{
            opacity: 0.5,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.9,
          }}
        >
          <p className={'font-bold'}>Full Stack Developer</p>
          <p className={'flex mt-1 flex-wrap items-start gap-2 justify-center text-lg'}>
            <div className={'flex items-center'}>
              <div className="h-7 w-8">
                <Lottie animationData={craft} />
              </div>
              Crafting
            </div>{' '}
            both
            <span className={'flex gap-1 items-center text-yellow-400'}>
              <LayoutDashboardIcon />
              Front-end
            </span>{' '}
            and
            <span className={'flex gap-1 items-center text-violet-400'}>
              <ServerIcon />
              Back-end
            </span>{' '}
            solutions
          </p>
        </motion.div>
        <span className="mx-auto block w-[350px] text-lg font-medium opacity-70 sm:w-[400px] lg:w-[800px] lg:text-3xl">
          specialized in designing and building scalable, maintainable, user-centric web apps
          focused on
        </span>
        <FocusedOn />
      </div>
    </Container>
  );
}
