import accessibilityData from '@/lotties/accessibility.json';
import designData from '@/lotties/figma.json';
import performanceData from '@/lotties/performance.json';
import responsiveData from '@/lotties/responsive.json';
import technologiesData from '@/lotties/technologies.json';

export type Principle = {
  title: string;
  icon: Record<string, unknown>;
  description: string;
  color: string;
  customWhileHover?: unknown;
};

export const principles: Principle[] = [
  {
    title: 'Responsive Design',
    icon: responsiveData,
    description: 'Build responsive designs that work on all devices.',
    color: '#16C47F',
  },
  {
    title: 'Trending Technologies',
    icon: technologiesData,
    description: 'Use the latest technologies to build your product.',
    color: '#211C84',
  },
  {
    title: 'Performance',
    icon: performanceData,
    description: 'Build performant websites that load quickly.',
    color: '#FFD95F',
  },
  {
    title: 'Accessibility',
    icon: accessibilityData,
    description: 'Build accessible websites that work for everyone.',
    color: '#D91656',
  },
  {
    title: 'Beautiful Design',
    icon: designData,
    description: 'Build beautiful designs that look great.',
    color: '#2A004E',
  },
];
