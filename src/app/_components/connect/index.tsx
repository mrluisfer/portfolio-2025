'use client';
import { NAVIGATION_NAMES } from '@/constants/navigation-names';
import SocialLinks from '../../../components/social-links';
import ChangingText from './changing-text';

export default function Connect() {
  return (
    <div className="mb-32 flex flex-col items-center gap-4 pt-14" id={NAVIGATION_NAMES.CONNECT}>
      <ChangingText />
      <div className="flex items-center gap-6">
        <SocialLinks />
      </div>
    </div>
  );
}
