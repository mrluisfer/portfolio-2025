import Lottie, { type LottieRefCurrentProps } from 'lottie-react';
import { motion } from 'motion/react';
import { type ReactNode, useRef, useState } from 'react';

import arrowAnimationData from '../../lotties/arrow.json';

type SocialLinkProps = {
  href: string;
  alt?: string;
  children: ReactNode;
};

export default function SocialLink({ href, alt, children }: SocialLinkProps) {
  const arrowAnimationRef = useRef<LottieRefCurrentProps>(null);
  const [showAnimation, setShowAnimation] = useState(false);

  return (
    <motion.a
      onMouseOver={() => setShowAnimation(true)}
      onMouseLeave={() => setShowAnimation(false)}
      className="group relative"
      href={href}
      aria-description={alt}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-2xl text-neutral-700 transition group-hover:text-blue-500">
        {children}
      </span>
      {showAnimation && (
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          onAnimationComplete={() => setShowAnimation(false)}
          className="absolute top-0 -right-4"
        >
          <Lottie
            lottieRef={arrowAnimationRef}
            animationData={arrowAnimationData}
            className="z-20 h-[50px] w-[50px]"
            autoplay={true}
            loop={false}
            onAnimationEnd={() => arrowAnimationRef?.current?.pause()}
          />
        </motion.div>
      )}
    </motion.a>
  );
}
