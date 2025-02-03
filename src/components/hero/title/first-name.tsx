import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { RemixiconComponentType, RiCodeAiFill, RiMusicAiLine } from '@remixicon/react';
import { RiGameLine } from 'react-icons/ri';
import PixelPerfect from '../../../assets/icons/pixel-perfect.tsx';
import { RxSpeakerLoud } from 'react-icons/rx';

function Letter({
  children,
  icon,
  hoveredColor,
  className = '',
}: {
  children: ReactNode;
  icon: RemixiconComponentType;
  hoveredColor?: string;
  className?: string;
}) {
  const Icon = icon;
  return (
    <motion.span
      className={`group flex flex-col items-center justify-center uppercase ${className}`}
      whileHover={{ color: hoveredColor }}
    >
      <motion.span
        className="opacity-0 transition group-hover:opacity-100"
        initial={{ rotateX: '45deg' }}
        animate={{ rotateX: '0' }}
      >
        {<Icon size={25} color={hoveredColor} />}
      </motion.span>
      {children}
    </motion.span>
  );
}

function SpeakerName() {
  return (
    <motion.div
      className="absolute top-12 -right-5 -rotate-12 transition cursor-pointer"
      style={{
        opacity: 0.3,
        scale: 1,
      }}
      whileHover={{
        scale: 1.1,
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <RxSpeakerLoud size={20} />
    </motion.div>
  );
}

export default function FirstName() {
  return (
    <motion.div
      className="relative flex items-center text-9xl"
      style={{
        gap: '1rem',
      }}
      whileHover={{ gap: '2rem' }}
    >
      <SpeakerName />
      <Letter icon={RiCodeAiFill} hoveredColor="#074799">
        L
      </Letter>
      <Letter icon={RiGameLine} hoveredColor="#FF7F3E">
        U
      </Letter>
      <Letter icon={RiMusicAiLine} hoveredColor="#8B5DFF">
        I
      </Letter>
      <Letter hoveredColor="#118B50" icon={PixelPerfect as RemixiconComponentType}>
        S
      </Letter>
    </motion.div>
  );
}
