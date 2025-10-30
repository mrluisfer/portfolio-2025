'use client';

import { ProjectType } from '@/app/_components/projects/projects-list';
import { GithubDark } from '@/assets/icons/allIcons';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { getSlugFromString } from '@/utils/get-slug-from-string';
import { BookMarkedIcon, ExternalLink } from 'lucide-react';
import { MotionConfig, motion, useReducedMotion, type Variants } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]; // easeOut moderno

export function ProjectCard({ project }: { project: ProjectType }) {
  const maxChips = 4;
  const extra = Math.max(0, (project.technologies?.length ?? 0) - maxChips);
  const prefersReducedMotion = useReducedMotion();

  // Variants sin 'transition' para evitar unions raras de tipos
  const itemVariants: Variants = prefersReducedMotion
    ? {
        hidden: { opacity: 1, y: 0 },
        show: { opacity: 1, y: 0 },
      }
    : {
        hidden: { opacity: 0, y: 6 },
        show: { opacity: 1, y: 0 },
      };

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: prefersReducedMotion ? {} : { staggerChildren: 0.06, delayChildren: 0.08 },
    },
  };

  return (
    <MotionConfig reducedMotion={prefersReducedMotion ? 'always' : 'never'}>
      <motion.article
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
        transition={{ duration: 0.35, ease: EASE }}
        className="relative"
      >
        <Card className="group overflow-hidden border-neutral-200 pt-0 transition-all duration-300 hover:-translate-y-[2px] hover:border-neutral-300 hover:shadow-lg/40 dark:border-neutral-800 dark:hover:border-neutral-700">
          {/* Cover */}
          <CardContent className="p-0">
            <motion.div
              whileHover={prefersReducedMotion ? undefined : { scale: 1.01 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.995 }}
              transition={{ type: 'tween', duration: 0.22, ease: EASE }}
              className="will-change-transform"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={project.imageCover ?? '/placeholder.svg'}
                  alt={project.name}
                  fill
                  className="object-cover"
                  sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw"
                  priority={false}
                />
              </div>
            </motion.div>
          </CardContent>

          {/* Meta */}
          <CardHeader className="space-y-2">
            <CardTitle className="flex flex-col items-start justify-between gap-3 text-base sm:flex-row sm:items-center">
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
                transition={{ duration: 0.28, ease: EASE }}
              >
                <Link
                  href={project.previewUrl || project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xl text-neutral-900 decoration-neutral-300 underline-offset-4 transition-colors hover:underline focus-visible:underline dark:text-neutral-300"
                >
                  {project.name} <ExternalLink size={16} className="text-neutral-500" />
                </Link>
              </motion.div>

              <div className="flex items-center justify-end gap-6">
                <Tooltip delayDuration={400}>
                  <TooltipTrigger>
                    <motion.div
                      variants={itemVariants}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
                      transition={{ duration: 0.28, ease: EASE }}
                    >
                      <Button size={'icon'} asChild variant={'outline'}>
                        <Link href={`/projects/${getSlugFromString(project.name)}`}>
                          <BookMarkedIcon />
                        </Link>
                      </Button>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-white">Read technical story about {project.name}</p>
                  </TooltipContent>
                </Tooltip>

                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
                  transition={{ duration: 0.28, ease: EASE }}
                >
                  <Button size="icon" asChild>
                    <Link
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open repository on GitHub"
                      className="rounded-md focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:outline-none dark:focus-visible:ring-neutral-600"
                    >
                      <GithubDark />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </CardTitle>

            <motion.p
              className="line-clamp-3 text-sm text-neutral-600 transition-colors dark:text-neutral-500 dark:group-hover:text-neutral-400"
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
              transition={{ duration: 0.28, ease: EASE }}
            >
              {project.description}
            </motion.p>

            <motion.div
              className="mt-2 flex flex-wrap gap-1.5"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
            >
              {project.technologies?.slice(0, maxChips).map((t) => (
                <motion.div
                  key={t}
                  variants={itemVariants}
                  transition={{ duration: 0.24, ease: EASE }}
                >
                  <Badge variant="secondary" className="will-change-transform">
                    {t}
                  </Badge>
                </motion.div>
              ))}
              {extra > 0 && (
                <motion.div variants={itemVariants} transition={{ duration: 0.24, ease: EASE }}>
                  <Badge variant="outline" className="text-neutral-600">
                    +{extra}
                  </Badge>
                </motion.div>
              )}
            </motion.div>
          </CardHeader>
        </Card>
      </motion.article>
    </MotionConfig>
  );
}
