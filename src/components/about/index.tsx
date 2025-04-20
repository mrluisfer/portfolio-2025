import { motion } from 'motion/react';

import FocusedOn from '@/components/about/focused-on';
import Container from '../container';
import { NAVIGATION_NAMES } from '@/constants/navigation-names';

export default function About() {
  return (
    <Container asChild>
      <div className="md:py-[200px] sm:py-[100px] text-center" id={NAVIGATION_NAMES.ABOUT}>
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
        <span className="text-lg lg:text-3xl font-medium opacity-70 block w-[400px] lg:w-[800px] mx-auto">
          specialized in designing and building scalable, maintainable, user-centric web apps
          focused on
        </span>
        <FocusedOn />
      </div>
    </Container>
  );
}
