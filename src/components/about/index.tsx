import { motion } from 'motion/react';

import FocusedOn from '@/components/about/focused-on';

export default function About() {
  return (
    <div className="px-10 py-24">
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
      <div className="max-w-[750px]">
        <span className="text-2xl font-medium opacity-70">
          specialized in designing and building scalable, maintainable, user-centric web apps
          focused on
        </span>
        <FocusedOn />
      </div>
    </div>
  );
}
