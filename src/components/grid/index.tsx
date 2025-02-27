'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';
import Container from '../container';
import Experience from './experience';
import Sharing from './sharing';

export default function Grid() {
  return (
    <Container asChild>
      <div className="py-20 h-[700px] mx-auto">
        <div>Principles</div>
        <div className="grid grid-cols-3 grid-rows-6 gap-4 h-full">
          <Card className="col-span-2 row-span-3">5</Card>
          <Card className="row-span-4 col-start-3">
            <Experience />
          </Card>
          <Card className="row-span-3 row-start-4">
            <Sharing />
          </Card>
          <Card className="col-span-2 row-span-2 col-start-2 row-start-5">8</Card>
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
      className={`flex flex-col items-center justify-center rounded-xl group transition hover:shadow-sm border-2 border-neutral-200 hover:border-neutral-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
