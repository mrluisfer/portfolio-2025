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
  return (
    <div className="fixed bottom-10 left-0 right-0 flex justify-center z-50 opacity-40 hover:opacity-100 transition-opacity">
      <div className="flex items-center bg-neutral-900/40 backdrop-blur-sm rounded-full w-fit h-[64px] px-4 gap-6">
        <button
          className="relative w-10 h-10 shrink-0 cursor-pointer"
          onClick={goToTop}
          title="Go to top"
          aria-label="Go to top"
        >
          <Lottie animationData={homeAnimationData} loop={true} />
        </button>
        <div className="flex-1 flex items-center">
          <ul className="flex justify-between w-full text-white text-sm px-3 gap-2">
            {navigationItems.map((item) => (
              <li key={item}>
                <motion.a
                  href={`#${item}`}
                  className="capitalize hover:bg-black p-4 rounded-full w-[95px] text-center transition hover:scale-105 active:scale-95"
                >
                  {item}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div
            className="text-white text-xl bg-neutral-300/50 cursor-not-allowed rounded-full p-2"
            title="Coming soon..."
          >
            <IoSettingsOutline />
          </div>
        </div>
      </div>
    </div>
  );
}
