'use client';
import { motion } from 'motion/react';

import FocusedOn from '@/app/_components/about/focused-on';
import { NAVIGATION_NAMES } from '@/constants/navigation-names';
import Container from '../../../components/container';

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
          Front-end focused Software Developer
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
