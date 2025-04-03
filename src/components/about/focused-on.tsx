import { type MotionStyle, motion } from 'motion/react';
import { type TSpecialty, specialties } from './specialties';

function Specialty({ specialty }: { specialty: TSpecialty }) {
  const Icon = specialty.icon;

  /**
   * this will reset the styles values to 0
   * @example { rotate: 0, top: 0, left: 0 }
   */
  const initialStylesValues = Object.fromEntries(
    Object.keys(specialty.whileInView as MotionStyle).map((key) => [key, 0])
  );

  return (
    <motion.div
      className="absolute z-10 flex items-center gap-1 rounded-lg border-2 px-2 font-semibold text-xl select-none"
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
      whileTap={{
        scale: 1.05,
        filter: 'brightness(1.1)',
      }}
    >
      <span>{<Icon />}</span>
      <span className="">{specialty.text}</span>
    </motion.div>
  );
}

export default function FocusedOn() {
  return (
    <div className="relative inline-block items-center pl-5">
      {specialties.map((specialty, index) => (
        <Specialty specialty={specialty} key={index} />
      ))}
    </div>
  );
}
