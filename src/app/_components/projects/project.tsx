import clsx from 'clsx';
import { MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import type { ProjectType } from './projects-list';
import { Badge } from '@/components/ui/badge';
import { GithubDark } from '@/assets/icons/allIcons';

export function truncateText(text: string, maxLength: number): string {
  if (!text) return '';
  return text.length > maxLength ? text.slice(0, maxLength).trimEnd() + '…' : text;
}

export const Project = ({ className, project }: { className?: string; project: ProjectType }) => {
  const projectDescription = truncateText(project.description, 200);

  return (
    <Card
      className={clsx('mx-4 overflow-hidden rounded-3xl border md:mx-auto md:max-w-xl', className)}
    >
      {/* Cover */}
      {project.imageCover ? (
        <div className={'w-full px-4'}>
          <Image
            src={project.imageCover}
            alt={project.name}
            width={200}
            height={50}
            className={'h-48 w-full rounded-2xl object-cover md:h-72'}
          />
        </div>
      ) : null}

      {/* Header */}
      <CardHeader>
        <CardTitle className="text-2xl">
          <a href={project.previewUrl || project.repoUrl} target="_blank" rel="noopener noreferrer">
            {project.name}
          </a>
        </CardTitle>
        {projectDescription && (
          <CardDescription className="text-xs">{projectDescription}</CardDescription>
        )}
      </CardHeader>

      {/* Content */}
      <CardContent className="space-y-4">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
          {project.technologies.map((tech, index) => (
            <Badge key={index} variant={'outline'}>
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className={'flex flex-col'}>
        <div className="flex w-full flex-1 items-center justify-between gap-2">
          <Button size={'icon'} asChild>
            <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <GithubDark />
            </Link>
          </Button>
          {project.previewUrl && (
            <Button asChild size="icon" variant="secondary">
              <Link href={project.previewUrl} target="_blank" rel="noopener noreferrer">
                <MoveUpRight />
              </Link>
            </Button>
          )}
        </div>

        {project.imgAuthor && (
          <p className="text-muted-foreground mt-4 self-start text-xs">
            Photo:{' '}
            <a
              className="underline decoration-dotted underline-offset-2"
              href={`https://unsplash.com/@${project.imgAuthor.toLowerCase().split(' ').join('-')}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              @{project.imgAuthor}
            </a>
          </p>
        )}
      </CardFooter>
    </Card>
  );
};
