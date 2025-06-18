import clsx from 'clsx';
import type { GitHubRepo } from './index.astro';
import { motion } from 'motion/react';
import { getRandomPastelHexColor } from '../../utils/getRandomColor';

export const Project = ({
  className,
  project,
  gradient,
}: {
  className?: string;
  project: GitHubRepo;
  gradient?: string;
}) => {
  const randomBorderColor = getRandomPastelHexColor();

  return (
    <motion.a
      href={project.html_url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${className}-${project.id}`}
      className={clsx(
        className,
        'group bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 transition-colors rounded-2xl shadow-sm hover:shadow-lg border-2 flex flex-col p-4 max-w-[350px] md:max-w-[500px] lg:max-w-none',
        gradient
      )}
      whileHover={{
        borderColor: randomBorderColor,
        scale: 1.05,
      }}
    >
      <div className="mb-1 flex items-center justify-between gap-2">
        <p className="font-bold text-lg truncate uppercase">{project.name}</p>
      </div>
      {project.description && (
        <p className="text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors mb-2 line-clamp-2">
          {project.description}
        </p>
      )}

      {project.topics && project.topics.length > 0 && (
        <ul className="flex flex-wrap gap-1 mb-2">
          {project.topics.slice(0, 7).map((topic) => (
            <Topic key={topic} topic={topic} />
          ))}
        </ul>
      )}

      <div className="flex items-center gap-3 mt-auto pt-2 flex-wrap">
        {project.language && (
          <span
            className={clsx(
              'inline-flex items-center gap-1 text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-2 py-0.5 rounded-lg'
            )}
          >
            <svg width={10} height={10} className="fill-indigo-500">
              <circle cx={5} cy={5} r={5} />
            </svg>
            {project.language}
          </span>
        )}
        {project.stargazers_count > 0 && (
          <span className="inline-flex items-center gap-1 text-xs text-yellow-700 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900 px-2 py-0.5 rounded-lg">
            ⭐ {project.stargazers_count}
          </span>
        )}
        {project.forks_count > 0 && (
          <span className="inline-flex items-center gap-1 text-xs text-green-700 dark:text-green-400 bg-green-300 dark:bg-green-900 px-2 py-0.5 rounded-lg">
            🍴 {project.forks_count}
          </span>
        )}
        {project.open_issues_count > 0 && (
          <span className="inline-flex items-center gap-1 text-xs text-red-700 dark:text-red-400 bg-red-100 dark:bg-red-900 px-2 py-0.5 rounded-lg">
            ❗ {project.open_issues_count}
          </span>
        )}
        {project.license && (
          <span className="inline-flex items-center gap-1 text-xs text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 px-2 py-0.5 rounded-lg">
            📄 {project.license.spdx_id}
          </span>
        )}
        {project.updated_at && (
          <span className="inline-flex items-center gap-1 text-xs text-gray-700 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 px-2 py-0.5 rounded-lg">
            🕒 Updated at: {new Date(project.updated_at).toLocaleDateString()}
          </span>
        )}
      </div>
    </motion.a>
  );
};

const Topic = ({ topic }: { topic: string }) => {
  return (
    <motion.li
      key={topic}
      className="text-xs text-neutral-700 hover:text-neutral-900 px-2 py-1 rounded-full border"
      style={{
        backgroundColor: getRandomPastelHexColor(),
      }}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      aria-label={`topic-${topic}`}
    >
      {topic}
    </motion.li>
  );
};
