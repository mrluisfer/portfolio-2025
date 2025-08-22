import React from 'react';
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from '@/components/ui/timeline';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FileIcon } from 'lucide-react';
import { items } from './timeline-data';

const reverseItems = (array: any[]) => array.map(array.pop, [...array]);

export default function ProjectTimeline() {
  return (
    <section className="px-6 pb-10 sm:px-10">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-medium text-neutral-900">Experience</h2>
        <Button asChild variant={'outline'} size={'sm'}>
          <Link href="/luis-alvarez-resume.pdf" target="_blank" rel="noopener noreferrer">
            <FileIcon size={14} /> Download CV
          </Link>
        </Button>
      </div>
      <div>
        <Timeline defaultValue={items.length} orientation="vertical">
          {reverseItems(items).map((item) => (
            <TimelineItem
              key={item.id}
              step={item.id}
              className="group-data-[orientation=vertical]/timeline:sm:ms-32"
            >
              <TimelineHeader>
                <TimelineSeparator />
                <TimelineDate className="group-data-[orientation=vertical]/timeline:sm:absolute group-data-[orientation=vertical]/timeline:sm:-left-32 group-data-[orientation=vertical]/timeline:sm:w-20 group-data-[orientation=vertical]/timeline:sm:text-right">
                  {item.date}
                </TimelineDate>
                <TimelineTitle className="sm:-mt-0.5">{item.title}</TimelineTitle>
                <TimelineIndicator />
              </TimelineHeader>
              <TimelineContent className="max-w-xl leading-relaxed">
                {item.description}
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
