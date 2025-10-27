'use client';

import { NAVIGATION_NAMES } from '@/constants/navigation-names';
import homeAnimationData from '@/lotties/home.json';
import Lottie from 'lottie-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const navigationItems = Object.values(NAVIGATION_NAMES);

export default function Navigation() {
  const [reducedMotion, setReducedMotion] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener?.('change', update);
    return () => mq.removeEventListener?.('change', update);
  }, []);

  const handleNavigationClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const targetId = event.currentTarget.getAttribute('href')?.substring(2); // '/#id' -> 'id'
    if (!targetId) return;

    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <nav
      className="fixed inset-x-0 bottom-[env(safe-area-inset-bottom,0px)] mb-4 z-50 flex items-center justify-center px-3 pb-[calc(env(safe-area-inset-bottom,0px)/2)]"
      aria-label="Primary"
      role="navigation"
    >
      {/* Wrapper: móvil = full width; sm+ = pill centrado */}
      <div className="flex w-full max-w-sm sm:max-w-[720px] md:max-w-[800px] lg:max-w-[1000px] items-center gap-3 rounded-2xl border border-white/10 bg-neutral-900/50 px-3 py-2 shadow-lg backdrop-blur-lg backdrop-saturate-150 sm:w-auto sm:gap-6 sm:rounded-full sm:px-4 sm:py-2">
        {/* Home / top */}
        <div
          className="ring-offset-background relative h-9 w-9 shrink-0 cursor-pointer rounded-full transition focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:outline-none flex items-center justify-center"
          title="Go to top"
          aria-label="Go to top"
        >
          {pathname === '/' ? (
            <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-hidden="true">
              <Lottie animationData={homeAnimationData} loop aria-hidden="true" className={'size-8'} />
            </div>
          ) : (
            <Link href={'/'}>
              <Lottie animationData={homeAnimationData} loop aria-hidden="true" />
            </Link>
          )}
        </div>

        {/* Items: móvil = scroll-x; sm+ = distribuido */}
        <div className="flex flex-1 items-center">
          <ul
            className="flex w-full items-center gap-2 overflow-x-auto overscroll-x-contain scroll-smooth text-sm text-white [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-2 sm:overflow-visible [&::-webkit-scrollbar]:hidden"
            role="menubar"
          >
            {navigationItems.map((item) => (
              <li key={item} role="none">
                <motion.a
                  role="menuitem"
                  onClick={handleNavigationClick}
                  href={`/#${item}`}
                  className="block min-w-[96px] rounded-full px-3 py-2 text-center text-white/90 capitalize transition select-none hover:scale-[1.03] hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none active:scale-[0.98]"
                >
                  {item}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
