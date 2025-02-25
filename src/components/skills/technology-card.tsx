import { getGlowColor } from '@/utils/get-glow-color';
import { MotionStyle, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { SvglIcon } from './icons';

export default function TechnologyCard({ Icon }: { Icon?: SvglIcon }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [glowColor, setGlowColor] = useState<string | undefined>(undefined);
  const hasIcon = Boolean(Icon);
  const IconElement = Icon || (() => null);

  useEffect(() => {
    if (svgRef.current) {
      const glowColor = getGlowColor(svgRef);
      setGlowColor(glowColor);
    }
  }, []);

  return (
    <motion.div
      className="technology-card-glow relative grid h-24 w-24 place-items-center rounded-xl border bg-neutral-200 backdrop-blur-xl"
      style={
        {
          '--glow-color': glowColor,
          borderColor: '#d4d4d4',
        } as MotionStyle
      }
      whileHover={hasIcon ? { scale: 1.1, borderColor: glowColor } : {}}
      whileTap={hasIcon ? { scale: 0.9, borderColor: glowColor } : {}}
    >
      <motion.div className="relative z-10 flex h-full w-full items-center justify-center rounded-xl bg-neutral-200 text-4xl">
        {hasIcon && (<IconElement ref={svgRef} />)!}
      </motion.div>
    </motion.div>
  );
}
