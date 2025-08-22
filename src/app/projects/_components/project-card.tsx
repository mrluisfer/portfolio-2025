import { Badge } from '@/components/ui/badge';
import { GitHub } from '@/assets/icons/allIcons';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ProjectType } from '@/components/projects/projects-list';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ProjectCard({ project }: { project: ProjectType }) {
  const maxChips = 4;
  const extra = Math.max(0, (project.technologies?.length ?? 0) - maxChips);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <Card className="overflow-hidden border-neutral-200 pt-0">
        {/* Cover */}
        <CardContent className="p-0">
          <motion.div whileHover={{ scale: 1.01 }}>
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src={project.imageCover ?? '/placeholder.svg'}
                alt={project.name}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
                priority={false}
              />
            </div>
          </motion.div>
        </CardContent>

        {/* Meta */}
        <CardHeader className="space-y-2">
          <CardTitle className="flex items-center justify-between gap-3 text-base">
            <Link
              href={project.previewUrl || project.repoUrl}
              target="_blank"
              className="inline-flex items-center gap-2 text-neutral-900 decoration-neutral-300 underline-offset-4 hover:underline"
            >
              {project.name} <ExternalLink size={16} className="text-neutral-500" />
            </Link>

            <Button variant={'default'}>
              <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <GitHub />
              </Link>
            </Button>
          </CardTitle>

          <p className="line-clamp-3 text-sm text-neutral-600">{project.description}</p>

          <div className="mt-2 flex flex-wrap gap-1.5">
            {project.technologies?.slice(0, maxChips).map((t) => (
              <Badge key={t} variant="secondary">
                {t}
              </Badge>
            ))}
            {extra > 0 && (
              <Badge variant="outline" className="text-neutral-600">
                +{extra}
              </Badge>
            )}
          </div>
        </CardHeader>
      </Card>
    </motion.div>
  );
}
