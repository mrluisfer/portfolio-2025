import Lottie, { type LottieRefCurrentProps } from 'lottie-react';
import { motion } from 'motion/react';
import { type ReactNode, useRef } from 'react';
import { TbBrandGithubFilled } from 'react-icons/tb';
import linkAnimationData from '../../../lotties/link.json';

const START_YEAR = 2021;

export default function Sharing() {
  const logoRef = useRef<LottieRefCurrentProps>(null);
  const currentYear = new Date().getFullYear();
  const experience = currentYear - START_YEAR;

  return (
    <div
      className={`lg:max-w-auto flex w-full flex-1 flex-col rounded-[inherit] bg-gradient-to-br from-green-100 from-20% to-green-300 p-3 sm:max-w-[350px] lg:max-h-[250px]`}
    >
      <div className="h-fit w-fit rounded-xl bg-[#24292f] p-2 text-2xl text-white shadow-lg transition hover:shadow-xl active:scale-95">
        <TbBrandGithubFilled />
      </div>
      <div className="flex min-h-0 flex-1 flex-col items-start justify-end gap-4">
        <h1 className="group text-xl font-semibold text-[#2b3137]">
          Sharing more than <span className="font-bold text-black">{experience}+ years</span> of
          expertise <Symbol>&lt;</Symbol>
          building projects
          <Symbol>&#47;&gt;</Symbol>
        </h1>
        <button
          className={`flex cursor-pointer items-center gap-2 rounded-xl bg-white p-2 text-sm font-semibold text-green-600 shadow-md transition hover:shadow-lg active:scale-95`}
        >
          <div className="h-7 w-8">
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
    <motion.span className="animate-pulse px-px text-sm font-bold text-neutral-700 opacity-60 transition group-hover:opacity-100">
      {children}
    </motion.span>
  );
}
