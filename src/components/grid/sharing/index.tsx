import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { motion } from 'motion/react';
import { ReactNode, useRef } from 'react';
import { TbBrandGithubFilled } from 'react-icons/tb';
import linkAnimationData from '../../../lotties/link.json';

const START_YEAR = 2021;

export default function Sharing() {
  const logoRef = useRef<LottieRefCurrentProps>(null);
  const currentYear = new Date().getFullYear();
  const experience = currentYear - START_YEAR;

  return (
    <div
      className={`bg-gradient-to-br from-green-100 to-green-300 from-20% rounded-[inherit] flex-1 flex flex-col p-3`}
    >
      <div className="bg-[#24292f] text-2xl active:scale-95 p-2 rounded-xl w-fit h-fit text-white hover:shadow-xl shadow-lg transition">
        <TbBrandGithubFilled />
      </div>
      <div className="flex flex-col gap-4 items-start justify-end min-h-0 flex-1">
        <h1 className="font-semibold text-xl group text-[#2b3137]">
          Sharing more than <span className="font-bold text-black">{experience}+ years</span> of
          expertise <Symbol>&lt;</Symbol>
          building projects
          <Symbol>&#47;&gt;</Symbol>
        </h1>
        <button
          className={`bg-white text-green-600 p-2 rounded-xl font-semibold flex items-center gap-2 cursor-pointer shadow-md hover:shadow-lg active:scale-95 text-sm transition`}
        >
          <div className="w-8 h-7">
            <Lottie lottieRef={logoRef} animationData={linkAnimationData} />
          </div>
          See my projects
        </button>
      </div>
    </div>
  );
}

function Symbol({ children }: { children: ReactNode }) {
  return (
    <motion.span className="px-px font-bold opacity-60 text-neutral-700 text-sm group-hover:opacity-100 transition animate-pulse">
      {children}
    </motion.span>
  );
}
