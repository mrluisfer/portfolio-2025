import React, { ReactNode } from 'react';
import { type TExperience, timelineExperience } from './timeline-experience';

export default function Experience() {
  return (
    <ul className="flex w-full flex-1 flex-col justify-center rounded-[inherit] bg-neutral-50 px-4 group-hover:bg-neutral-100">
      {timelineExperience.map((experience, index) => (
        <TimelineItem key={index} experience={experience} />
      ))}
    </ul>
  );
}

function LightText({
  children,
  size = 'sm',
}: {
  children: ReactNode | string;
  size?: 'sm' | 'xs';
}) {
  const sizeClassName = {
    sm: 'text-sm',
    xs: 'text-xs',
  };
  return (
    <span
      className={`text-neutral-500 transition-colors hover:text-neutral-600 ${sizeClassName[size]}`}
    >
      {children}
    </span>
  );
}

function TimelineItem({ experience }: { experience: TExperience }) {
  return (
    <li className="relative flex flex-1 items-center justify-start gap-2 py-3 pl-2">
      <div className="absolute left-[11px] h-full w-0.5 grow bg-neutral-900"></div>
      <div className="relative z-20 block h-2 w-2 animate-pulse rounded-full bg-neutral-800"></div>
      <div className="flex flex-col">
        <p className="font-semibold">
          {experience.title} <LightText>- {experience.company}</LightText>
        </p>
        <LightText size="xs">{experience.date}</LightText>
        <LightText size="sm">
          {experience.time} - {experience.type}
        </LightText>
      </div>
    </li>
  );
}
