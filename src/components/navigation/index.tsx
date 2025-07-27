'use client';
import Lottie from 'lottie-react';
import homeAnimationData from '@/lotties/home.json';
import { NAVIGATION_NAMES } from '@/constants/navigation-names';
import { motion } from 'motion/react';
import { IoSettingsOutline } from 'react-icons/io5';

const navigationItems = Object.values(NAVIGATION_NAMES);

const goToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export default function Navigation() {
  const handleNavigationClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const targetId = event.currentTarget.getAttribute('href')?.substring(1);
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="fixed right-0 bottom-10 left-0 z-50 hidden justify-center opacity-40 transition-opacity hover:opacity-100 sm:flex">
      <div className="flex h-[64px] w-fit items-center gap-6 rounded-full bg-neutral-900/40 px-4 backdrop-blur-lg">
        <button
          className="relative h-8 w-8 shrink-0 cursor-pointer"
          onClick={goToTop}
          title="Go to top"
          aria-label="Go to top"
        >
          <Lottie animationData={homeAnimationData} loop={true} />
        </button>
        <div className="flex flex-1 items-center">
          <ul className="flex w-full justify-between gap-2 px-3 text-sm text-white">
            {navigationItems.map((item) => (
              <li key={item}>
                <motion.a
                  onClick={handleNavigationClick}
                  href={`#${item}`}
                  className="block w-[90px] rounded-full p-2 text-center capitalize transition hover:scale-105 hover:bg-black active:scale-95"
                >
                  {item}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div
            className="flex cursor-not-allowed items-center justify-center rounded-full bg-neutral-300/50 p-1 text-xl text-white transition hover:bg-neutral-300/70"
            title="Coming soon..."
          >
            <IoSettingsOutline width={32} height={32} />
          </div>
        </div>
      </div>
    </div>
  );
}
