'use client';
import { type HTMLMotionProps, motion } from 'motion/react';
import { type ReactNode } from 'react';
import Container from '../container';
import Experience from './experience';
import Phrase from './phrase';
import Principles from './principles';
import Sharing from './sharing';
import { NAVIGATION_NAMES } from '@/constants/navigation-names';
import Title from '../title';

export default function Grid() {
  return (
    <Container asChild>
      <div
        className="mx-auto mt-0 h-auto p-6 py-20 sm:my-[150px] lg:h-[700px] lg:py-0"
        id={NAVIGATION_NAMES.PRINCIPLES}
      >
        <div className="flex h-full grid-cols-3 grid-rows-6 flex-row flex-wrap gap-3 sm:gap-1 lg:grid lg:gap-4">
          <Card
            className="col-span-2 row-span-3"
            initial={{
              x: -50,
            }}
            animate={{
              x: 0,
            }}
          >
            <Principles />
          </Card>
          <Card
            className="col-start-3 row-span-4 w-full sm:w-auto"
            initial={{
              y: -50,
            }}
            animate={{
              y: 0,
            }}
          >
            <Experience />
          </Card>
          <Card
            className="row-span-3 row-start-4"
            initial={{
              y: 50,
            }}
            animate={{
              y: 0,
            }}
          >
            <Sharing />
          </Card>
          <Card className="col-start-2 row-start-4 w-full sm:w-auto">
            <Phrase />
          </Card>
        </div>
      </div>
    </Container>
  );
}

type CardProps = HTMLMotionProps<'div'> & { children: ReactNode; className: string };
function Card({ children, className = '', ...props }: CardProps) {
  return (
    <motion.div
      initial={{ scale: 1, ...(typeof props.initial === 'object' ? props.initial : {}) }}
      whileHover={{ scale: 1.03 }}
      className={`group flex w-fit flex-col items-center justify-center rounded-xl border-2 border-neutral-200 transition hover:border-neutral-300 hover:shadow-sm lg:w-auto ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
