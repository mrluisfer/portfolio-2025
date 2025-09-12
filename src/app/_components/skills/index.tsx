'use client';

import '@/styles/general-pattern.scss';
import '@/styles/technologies-shadow.scss';

import { motion } from 'motion/react';

import Container from '@/components/container';
import Title from '@/components/title';
import { NAVIGATION_NAMES } from '@/constants/navigation-names';
import { useDeviceResources } from '@/hooks/use-device-resources';
import { cn } from '@/lib/utils';
import Technologies from './technologies';

export default function Skills() {
  const deviceResources = useDeviceResources();

  return (
    <Container>
      <div
        className={cn(
          'technologies-shadow-y my-6 p-10',
          deviceResources?.deviceMemoryGB !== undefined && deviceResources.deviceMemoryGB > 8
            ? 'general-pattern'
            : ''
        )}
        id={NAVIGATION_NAMES.SKILLS}
      >
        <Title>
          <motion.h1
            className="absolute -top-[30px] z-20 drop-shadow-2xl"
            initial={{ opacity: 0.8 }}
            whileInView={{ opacity: 1 }}
          >
            Building projects with the most powerful and trending frontend and backend technologies.
          </motion.h1>
        </Title>
        <Technologies />
      </div>
    </Container>
  );
}
