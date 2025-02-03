import { motion } from 'framer-motion';
import { useState, type MouseEvent } from 'react';

type Rotate = {
  x: number;
  y: number;
};

export default function Title() {
  const [rotate, setRotate] = useState<Rotate>({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    const x = (innerWidth / 2 - clientX) / 3;
    const y = (innerHeight / 2 - clientY) / 3;

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
      <motion.p
        onMouseMove={handleMouseMove}
        onMouseLeave={handleResetCoordinates}
        className="flex items-center gap-4 text-9xl font-bold tracking-wide uppercase will-change-transform select-none"
        initial={{ rotateX: 0, rotateY: 0, scale: 1 }}
        animate={{ rotateX: rotate.x, rotateY: rotate.y }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        style={{
          perspective: '1000px',
        }}
      >
        <motion.span className="hover:text-blue-500">L</motion.span>
        <motion.span>U</motion.span>
        <motion.span>I</motion.span>
        <motion.span>S</motion.span>
      </motion.p>
    </div>
  );
}
