import clsx from 'clsx';
import { MoveUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import GithubIconButton from '../../../components/github-icon-button';
import { Button } from '../../../components/ui/button';
import type { ProjectType } from './projects-list';

export function truncateText(text: string, maxLength: number): string {
  if (!text) return '';
  return text.length > maxLength ? text.slice(0, maxLength).trimEnd() + '…' : text;
}

export const Project = ({ className, project }: { className?: string; project: ProjectType }) => {
  const projectDescription = truncateText(project.description, 70);

  return (
    <div
      className={clsx(
        'group relative h-[400px] w-[300px] min-w-[300px] overflow-hidden rounded-3xl border',
        !project.imageCover && 'bg-gradient-to-b from-gray-600 to-gray-800',
        className
      )}
    >
      {project.imageCover ? (
        <Image
          src={project.imageCover}
          alt={project.name}
          loading="lazy"
          width={300}
          height={400}
          className="pointer-events-none h-full w-full object-cover object-center select-none"
          draggable={false}
          decoding="async"
        />
      ) : null}

      <div className="absolute top-0 left-0 flex h-full w-full flex-col justify-between rounded-3xl bg-black/60 p-6 transition-all">
        <div className="space-y-3 text-white">
          <motion.h1 className="text-2xl font-bold">
            <a
              href={project.previewUrl || project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.name}
            </a>
          </motion.h1>
          <div className="flex flex-col gap-2 opacity-0 transition group-hover:opacity-100">
            <motion.p className="text-xs">{projectDescription}</motion.p>
          </div>
        </div>
        <div className="space-y-4 opacity-0 transition group-hover:opacity-100">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-xs">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="font-semibold text-gray-300 opacity-70 transition hover:text-gray-100 hover:opacity-100"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <GithubIconButton url={project.repoUrl} />
            {project.previewUrl && (
              <Button asChild size={'icon'} variant={'secondary'}>
                <Link href={project.previewUrl} target="_blank" rel="noopener noreferrer">
                  <MoveUpRight />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>

      {project.imgAuthor && (
        <motion.div className="sr-only text-xs opacity-0 transition group-hover:opacity-100">
          <p className="text-gray-400 transition hover:text-gray-900">
            Thanks! Shoutout to{' '}
            <a
              className="capitalize"
              href={`https://unsplash.com/@${project.imgAuthor.toLowerCase().split(' ').join('-')}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              @{project.imgAuthor}
            </a>
          </p>
        </motion.div>
      )}
    </div>
  );
};
