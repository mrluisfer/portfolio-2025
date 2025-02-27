'use client';

import { motion } from 'framer-motion';
import { type MouseEvent, useEffect, useState } from 'react';
import FirstName from './first-name';
import LastName from './last-name';

type Rotate = {
  x: number;
  y: number;
};

export default function Title() {
  const [rotate, setRotate] = useState<Rotate>({ x: 0, y: 0 });
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotate((prev) => {
        const newX = prev.x + 0.2 * direction;
        if (newX > 5 || newX < -5) setDirection(-direction);
        return { x: newX, y: prev.y };
      });
    }, 50);

    return () => clearInterval(interval);
  }, [direction]);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    const rotateSensitive = 10;
    const x = (innerWidth / 2 - clientX) / rotateSensitive;
    const y = (innerHeight / 2 - clientY) / rotateSensitive;

    setRotate({ x, y });
  };

  return (
    <div className="flex items-center justify-center pt-[85px]">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex flex-col items-center px-5 font-bold tracking-wide uppercase transition will-change-transform select-none"
        initial={{ rotateX: 0, rotateY: 0, scale: 1 }}
        animate={{
          rotateX: rotate.x,
          rotateY: rotate.y,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
        style={{
          perspective: '1000px',
          gap: '2rem',
        }}
      >
        <FirstName />
        <LastName />
      </motion.div>
    </div>
  );
}
