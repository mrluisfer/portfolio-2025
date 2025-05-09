import { type ReactNode } from 'react';

import { divideArray } from '@/utils/divideArray';

import { type Technology, technologies } from './icons';
import TechnologyCard from './technology-card';
import { useMediaQuery } from '@/hooks/use-media-query';

function Row({ children }: { children: ReactNode }) {
  return <div className="mb-6 lg:grid flex grid-cols-9 justify-center gap-6">{children}</div>;
}

export default function Technologies() {
  const isLessThan768 = useMediaQuery('only screen and (max-width: 768px)');
  const isLessThan450 = useMediaQuery('only screen and (max-width: 450px)');

  const cardPlaceholderLength = Array.from({ length: isLessThan768 ? (isLessThan450 ? 0 : 5) : 9 });
  const technologiesDivided = divideArray<Technology>(technologies, isLessThan768 ? 5 : 7);
  return (
    <div className="mask-fade-x justify-center pt-[100px] sm:py-0">
      <Row>
        {cardPlaceholderLength.map((_, i) => (
          <TechnologyCard key={i} />
        ))}
      </Row>
      {technologiesDivided.map((row, i) => (
        <Row key={i}>
          <TechnologyCard />
          {row.map(({ name, Icon, customGlowColor }) => (
            <TechnologyCard key={name} Icon={Icon} customGlowColor={customGlowColor} />
          ))}
          <TechnologyCard />
        </Row>
      ))}
      {isLessThan768 ? null : (
        <Row>
          {cardPlaceholderLength.map((_, i) => (
            <TechnologyCard key={i} />
          ))}
        </Row>
      )}
    </div>
  );
}
