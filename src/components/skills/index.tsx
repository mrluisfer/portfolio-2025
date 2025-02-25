import 'src/styles/general-pattern.scss';
import 'src/styles/technologies-shadow.scss';

import { motion } from 'motion/react';

import Technologies from './technologies';

export default function Skills() {
  return (
    <div className="general-pattern technologies-shadow-y my-6 p-10">
      <div className="relative mx-auto flex max-w-[700px] justify-center text-center text-3xl">
        <motion.h1
          className="absolute -top-[30px] z-20 font-semibold drop-shadow-2xl"
          initial={{ opacity: 0.8 }}
          whileInView={{ opacity: 1 }}
        >
          Building projects with the most powerful and trending frontend and backend technologies.
        </motion.h1>
      </div>
      <Technologies />
    </div>
  );
}
