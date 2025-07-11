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
        className="mx-auto h-auto lg:h-[700px] py-20 mt-0 sm:my-[150px] p-6 lg:py-0"
        id={NAVIGATION_NAMES.PRINCIPLES}
      >
        <div className="flex lg:grid flex-row flex-wrap h-full grid-cols-3 grid-rows-6 lg:gap-4 gap-3 sm:gap-1">
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
      className={`group flex flex-col w-fit lg:w-auto items-center justify-center rounded-xl border-2 border-neutral-200 transition hover:border-neutral-300 hover:shadow-sm ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
