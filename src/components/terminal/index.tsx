import { motion } from 'motion/react';
import { FiMaximize2 } from 'react-icons/fi';
import { GoDash } from 'react-icons/go';
import { IoClose } from 'react-icons/io5';
import { type IconType } from 'react-icons/lib';

import Content from './content';
import 'src/styles/general-pattern.scss';
import ShadowBox from '../shadow-box';
import { NAVIGATION_NAMES } from '@/constants/navigation-names';

function TerminalDot({ color, Icon }: { color: string; Icon?: IconType }) {
  const IconComponent = Icon || (() => null);
  return (
    <div
      className={`group flex h-3 w-3 items-center justify-center rounded-full active:scale-95 ${color}`}
    >
      <IconComponent className="text-gray-600 opacity-0 transition group-hover:opacity-70" />
    </div>
  );
}

export default function Terminal() {
  return (
    <div
      className="general-pattern relative bg-gradient-to-br py-[200px]"
      id={NAVIGATION_NAMES.TERMINAL}
    >
      <motion.div className="mx-auto md:w-[600px] rounded-lg shadow-2xl shadow-neutral-200">
        <ShadowBox>
          <header className="relative flex items-center rounded-t-lg bg-neutral-200 px-4 py-2 transition hover:brightness-95">
            <div className="absolute flex items-center gap-2">
              <TerminalDot color="bg-red-400" Icon={IoClose} />
              <TerminalDot color="bg-yellow-400" Icon={GoDash} />
              <TerminalDot color="bg-green-400" Icon={FiMaximize2} />
            </div>
            <p className="mx-auto font-mono opacity-50">Terminal</p>
          </header>
          <div className="rounded-b-lg bg-neutral-100 px-4 py-4">
            <Content />
          </div>
        </ShadowBox>
      </motion.div>
    </div>
  );
}
