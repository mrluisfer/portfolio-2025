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
    <div className="hidden fixed bottom-10 left-0 right-0 sm:flex justify-center z-50 opacity-40 hover:opacity-100 transition-opacity">
      <div className="flex items-center bg-neutral-900/40 backdrop-blur-lg rounded-full w-fit h-[64px] px-4 gap-6">
        <button
          className="relative w-8 h-8 shrink-0 cursor-pointer"
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
                  onClick={handleNavigationClick}
                  href={`#${item}`}
                  className="capitalize block hover:bg-black p-2 rounded-full w-[90px] text-center transition hover:scale-105 active:scale-95"
                >
                  {item}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div
            className="text-white text-xl bg-neutral-300/50 cursor-not-allowed rounded-full p-1 flex items-center justify-center hover:bg-neutral-300/70 transition"
            title="Coming soon..."
          >
            <IoSettingsOutline width={32} height={32} />
          </div>
        </div>
      </div>
    </div>
  );
}
