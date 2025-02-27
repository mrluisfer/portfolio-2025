import React from 'react';
import { type TExperience, timelineExperience } from './timeline-experience';

function TimelineItem({ experience }: { experience: TExperience }) {
  return (
    <li className="flex justify-start items-center gap-2 relative py-3 pl-2 flex-1">
      <div className="bg-neutral-900 h-full w-0.5 absolute left-[11px] grow"></div>
      <div className="bg-neutral-800 w-2 h-2 rounded-full"></div>
      <div className="flex flex-col">
        <p className="font-semibold">
          {experience.title}{' '}
          <span className="text-neutral-500 hover:text-neutral-600 text-sm">
            - {experience.company}
          </span>
        </p>
        <span className="text-sm text-neutral-500">{experience.date}</span>
        <span className="text-xs text-neutral-500">
          {experience.time} - {experience.type}
        </span>
      </div>
    </li>
  );
}

export default function Experience() {
  return (
    <ul className="flex flex-col px-4 bg-neutral-50 rounded-[inherit] w-full h-full justify-center">
      {timelineExperience.map((experience, index) => (
        <TimelineItem key={index} experience={experience} />
      ))}
    </ul>
  );
}
