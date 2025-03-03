import { ReactNode } from 'react';

export type Principle = {
  title: string;
  icon: ReactNode;
  description: string;
  color: string;
  customWhileHover?: unknown;
};

export const principles: Principle[] = [
  {
    title: 'Trending Technologies',
    icon: '🚀',
    description: 'We use the latest technologies to build your product.',
    color: '#211C84',
  },
  {
    title: 'Responsive Design',
    icon: '📱',
    description: 'We build responsive designs that work on all devices.',
    color: '#16C47F',
  },
  {
    title: 'Performance',
    icon: '🚄',
    description: 'We build performant websites that load quickly.',
    color: '#FFD95F',
  },
  {
    title: 'Accessibility',
    icon: '♿️',
    description: 'We build accessible websites that work for everyone.',
    color: '#D91656',
  },
  {
    title: 'Beautiful Design',
    icon: '🎨',
    description: 'We build beautiful designs that look great.',
    color: '#2A004E',
  },
];
