import { cn } from '@/lib/utils';
import spotifyAnimationData from '@/lotties/spotify.json';
import Lottie, { type LottieRefCurrentProps } from 'lottie-react';
import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-client';
import { useRef, useState, type ReactNode } from 'react';
import { TbMusicPause } from 'react-icons/tb';

export default function CurrentPlaying() {
  const spotifyRefAnimationData = useRef<LottieRefCurrentProps>(null);

  return (
    <Popover>
      <div
        className={cn(
          `relative flex h-[300px] w-[300px] flex-col items-center justify-center gap-2 rounded-xl`,
          'bg-[url("/color-violet.webp")] bg-cover bg-center'
        )}
      >
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <div className="relative h-5 w-5 overflow-hidden">
            <Lottie
              lottieRef={spotifyRefAnimationData}
              animationData={spotifyAnimationData}
              className="absolute left-0 h-fit w-fit transform"
              autoplay={false}
              loop={false}
            />
          </div>
          <p className="text-xs font-semibold text-white">My favorite</p>
        </div>
        <motion.div
          className="absolute bottom-5 w-[280px] rounded-xl bg-yellow-500/10 px-4 py-3 text-white backdrop-blur-md"
          whileHover={{
            scale: 0.95,
          }}
        >
          <p className="text-lg font-bold">The Color Violet</p>
          <p className="text-sm">Tory Lanez</p>
        </motion.div>
      </div>
    </Popover>
  );
}

function Popover({ children }: { children: ReactNode }) {
  const [showPopover, setShowPopover] = useState(false);

  return (
    <motion.div>
      <motion.div
        className="relative"
        onMouseOver={() => setShowPopover(true)}
        onMouseLeave={() => setShowPopover(false)}
      >
        <TbMusicPause className="text-2xl text-neutral-700 transition-all hover:text-blue-500 dark:text-neutral-100 dark:hover:text-blue-400" />
        <AnimatePresence mode="wait">
          {showPopover && (
            <motion.div
              className="absolute top-7 -left-10 z-20 min-w-[170px] rounded-xl border border-neutral-400 bg-white shadow-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
              key="box"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
