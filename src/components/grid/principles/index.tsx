import { useHover } from '@/hooks/use-hover';
import Lottie from 'lottie-react';
import { motion } from 'motion/react';
import { type Principle as TPrinciple, principles } from './principles-list';

export default function Principles() {
  const [ref, isHover] = useHover<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      className="w-full bg-gradient-to-r from-blue-300/20 to-purple-300/20 flex-1 p-2 rounded-[inherit] relative"
    >
      <motion.div
        className="bg-neutral-900 hover:shadow-xl text-white rounded-2xl px-2 py-1 text-xs w-fit will-change-[box-shadow] absolute top-[2px] left-2 z-10"
        animate={{
          opacity: isHover ? 1 : 0,
          translateY: isHover ? 5 : 0,
        }}
      >
        Principles
      </motion.div>
      <ul className="flex flex-wrap gap-4 justify-start items-end pt-4">
        {principles.map((principle, index) => (
          <Principle key={index} principle={principle} />
        ))}
      </ul>
    </motion.div>
  );
}

function Principle({ principle }: { principle: TPrinciple }) {
  const [ref, isHover] = useHover<HTMLLIElement>();

  const { title, icon, description, color } = principle!;
  const opacityColorFormatted = `${color}4D`; // 30% opacity
  const shadow = `0 0 60px ${opacityColorFormatted}`;

  return (
    <motion.li
      className={`w-[200px] rounded-xl content-center p-1 transition`}
      ref={ref}
      animate={{
        background: isHover ? opacityColorFormatted : '#0000000',
        boxShadow: isHover ? shadow : 'none',
      }}
    >
      <motion.span>
        <div className="w-8 h-7">
          <Lottie animationData={icon} />
        </div>
      </motion.span>
      <motion.h3
        className="transition will-change-[font-weight] text-base"
        animate={{
          letterSpacing: isHover ? '0.03em' : '0.01em',
        }}
      >
        {title}
      </motion.h3>
      <p className="text-sm opacity-80 hover:opacity-100 transition-opacity">{description}</p>
    </motion.li>
  );
}
