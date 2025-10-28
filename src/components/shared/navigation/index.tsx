'use client';

import { NAVIGATION_NAMES } from '@/constants/navigation-names';
import { ArrowUpIcon } from 'lucide-react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from 'motion/react';
import { usePathname } from 'next/navigation';
import React from 'react';

const navigationItems = Object.values(NAVIGATION_NAMES);

export default function Navigation() {
  const pathname = usePathname();

  // Respeta preferencias de accesibilidad
  const prefersReducedMotion = useReducedMotion();

  // Mostrar el botón "arriba" cuando haya desplazamiento
  const { scrollY } = useScroll();
  const [showToTop, setShowToTop] = React.useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    // Threshold razonable para no parpadear
    setShowToTop(latest > 200);
  });

  const handleNavigationClick = React.useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      // Evita que el navegador haga el salto por hash y nosotros controlamos el scroll
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const targetId = href?.startsWith('/#') ? href.slice(2) : href?.replace('#', '');
      if (!targetId) return;

      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        // Opcional: actualizar el hash para accesibilidad / deep-link
        history.replaceState(null, '', `/#${targetId}`);
      }
    },
    [prefersReducedMotion]
  );

  const handleScrollTop = React.useCallback(() => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  }, [prefersReducedMotion]);

  return (
    <nav
      className="fixed inset-x-0 bottom-[env(safe-area-inset-bottom,0px)] z-50 mb-4 hidden items-center justify-center px-3 pb-[calc(env(safe-area-inset-bottom,0px)/2)] sm:flex"
      aria-label="Primary"
    >
      {/* Wrapper: móvil = full width; sm+ = pill centrado */}
      <div className="flex w-full max-w-sm items-center gap-3 rounded-2xl border border-white/10 bg-neutral-900/50 px-3 py-2 shadow-lg backdrop-blur-lg backdrop-saturate-150 sm:w-auto sm:max-w-[720px] sm:rounded-full sm:px-4 sm:py-2 md:max-w-[800px] lg:max-w-[1000px]">
        {/* Home / top */}
        <AnimatePresence mode="wait">
          {showToTop && (
            <motion.button
              key="goToTop"
              type="button"
              onClick={handleScrollTop}
              className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:outline-none lg:flex"
              title="Ir arriba"
              aria-label="Ir al comienzo de la página"
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8, y: 6 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8, y: 6 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUpIcon className="h-5 w-5" aria-hidden="true" />
            </motion.button>
          )}
        </AnimatePresence>

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
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                  whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
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
