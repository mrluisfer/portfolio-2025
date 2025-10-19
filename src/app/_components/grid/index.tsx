'use client';
import { NAVIGATION_NAMES } from '@/constants/navigation-names';
import { type HTMLMotionProps, motion } from 'motion/react';
import { type ReactNode } from 'react';
import Container from '../../../components/container';
import Experience from './experience';
import Phrase from './phrase';
import Principles from './principles';
import Sharing from './sharing';

export default function Grid() {
  return (
    <Container asChild>
      <div
        id={NAVIGATION_NAMES.PRINCIPLES}
        className="mx-auto mt-0 h-auto p-6 py-20 sm:my-[150px] lg:py-0"
      >
        <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-6">
          {/* Principles */}
          <Card className="w-full lg:col-span-2 lg:row-span-3">
            <Principles />
          </Card>

          {/* Experience */}
          <Card className="w-full lg:col-start-3 lg:row-span-4">
            <Experience />
          </Card>

          {/* Sharing */}
          <Card className="w-full lg:row-span-3 lg:row-start-4">
            <Sharing />
          </Card>

          {/* Phrase */}
          <Card className="w-full lg:col-start-2 lg:row-start-4">
            <Phrase />
          </Card>
        </div>
      </div>
    </Container>
  );
}

type CardProps = HTMLMotionProps<'div'> & { children: ReactNode; className?: string };

function Card({ children, className = '', ...props }: CardProps) {
  return (
    <motion.div
      initial={{ scale: 1, ...(typeof props.initial === 'object' ? props.initial : {}) }}
      whileHover={{ scale: 1.03 }}
      className={`group flex w-full flex-col items-center justify-center rounded-xl shadow-sm transition hover:shadow-md lg:w-auto ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
