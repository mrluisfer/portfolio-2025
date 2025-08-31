import { getGlowColor } from '@/utils/get-glow-color';
import { type MotionStyle, motion } from 'motion/react';
import { memo, useEffect, useMemo, useRef, useState } from 'react';
import { type SvglIcon } from './icons';

type Props = {
  Icon?: SvglIcon;
  customGlowColor?: string;
};

function TechnologyCardBase({ Icon, customGlowColor }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);

  const [autoGlow, setAutoGlow] = useState<string | undefined>(undefined);
  const glowColor = customGlowColor ?? autoGlow;

  useEffect(() => {
    if (!customGlowColor && svgRef.current) {
      let raf = requestAnimationFrame(() => {
        try {
          const color = getGlowColor(svgRef);
          setAutoGlow(color);
        } catch {
          /* noop */
        }
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [customGlowColor]);

  const cardStyle = useMemo(
    () =>
      ({
        '--glow-color': glowColor,
        borderColor: '#d4d4d4',
      }) as MotionStyle,
    [glowColor]
  );

  const hoverAnim = useMemo(
    () => (Icon ? { scale: 1.1, borderColor: glowColor } : undefined),
    [glowColor]
  );
  const tapAnim = useMemo(
    () => (Icon ? { scale: 0.9, borderColor: glowColor } : undefined),
    [glowColor]
  );

  return (
    <motion.div
      className="technology-card-glow relative grid h-24 w-24 place-items-center rounded-xl border-0 bg-transparent backdrop-blur-xl sm:border sm:bg-neutral-200 dark:bg-neutral-950"
      style={cardStyle}
      whileHover={hoverAnim}
      whileTap={tapAnim}
    >
      <div className="relative z-10 flex h-full w-full items-center justify-center rounded-xl bg-transparent text-4xl sm:bg-neutral-200 dark:bg-neutral-950">
        {Icon ? <Icon ref={svgRef} /> : null}
      </div>
    </motion.div>
  );
}

function areEqual(prev: Props, next: Props) {
  return prev.Icon === next.Icon && prev.customGlowColor === next.customGlowColor;
}

export default memo(TechnologyCardBase, areEqual);
