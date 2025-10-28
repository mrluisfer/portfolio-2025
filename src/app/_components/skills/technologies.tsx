'use client';

import { divideArray } from '@/utils/divideArray';
import { useTheme } from 'next-themes';
import { memo, ReactNode, useMemo, useSyncExternalStore } from 'react';

const mqlCache = new Map<string, MediaQueryList>();

function getMql(query: string) {
  if (typeof window === 'undefined') return null;
  const cached = mqlCache.get(query);
  if (cached) return cached;
  const mql = window.matchMedia(query);
  mqlCache.set(query, mql);
  return mql;
}

function subscribeMql(query: string, callback: () => void) {
  const mql = getMql(query);
  if (!mql) return () => {};

  // Un solo tipo de suscripción (moderno) con fallback legacy sin duplicar
  const handler = () => callback();

  if ('addEventListener' in mql) {
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  } else {
    // @ts-expect-error: soporte legacy
    mql.addListener(handler);
    // @ts-expect-error: soporte legacy
    return () => mql.removeListener(handler);
  }
}

function getSnapshotMql(query: string) {
  const mql = getMql(query);
  return mql ? mql.matches : false;
}

function getServerSnapshotMql() {
  // En SSR asumimos false; evita acceso a window
  return false;
}

function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (cb) => subscribeMql(query, cb),
    () => getSnapshotMql(query),
    () => getServerSnapshotMql()
  );
}

// ---------- Presentational ----------
const Row = memo(function Row({ children }: { children: ReactNode }) {
  return <div className="mb-6 flex grid-cols-9 justify-center gap-6 lg:grid">{children}</div>;
});

import { type Technology, technologies } from './icons';
import TechnologyCard from './technology-card';
const MemoTechnologyCard = memo(TechnologyCard);

// ---------- Componente ----------
export default function Technologies() {
  // Un hook por breakpoint, pero con suscripción estable y cacheada
  const isLessThan768 = useMediaQuery('(max-width: 768px)');
  const isLessThan450 = useMediaQuery('(max-width: 450px)');
  const { theme } = useTheme();

  const cols = isLessThan768 ? 5 : 7;

  // Evita crear arrays cuando solo necesitas longitud
  const placeholderCountTop = isLessThan768 ? (isLessThan450 ? 0 : 5) : 9;
  const placeholderCountBottom = !isLessThan768 ? placeholderCountTop : 0;

  // Divide solo cuando cambia 'cols'
  const technologiesDivided = useMemo(() => divideArray<Technology>(technologies, cols), [cols]);

  return (
    <div className="mask-fade-x justify-center pt-[100px] sm:py-0">
      {placeholderCountTop > 0 && (
        <Row>
          {Array.from({ length: placeholderCountTop }, (_, i) => (
            <MemoTechnologyCard key={`ph-top-${i}`} />
          ))}
        </Row>
      )}

      {technologiesDivided.map((row, i) => (
        <Row key={`row-${i}`}>
          <MemoTechnologyCard key={`left-${i}`} />
          {row.map(({ name, Icon, DarkIcon, customGlowColor, docs }) => (
            <MemoTechnologyCard
              key={name}
              Icon={theme === 'light' ? Icon : (DarkIcon ?? Icon)}
              customGlowColor={customGlowColor}
              docs={docs}
              name={name}
            />
          ))}
          <MemoTechnologyCard key={`right-${i}`} />
        </Row>
      ))}

      {placeholderCountBottom > 0 && (
        <Row>
          {Array.from({ length: placeholderCountBottom }, (_, i) => (
            <MemoTechnologyCard key={`ph-bottom-${i}`} />
          ))}
        </Row>
      )}
    </div>
  );
}
