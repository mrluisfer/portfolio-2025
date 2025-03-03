'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';
import Container from '../container';
import Experience from './experience';
import Sharing from './sharing';
import Principles from './principles';

export default function Grid() {
  return (
    <Container asChild>
      <div className="mx-auto h-[700px] py-20 mt-[150px]">
        <div className="grid h-full grid-cols-3 grid-rows-6 gap-4">
          <Card className="col-span-2 row-span-3">
            <Principles />
          </Card>
          <Card className="col-start-3 row-span-4">
            <Experience />
          </Card>
          <Card className="row-span-3 row-start-4">
            <Sharing />
          </Card>
          <Card className="col-span-2 col-start-2 row-span-2 row-start-5">8</Card>
          <Card className="col-start-2 row-start-4">9</Card>
        </div>
      </div>
    </Container>
  );
}

function Card({ children, className = '' }: { children: ReactNode; className: string }) {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.03 }}
      className={`group flex flex-col items-center justify-center rounded-xl border-2 border-neutral-200 transition hover:border-neutral-300 hover:shadow-sm ${className}`}
    >
      {children}
    </motion.div>
  );
}
