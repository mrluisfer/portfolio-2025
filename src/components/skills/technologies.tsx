import { type ReactNode } from 'react';

import { divideArray } from '@/utils/divideArray';

import { type Technology, technologies } from './icons';
import TechnologyCard from './technology-card';

function Row({ children }: { children: ReactNode }) {
  return <div className="mb-6 grid grid-cols-9 justify-center gap-6">{children}</div>;
}

const cardPlaceholderLength = Array.from({ length: 9 });
const technologiesDivided = divideArray<Technology>(technologies, 7);

export default function Technologies() {
  return (
    <div className="mask-fade-x justify-center">
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
      <Row>
        {cardPlaceholderLength.map((_, i) => (
          <TechnologyCard key={i} />
        ))}
      </Row>
    </div>
  );
}
