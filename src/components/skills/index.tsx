import 'src/styles/general-pattern.scss';
import 'src/styles/technologies-shadow.scss';

import { motion } from 'motion/react';

import Container from '../container';
import Technologies from './technologies';
import { NAVIGATION_NAMES } from '@/constants/navigation-names';
import Title from '../title';

export default function Skills() {
  return (
    <Container>
      <div className="general-pattern technologies-shadow-y my-6 p-10" id={NAVIGATION_NAMES.SKILLS}>
        <Title>
          <motion.h1
            className="absolute -top-[30px] z-20 drop-shadow-2xl"
            initial={{ opacity: 0.8 }}
            whileInView={{ opacity: 1 }}
          >
            Building projects with the most powerful and trending frontend and backend technologies.
          </motion.h1>
        </Title>
        <Technologies />
      </div>
    </Container>
  );
}
