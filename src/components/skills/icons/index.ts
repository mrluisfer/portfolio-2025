import { SVGProps } from 'react';
import {
  Deno,
  Expressjs,
  Git,
  JavaScript,
  Jest,
  Motion,
  NestJS,
  Nodejs,
  PostgreSQL,
  Prisma,
  Python,
  React,
  Redux,
  Sass,
  Socketio,
  StyledComponents,
  TailwindCSS,
  TypeScript,
  Vercel,
  Vite,
  Vitest,
} from '../../../assets/icons/allIcons';

export type SvglIcon = (props: SVGProps<SVGSVGElement>) => JSX.Element;
export type Technology = {
  Icon: SvglIcon;
  name: string;
  customGlowColor?: string;
};

export const technologies: Technology[] = [
  {
    Icon: React,
    name: 'React',
  },
  {
    Icon: Nodejs,
    name: 'Node.js',
  },
  {
    Icon: Expressjs,
    name: 'Express.js',
  },
  {
    Icon: TailwindCSS,
    name: 'Tailwind CSS',
  },
  {
    Icon: Git,
    name: 'Git',
  },
  {
    Icon: TypeScript,
    name: 'TypeScript',
  },
  {
    Icon: JavaScript,
    name: 'JavaScript',
  },
  {
    Icon: NestJS,
    name: 'NestJS',
  },
  {
    Icon: Vercel,
    name: 'Vercel',
  },
  {
    Icon: Socketio,
    name: 'Socket.io',
  },
  {
    Icon: Motion,
    name: 'Framer Motion',
    customGlowColor: '#fff42b',
  },
  {
    Icon: Prisma,
    name: 'Prisma',
    customGlowColor: '#0A0B16',
  },
  {
    Icon: StyledComponents,
    name: 'Styled Components',
    customGlowColor: '#FAA0E6',
  },
  {
    Icon: PostgreSQL,
    name: 'PostgreSQL',
    customGlowColor: '#0064a5',
  },
  {
    Icon: Vite,
    name: 'Vite',
    customGlowColor: '#857BFF',
  },
  {
    Icon: Vitest,
    name: 'Vitest',
  },
  {
    Icon: Jest,
    name: 'Jest',
  },
  {
    Icon: Redux,
    name: 'Redux',
  },
  {
    Icon: Python,
    name: 'Python',
    customGlowColor: '#4B8BBE',
  },
  {
    Icon: Sass,
    name: 'Sass',
  },
  {
    Icon: Deno,
    name: 'Deno',
    customGlowColor: '#70FFAF',
  },
];
