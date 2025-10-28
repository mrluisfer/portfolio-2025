'use client';

import Lottie, { type LottieRefCurrentProps } from 'lottie-react';
import { motion, useReducedMotion } from 'motion/react';
import { type ReactNode, useCallback, useRef, useState } from 'react';

import arrowAnimationData from '../../lotties/arrow.json';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

type SocialLinkProps = {
  href: string;
  alt?: string;
  children: ReactNode;
};

export default function SocialLink({ href, alt, children }: SocialLinkProps) {
  const arrowAnimationRef = useRef<LottieRefCurrentProps>(null);
  const [showAnimation, setShowAnimation] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const reduceMotion = useReducedMotion();

  const startAnimation = useCallback(() => {
    if (reduceMotion) return;
    setAnimKey((k) => k + 1);
    setShowAnimation(true);
  }, [reduceMotion]);

  const stopAnimation = useCallback(() => {
    setShowAnimation(false);
    arrowAnimationRef.current?.stop?.();
  }, []);

  return (
    <Tooltip delayDuration={800}>
      <TooltipTrigger asChild>
        <motion.a
          onMouseEnter={startAnimation}
          onMouseLeave={stopAnimation}
          onFocus={startAnimation}
          onBlur={stopAnimation}
          className="group relative"
          href={href}
          aria-label={alt}
          title={alt}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-2xl text-neutral-700 transition group-hover:text-blue-500 dark:text-neutral-100 dark:group-hover:text-blue-400">
            {children}
          </span>

          {showAnimation && !reduceMotion && (
            <motion.div
              key={animKey}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="pointer-events-none absolute top-0 -right-4"
            >
              <Lottie
                lottieRef={arrowAnimationRef}
                animationData={arrowAnimationData}
                className="h-[50px] w-[50px]"
                autoplay
                loop={false}
                onComplete={stopAnimation}
              />
            </motion.div>
          )}
        </motion.a>
      </TooltipTrigger>
      <TooltipContent>
        <p className="text-white">{alt}</p>
      </TooltipContent>
    </Tooltip>
  );
}
