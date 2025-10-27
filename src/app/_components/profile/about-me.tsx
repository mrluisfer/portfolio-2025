import { Badge } from '@/components/ui/badge';
import { motion } from 'motion/react';
import { type ReactNode } from 'react';
import { CONTENT_TEXT_COLOR } from '.';
import Details from './details';

// Highlight component for emphasized text
const Highlight = ({ children }: { children: ReactNode }) => (
  <span className="font-semibold text-gray-900 dark:text-white">{children}</span>
);

const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="flex flex-col justify-between gap-5 pt-4 sm:gap-6 sm:pt-5 lg:flex-row lg:items-center lg:gap-8"
    >
      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="w-full lg:max-w-[550px] xl:max-w-[600px]"
      >
        {/* Header */}
        <div className="mb-3 flex items-center gap-3 sm:mb-4">
          <h3 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">About me</h3>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-gray-300 to-transparent" />
        </div>

        {/* Biography */}
        <div className="space-y-3 sm:space-y-4">
          <motion.p
            className={`${CONTENT_TEXT_COLOR} text-sm leading-relaxed sm:text-base`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Highlight>Frontend Engineer</Highlight> with{' '}
            <Highlight>4 years of experience</Highlight> in developing and deploying scalable,
            high-performance web applications. Skilled in{' '}
            <Highlight>teamwork and communication</Highlight> to deliver maintainable, high-quality
            solutions.
          </motion.p>

          <motion.p
            className={`${CONTENT_TEXT_COLOR} text-sm leading-relaxed sm:text-base`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Passionate about <Highlight>learning and professional growth</Highlight>, constantly
            seeking opportunities to expand my skills and contribute to innovative projects.
          </motion.p>
        </div>

        {/* Key traits - Subtle badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-4 flex flex-wrap gap-2 sm:mt-5"
        >
          {['Team Player', 'Detail-Oriented', 'Fast Learner', 'Problem Solver'].map(
            (trait, index) => (
              <Badge key={trait} variant={'outline'}>
                {trait}
              </Badge>
            )
          )}
        </motion.div>
      </motion.div>

      {/* Details Section */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="w-full lg:w-auto"
      >
        <Details />
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
