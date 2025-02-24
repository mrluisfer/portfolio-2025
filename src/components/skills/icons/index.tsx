import { SVGProps } from 'react';
import {
  React,
  Expressjs,
  Git,
  JavaScript,
  Jest,
  Motion,
  NestJS,
  Nodejs,
  Prisma,
  Python,
  Redux,
  Socketio,
  StyledComponents,
  TailwindCSS,
  TypeScript,
  Vercel,
  Vite,
  Vitest,
  Sass,
  Deno,
  PostgreSQL,
} from './allIcons';

export type SvglIcon = (props: SVGProps<SVGSVGElement>) => JSX.Element;
export type Technology = {
  Icon: SvglIcon;
  name: string;
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
  },
  {
    Icon: Prisma,
    name: 'Prisma',
  },
  {
    Icon: StyledComponents,
    name: 'Styled Components',
  },
  {
    Icon: PostgreSQL,
    name: 'PostgreSQL',
  },
  {
    Icon: Vite,
    name: 'Vite',
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
  },
  {
    Icon: Sass,
    name: 'Sass',
  },
  {
    Icon: Deno,
    name: 'Deno',
  },
];
