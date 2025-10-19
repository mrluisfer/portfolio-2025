import Lottie, { type LottieRefCurrentProps } from 'lottie-react';
import { motion } from 'motion/react';
import { type ReactNode, useRef } from 'react';
import { TbBrandGithubFilled } from 'react-icons/tb';
import linkAnimationData from '../../../../lotties/link.json';
import Link from 'next/link';
import socialMediaLinks from '@/constants/social-media-links';
import { Kbd } from '@/components/ui/kbd';

const START_YEAR = 2021;

export default function Sharing() {
  const logoRef = useRef<LottieRefCurrentProps>(null);
  const currentYear = new Date().getFullYear();
  const experience = currentYear - START_YEAR;

  return (
    <div
      className={`lg:max-w-auto flex w-full flex-1 flex-col rounded-[inherit] bg-gradient-to-br from-green-100 from-20% to-green-300 p-3 sm:max-w-[350px] lg:max-h-none`}
    >
      <Link
        href={socialMediaLinks.GITHUB}
        target={'_blank'}
        rel="noopener noreferrer"
        className="h-fit w-fit rounded-xl bg-[#24292f] p-2 text-2xl text-white shadow-lg transition hover:shadow-xl active:scale-95"
      >
        <TbBrandGithubFilled />
      </Link>
      <div className="flex min-h-0 flex-1 flex-col items-start justify-end gap-4">
        <h1 className="group text-xl font-semibold text-[#2b3137]">
          Sharing more than <span className="font-bold text-black">{experience}+ years</span> of
          expertise{' '}
          <Kbd className={'text-green-600 dark:text-green-100'}>
            &lt; building projects &#47;&gt;
          </Kbd>
        </h1>
        <button
          className={`flex w-full flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-white p-2 text-sm font-semibold text-green-600 shadow-md transition hover:shadow-lg active:scale-95 md:w-auto md:flex-none`}
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
