import { MotionStyle, TargetAndTransition, motion } from 'motion/react';
import { JSX } from 'react';
import { CgDesignmodo } from 'react-icons/cg';
import { FaRocket } from 'react-icons/fa6';
import { IoAccessibility } from 'react-icons/io5';
import { SiFireship } from 'react-icons/si';

type TSpecialty = {
  text: string;
  icon: JSX.Element;
  styles: MotionStyle;
  whileInView?: TargetAndTransition;
};

const specialties: TSpecialty[] = [
  {
    text: 'performance',
    icon: <FaRocket />,
    styles: {
      borderColor: '#D97706',
      background: '#FBBF24',
      color: '#92400E',
    },
    whileInView: {
      rotate: '-10deg',
      top: '-75px',
    },
  },
  {
    text: 'accessibility',
    icon: <IoAccessibility />,
    styles: {
      borderColor: '#047857',
      background: '#34D399',
      color: '#065F46',
    },
    whileInView: {
      rotate: '5deg',
      top: '-10px',
    },
  },
  {
    text: 'UI/UX',
    icon: <CgDesignmodo />,
    styles: {
      borderColor: '#2563EB',
      background: '#93C5FD',
      color: '#1E40AF',
    },
    whileInView: {
      rotate: '15deg',
      top: '-25px',
      left: '120px',
    },
  },
  {
    text: 'trends',
    icon: <SiFireship />,
    styles: {
      borderColor: '#DC2626',
      background: '#F87171',
      color: '#7F1D1D',
    },
    whileInView: {
      rotate: '25deg',
      left: '-30px',
      bottom: '-35px',
    },
  },
];

function Speciality({ specialty }: { specialty: TSpecialty }) {
  /**
   * this will reset the styles values to 0
   * @example { rotate: 0, top: 0, left: 0 }
   */
  const initialStylesValues = Object.fromEntries(
    Object.keys(specialty.whileInView as MotionStyle).map((key) => [key, 0])
  );

  return (
    <motion.div
      className="absolute z-10 flex items-center gap-1 rounded-lg border-2 px-2 font-semibold text-xl"
      initial={initialStylesValues}
      style={{ border: '2px solid', ...specialty.styles }}
      whileInView={{
        scale: 1.1,
        ...specialty.whileInView,
      }}
      whileHover={{
        scale: 1.15,
        filter: 'brightness(1.05)',
      }}
    >
      <span>{specialty.icon}</span>
      <span className="">{specialty.text}</span>
    </motion.div>
  );
}

export default function FocusedOn() {
  return (
    <div className="relative inline-block items-center pl-5">
      {specialties.map((specialty, index) => (
        <Speciality specialty={specialty} key={index} />
      ))}
    </div>
  );
}
