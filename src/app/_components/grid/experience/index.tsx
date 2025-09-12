import ExperienceTimeline from '@/components/shared/experience-timeline';
import { type ReactNode } from 'react';
import { type TExperience } from './timeline-experience';

export default function Experience() {
  return (
    <div className="flex w-full flex-1 flex-col justify-center overflow-y-scroll rounded-[inherit] bg-gradient-to-tr from-blue-50 to-blue-100 p-2 group-hover:bg-neutral-100 dark:from-blue-950 dark:to-zinc-900">
      <ExperienceTimeline minimal className="h-full" />
    </div>
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
      className={`text-neutral-500 transition-colors hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-200 ${sizeClassName[size]}`}
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
