'use client';

import { divideArray } from '@/utils/divideArray';
import { useTheme } from 'next-themes';
import { memo, useEffect, useMemo, useState } from 'react';
import { type Technology, technologies } from './icons';
import TechnologyCard from './technology-card';

function useMaxWidth(breakpoint: number) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia(`(max-width: ${breakpoint}px)`);

    setMatches(mql.matches);

    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mql.addEventListener?.('change', handler);
    mql.addListener?.(handler);

    return () => {
      mql.removeEventListener?.('change', handler);
      mql.removeListener?.(handler);
    };
  }, [breakpoint]);

  return matches;
}

const Row = memo(function Row({ children }: { children: React.ReactNode }) {
  return <div className="mb-6 flex grid-cols-9 justify-center gap-6 lg:grid">{children}</div>;
});

const MemoTechnologyCard = memo(TechnologyCard);

export default function Technologies() {
  const isLessThan768 = useMaxWidth(768);
  const isLessThan450 = useMaxWidth(450);
  const { theme } = useTheme();

  const cols = isLessThan768 ? 5 : 7;

  const placeholderArray = useMemo(() => {
    if (isLessThan768) {
      return isLessThan450 ? [] : Array.from({ length: 5 });
    }
    return Array.from({ length: 9 });
  }, [isLessThan768, isLessThan450]);

  const technologiesDivided = useMemo(() => divideArray<Technology>(technologies, cols), [cols]);

  return (
    <div className="mask-fade-x justify-center pt-[100px] sm:py-0">
      {placeholderArray.length > 0 && (
        <Row>
          {placeholderArray.map((_, i) => (
            <MemoTechnologyCard key={`ph-top-${i}`} />
          ))}
        </Row>
      )}

      {technologiesDivided.map((row, i) => (
        <Row key={`row-${i}`}>
          <MemoTechnologyCard key={`left-${i}`} />
          {row.map(({ name, Icon, DarkIcon, customGlowColor }) => (
            <MemoTechnologyCard
              key={name}
              Icon={theme === 'light' ? Icon : DarkIcon ? DarkIcon : Icon}
              customGlowColor={customGlowColor}
            />
          ))}
          <MemoTechnologyCard key={`right-${i}`} />
        </Row>
      ))}

      {placeholderArray.length > 0 && !isLessThan768 && (
        <Row>
          {placeholderArray.map((_, i) => (
            <MemoTechnologyCard key={`ph-bottom-${i}`} />
          ))}
        </Row>
      )}
    </div>
  );
}
