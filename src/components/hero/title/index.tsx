import { motion } from 'framer-motion';
import { useState, type MouseEvent } from 'react';
import FirstName from './first-name.tsx';
import LastName from './last-name.tsx';

type Rotate = {
  x: number;
  y: number;
};

export default function Title() {
  const [rotate, setRotate] = useState<Rotate>({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    const rotateSensitive = 10;
    const x = (innerWidth / 2 - clientX) / rotateSensitive;
    const y = (innerHeight / 2 - clientY) / rotateSensitive;

    setRotate({
      x,
      y,
    });
  };

  const handleResetCoordinates = () => {
    setRotate({
      x: 0,
      y: 0,
    });
  };

  return (
    <div className="flex items-center justify-center pt-[64px]">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleResetCoordinates}
        className="flex flex-col items-center px-5 font-bold tracking-wide uppercase transition will-change-transform select-none"
        initial={{ rotateX: 0, rotateY: 0, scale: 1 }}
        animate={{ rotateX: rotate.x, rotateY: rotate.y }}
        whileHover={{ scale: 1.1, gap: '2.2rem' }}
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
