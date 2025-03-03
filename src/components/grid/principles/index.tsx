import { useState } from 'react';
import { principles, Principle as TPrinciple } from './principles-list';
import { motion } from 'motion/react';
import { useHover } from '@/hooks/use-hover';

export default function Principles() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-300 to-purple-300 flex-1 p-4 rounded-[inherit]">
      <div className="bg-neutral-900 hover:shadow-xl text-white rounded-2xl px-2 py-1 text-xs w-fit transition-shadow will-change-[box-shadow]">
        Principles
      </div>
      <ul className="flex flex-wrap gap-4 justify-between items-end">
        {principles.map((principle, index) => (
          <Principle key={index} principle={principle} />
        ))}
      </ul>
    </div>
  );
}

function Principle({ principle }: { principle: TPrinciple }) {
  const [ref, isHover] = useHover<HTMLLIElement>();

  const { title, icon, description, color } = principle!;
  const opacityColorFormatted = `${color}4D`; // 30% opacity
  const shadow = `0 0 60px ${opacityColorFormatted}`;

  return (
    <motion.li className={`w-[200px] transition bg-neutral-400/5`} ref={ref}>
      <motion.div
        className="rounded-xl content-center p-1"
        animate={{
          background: isHover ? opacityColorFormatted : '#00000000',
          boxShadow: isHover ? shadow : 'none',
        }}
      >
        <motion.span>{icon}</motion.span>
        <motion.h3
          className="text-lg transition will-change-[font-weight]"
          animate={{ letterSpacing: isHover ? '0.03em' : '0.01em' }}
        >
          {title}
        </motion.h3>
        <p className="text-sm opacity-80 hover:opacity-100 transition-opacity">{description}</p>
      </motion.div>
    </motion.li>
  );
}
