export type ProjectType = {
  name: string;
  description: string;
  repoUrl: string;
  previewUrl?: string;
  technologies: string[];
  imageCover?: string;
  imgAuthor?: string;
};

export const projects: ProjectType[] = [
  {
    name: 'Monfly',
    description:
      'Monfly provides an integrated solution for personal financial management. You can track and categorize your financial activity, set alerts, analyze spending with beautiful dashboards, and manage your profile with secure authentication.',
    repoUrl: 'https://github.com/mrluisfer/monfly',
    previewUrl: 'https://monfly.vercel.app',
    technologies: [
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'PostgreSQL',
      'TanStack',
      'Shadcn UI',
      'Node.js',
    ],
    imageCover: '/projects/monfly-preview.webp',
    imgAuthor: 'Nathan Dumlao',
  },
  {
    name: 'Bambú',
    description:
      'Bambú is a personal project, simulating a company in which people can get closer to technology, offering personalized service and modern solutions.',
    repoUrl: 'https://github.com/mrluisfer/bambu',
    previewUrl: 'https://bambu-tech.vercel.app',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'PostgreSQL',
      'Shadcn UI',
      'Node.js',
      'i18next',
      'Zod',
    ],
    imageCover: '/projects/bambu-preview.webp',
    imgAuthor: 'Evie S.',
  },
  {
    name: 'Portfolio 2025',
    description:
      'Portfolio 2025 is a modern, highly interactive personal portfolio leveraging Astro and React. The project aims to present professional experience, skills, projects, and personal branding via an animated, performant, and maintainable UI.',
    repoUrl: 'https://github.com/mrluisfer/portfolio-2025',
    previewUrl: 'https://mrluisfer.vercel.app',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Shadcn UI',
      'Node.js',
      'i18next',
      'Octokit',
      'Lucide React',
      'Spotify Api',
      'Astro',
    ],
    imageCover: '/projects/portfolio-preview.png',
    imgAuthor: 'Mohammad Rahmani',
  },
  {
    name: 'Spotify Api Kit',
    description:
      'A modern, type-safe TypeScript wrapper for the Spotify Web API, designed for secure Node.js backend applications.',
    previewUrl: 'https://www.npmjs.com/package/spotify-api-kit',
    repoUrl: 'https://github.com/mrluisfer/spotify-api-kit',
    technologies: ['TypeScript', 'Node.js', 'Spotify Api', 'Express.js', 'Jest', 'NPM'],
    imageCover: '/projects/spotify-preview.webp',
    imgAuthor: 'sadaf amininia',
  },
  {
    name: 'JS Challenges Hub',
    description:
      'Multiple Frontend Mentor challenges to avoid having multiple free hosting and keeping learning resources organized.',
    repoUrl: 'https://github.com/mrluisfer/js-challenge-hub',
    previewUrl: 'https://jschallenges-hub.vercel.app/',
    technologies: ['TypeScript', 'Tailwind CSS', 'React', 'Vite', 'React Router', 'Zod'],
    imageCover: '/projects/challenges-preview.webp',
    imgAuthor: 'Kevin Canlas',
  },
  {
    name: 'Neovim Config',
    description:
      'Neovim config and adapted for the Frontend and Backend development, and easy to adapt to any config.',
    repoUrl: 'https://github.com/mrluisfer/nvim',
    imageCover: '/projects/nvim-preview.webp',
    technologies: [
      'Neovim',
      'Lua',
      'LSP',
      'Treesitter',
      'Telescope',
      'Mason',
      'Nvim Tree',
      'Lualine',
      'Git',
    ],
    imgAuthor: 'Luca Bravo',
  },
  {
    name: 'Seo Generator',
    description:
      'A simple tool to generate SEO metadata for web pages, including Open Graph and Twitter Card tags.',
    repoUrl: 'https://github.com/mrluisfer/seo-generator',
    previewUrl: 'https://seo-generator.vercel.app',
    technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Vite'],
    imageCover: '/projects/seo-preview.webp',
    imgAuthor: 'Myriam Jessier',
  },
];
