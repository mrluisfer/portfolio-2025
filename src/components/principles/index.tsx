'use client';

import { ReactNode } from 'react';
import Container from '../container';
import Experience from './experience';

function Card({ children, className = '' }: { children: ReactNode; className: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl border-2 border-neutral-200 group hover:border-neutral-300 transition hover:shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

export default function Principles() {
  return (
    <Container asChild>
      <div className="py-20 h-[700px] mx-auto">
        <div>Principles</div>
        <div className="grid grid-cols-3 grid-rows-6 gap-4 h-full">
          <Card className="col-span-2 row-span-3">5</Card>
          <Card className="row-span-4 col-start-3">
            <Experience />
          </Card>
          <Card className="row-span-3 row-start-4">7</Card>
          <Card className="col-span-2 row-span-2 col-start-2 row-start-5">8</Card>
          <Card className="col-start-2 row-start-4">9</Card>
        </div>
      </div>
    </Container>
  );
}
