import Lottie, { type LottieRefCurrentProps } from 'lottie-react';
import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-client';
import { useRef, useState, type ReactNode } from 'react';
import { TbMusicPause } from 'react-icons/tb';
import colorVioletCover from '@/assets/albums/color-violet.webp';
import spotifyAnimationData from '@/lotties/spotify.json';

export default function CurrentPlaying() {
  const spotifyRefAnimationData = useRef<LottieRefCurrentProps>(null);

  return (
    <Popover>
      <div
        className={`flex relative items-center justify-center gap-2 w-[300px] h-[300px] rounded-xl flex-col`}
      >
        <div className="flex items-center absolute top-3 gap-2 left-3">
          <div className="relative h-5 w-5 overflow-hidden">
            <Lottie
              lottieRef={spotifyRefAnimationData}
              animationData={spotifyAnimationData}
              className="absolute left-0 h-fit w-fit transform"
              autoplay={false}
              loop={false}
            />
          </div>
          <p className="text-xs text-white font-semibold">My favorite</p>
        </div>
        <img src={colorVioletCover.src} alt="The Color Violet" className="rounded-xl" />
        <motion.div
          className="absolute bottom-5 w-[280px] bg-yellow-500/10 backdrop-blur-md text-white px-4 py-3 rounded-xl"
          whileHover={{
            scale: 0.95,
          }}
        >
          <p className="font-bold text-lg">The Color Violet</p>
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
        <TbMusicPause className="text-2xl text-neutral-700 hover:text-blue-500" />
        <AnimatePresence mode="wait">
          {showPopover && (
            <motion.div
              className="absolute top-7 -left-10 z-20 min-w-[170px] rounded-xl border border-neutral-400 bg-white shadow-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
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
