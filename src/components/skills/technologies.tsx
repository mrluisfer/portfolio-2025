import { useMemo } from 'react';
import { divideArray } from '@/utils/divideArray';
import { type Technology, technologies } from './icons';
import TechnologyCard from './technology-card';
import { useMediaQuery } from '@/hooks/use-media-query';

function Row({ children }: { children: React.ReactNode }) {
  return <div className="mb-6 lg:grid flex grid-cols-9 justify-center gap-6">{children}</div>;
}

export default function Technologies() {
  const isLessThan768 = useMediaQuery('only screen and (max-width: 768px)');
  const isLessThan450 = useMediaQuery('only screen and (max-width: 450px)');

  const cardPlaceholderLength = useMemo(() => {
    if (isLessThan768) {
      return isLessThan450 ? [] : new Array(5).fill(null);
    }
    return new Array(9).fill(null);
  }, [isLessThan768, isLessThan450]);

  const technologiesDivided = useMemo(() => {
    return divideArray<Technology>(technologies, isLessThan768 ? 5 : 7);
  }, [isLessThan768]);

  return (
    <div className="mask-fade-x justify-center pt-[100px] sm:py-0">
      {cardPlaceholderLength.length > 0 && (
        <Row>
          {cardPlaceholderLength.map((_, i) => (
            <TechnologyCard key={`ph-top-${i}`} />
          ))}
        </Row>
      )}

      {technologiesDivided.map((row, i) => (
        <Row key={`row-${i}`}>
          <TechnologyCard key={`left-${i}`} />
          {row.map(({ name, Icon, customGlowColor }) => (
            <TechnologyCard key={name} Icon={Icon} customGlowColor={customGlowColor} />
          ))}
          <TechnologyCard key={`right-${i}`} />
        </Row>
      ))}

      {cardPlaceholderLength.length > 0 && !isLessThan768 && (
        <Row>
          {cardPlaceholderLength.map((_, i) => (
            <TechnologyCard key={`ph-bottom-${i}`} />
          ))}
        </Row>
      )}
    </div>
  );
}
