import clsx from 'clsx';
import { motion } from 'motion/react';
import type { ProjectType } from './projects-list';
import { cn } from '@/lib/utils';
import { MoveDownRight } from 'lucide-react';

export function truncateText(text: string, maxLength: number): string {
  if (!text) return '';
  return text.length > maxLength ? text.slice(0, maxLength).trimEnd() + '…' : text;
}

export const Project = ({
  className,
  project,
  gradient,
}: {
  className?: string;
  project: ProjectType;
  gradient?: string;
}) => {
  const projectDescription = truncateText(project.description, 70);

  return (
    <div className="group">
      <motion.div
        className={cn(
          'h-[400px] w-[300px] min-w-[300px] rounded-3xl border',
          `bg-cover bg-center bg-no-repeat`
        )}
        style={{
          backgroundImage: `url(${project.imageCover})`,
        }}
      >
        <div className="flex h-full w-full flex-col justify-between rounded-3xl bg-black/60 p-6 transition-all">
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
              <a
                className="rounded-2xl bg-gray-400 px-2 py-1 text-xs text-gray-900 transition hover:bg-gray-100 hover:shadow-md"
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
              {project.previewUrl && (
                <a
                  href={project.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 transition hover:scale-110 hover:text-gray-100"
                >
                  <MoveDownRight />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
      {project.imgAuthor ? (
        <motion.div className="px-2 text-xs opacity-0 transition group-hover:opacity-100">
          <p className="text-gray-400 transition hover:text-gray-900">
            Thanks!, Shutout to{' '}
            <a
              className="capitalize"
              href={`https://unsplash.com/@${project?.imgAuthor.toLowerCase().split(' ').join('-')}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              @{project.imgAuthor}
            </a>
          </p>
        </motion.div>
      ) : null}
    </div>
  );
};
