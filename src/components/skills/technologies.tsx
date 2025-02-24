import { divideArray } from '@/utils/divideArray';
import { technologies, Technology } from './icons';
import { type ReactNode } from 'react';
import TechnologyCard from './technology-card';

function Row({ children }: { children: ReactNode }) {
  return <div className="mb-6 grid grid-cols-9 justify-center gap-6">{children}</div>;
}

const cardPlaceholderLength = Array.from({ length: 9 });
const technologiesDivided = divideArray<Technology>(technologies, 7);

export default function Technologies() {
  return (
    <div className="technologies-shadow-x justify-center">
      <Row>
        {cardPlaceholderLength.map((_, i) => (
          <TechnologyCard key={i} />
        ))}
      </Row>
      {technologiesDivided.map((row, i) => (
        <Row key={i}>
          <TechnologyCard />
          {row.map(({ name, Icon }) => (
            <TechnologyCard key={name} Icon={Icon} />
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
