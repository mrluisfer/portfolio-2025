import { useState, useEffect, type ReactNode } from 'react';
import { motion } from 'motion/react';

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r}, ${g}, ${b}, 0.5)`;
};

const ShadowBox = ({ children, className }: { children: ReactNode; className?: string }) => {
  const [shadowColor1, setShadowColor1] = useState(getRandomColor());
  const [shadowColor2, setShadowColor2] = useState(getRandomColor());

  useEffect(() => {
    const interval = setInterval(() => {
      setShadowColor1(getRandomColor());
      setShadowColor2(getRandomColor());
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className={`relative rounded-lg bg-white dark:bg-gray-900 transition-all duration-500 opacity-75 ${className}`}
      style={{
        boxShadow: `10px 10px 30px ${shadowColor1}, -10px -10px 30px ${shadowColor2}`,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ShadowBox;
