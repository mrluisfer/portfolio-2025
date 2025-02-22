import { FiMaximize2 } from 'react-icons/fi';
import { GoDash } from 'react-icons/go';
import { IoClose } from 'react-icons/io5';
import { IconType } from 'react-icons/lib';

import Content from './content';

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
    <div className="terminal-pattern relative bg-gradient-to-br py-[200px]">
      <div className="mx-auto w-[600px]">
        <div className="relative flex items-center rounded-t-lg bg-gray-200 px-4 py-2 transition hover:bg-gray-300">
          <div className="absolute flex items-center gap-2">
            <TerminalDot color="bg-red-400" Icon={IoClose} />
            <TerminalDot color="bg-yellow-400" Icon={GoDash} />
            <TerminalDot color="bg-green-400" Icon={FiMaximize2} />
          </div>
          <p className="mx-auto font-mono opacity-50">Terminal</p>
        </div>
        <div className="rounded-b-lg bg-gray-100 px-4 py-4">
          <Content />
        </div>
      </div>
    </div>
  );
}
