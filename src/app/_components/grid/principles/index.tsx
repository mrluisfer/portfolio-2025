import { useHover } from '@/hooks/use-hover';
import Lottie from 'lottie-react';
import { motion } from 'motion/react';
import { type Principle as TPrinciple, principles } from './principles-list';

export default function Principles() {
  const [ref, isHover] = useHover<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      className="relative w-full flex-1 rounded-[inherit] bg-gradient-to-r from-blue-300/20 to-purple-300/20 p-2 lg:p-0"
    >
      <motion.div
        className="absolute top-[2px] left-2 z-10 w-fit rounded-2xl bg-neutral-900 px-2 py-1 text-xs text-white will-change-[box-shadow] hover:shadow-xl"
        animate={{
          opacity: isHover ? 1 : 0,
          translateY: isHover ? 5 : 0,
        }}
      >
        Principles
      </motion.div>
      <ul className="flex flex-wrap items-end justify-start gap-4 pt-4 lg:pt-8 lg:pl-2">
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
      className={`w-[200px] content-center rounded-xl p-1 transition`}
      ref={ref}
      animate={{
        background: isHover ? opacityColorFormatted : '#0000000',
        boxShadow: isHover ? shadow : 'none',
      }}
    >
      <motion.span>
        <div className="h-7 w-8">
          <Lottie animationData={icon} />
        </div>
      </motion.span>
      <motion.h3
        className="text-base transition will-change-[font-weight]"
        animate={{
          letterSpacing: isHover ? '0.03em' : '0.01em',
        }}
      >
        {title}
      </motion.h3>
      <p className="text-sm opacity-80 transition-opacity hover:opacity-100">{description}</p>
    </motion.li>
  );
}
