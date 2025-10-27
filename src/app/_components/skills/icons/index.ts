import {
  DarkDeno,
  DarkExpressjs,
  DarkMotion,
  DarkPrisma,
  DarkSocketio,
  DarkVercel,
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
} from '@/assets/icons/allIcons';
import { type SVGProps } from 'react';

export type SvglIcon = (props: SVGProps<SVGSVGElement>) => JSX.Element;
export type Technology = {
  Icon: SvglIcon;
  name: string;
  customGlowColor?: string;
  DarkIcon?: SvglIcon;
};

export const technologies: Technology[] = [
  {
    Icon: Expressjs,
    name: 'Express.js',
    DarkIcon: DarkExpressjs,
  },
  {
    Icon: React,
    name: 'React',
  },
  {
    Icon: Nodejs,
    name: 'Node.js',
    customGlowColor: '#8CC84B',
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
    Icon: Socketio,
    name: 'Socket.io',
    DarkIcon: DarkSocketio,
  },
  {
    Icon: Motion,
    name: 'Framer Motion',
    customGlowColor: '#fff42b',
    DarkIcon: DarkMotion,
  },
  {
    Icon: Vercel,
    name: 'Vercel',
    DarkIcon: DarkVercel,
  },
  {
    Icon: NestJS,
    name: 'NestJS',
  },
  {
    Icon: JavaScript,
    name: 'JavaScript',
  },
  {
    Icon: PostgreSQL,
    name: 'PostgreSQL',
    customGlowColor: '#0064a5',
  },
  {
    Icon: StyledComponents,
    name: 'Styled Components',
    customGlowColor: '#FAA0E6',
  },
  {
    Icon: Prisma,
    name: 'Prisma',
    DarkIcon: DarkPrisma,
  },
  {
    Icon: Vitest,
    name: 'Vitest',
  },
  {
    Icon: Vite,
    name: 'Vite',
    customGlowColor: '#857BFF',
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
    DarkIcon: DarkDeno,
  },
];
