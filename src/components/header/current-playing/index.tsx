'use client';

import * as motion from 'motion/react-client';
import { TbMusicPause } from 'react-icons/tb';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import spotifyAnimationData from '@/lotties/spotify.json';
import { useRef, useState } from 'react';
import { AnimatePresence } from 'motion/react';

export default function CurrentPlaying() {
  const [showPopover, setShowPopover] = useState(false);
  const spotifyRefAnimationData = useRef<LottieRefCurrentProps>(null);

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
              className="absolute top-7 -left-10 z-20 min-w-[170px] rounded-xl border border-neutral-400 bg-white px-2 py-3 shadow-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              key="box"
            >
              <div className="flex items-center justify-center gap-2">
                <div className="relative h-7 w-7 overflow-hidden">
                  <Lottie
                    lottieRef={spotifyRefAnimationData}
                    animationData={spotifyAnimationData}
                    className="absolute left-0 h-fit w-fit transform"
                    autoplay={false}
                    loop={false}
                  />
                </div>
                <p className="text-xs">Trending on Spotify</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
