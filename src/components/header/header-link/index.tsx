import { motion } from 'motion/react';
import { useRef, useState, type ReactNode } from 'react';
import arrowAnimationData from '../../../lotties/arrow.json';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';

type HeaderLinkProps = {
  href: string;
  alt?: string;
  children: ReactNode;
};

export default function HeaderLink({ href, alt, children }: HeaderLinkProps) {
  const arrowAnimationRef = useRef<LottieRefCurrentProps>(null);
  const [showAnimation, setShowAnimation] = useState(false);

  return (
    <motion.div
      onMouseOver={() => setShowAnimation(true)}
      onMouseLeave={() => setShowAnimation(false)}
      className="group relative"
    >
      <a
        href={href}
        aria-description={alt}
        className="text-2xl text-neutral-700 transition group-hover:text-blue-500"
      >
        {children}
      </a>
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
    </motion.div>
  );
}
