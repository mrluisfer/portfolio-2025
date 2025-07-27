'use client';
import SocialLinks from '../social-links';
import ChangingText from './changing-text';

export default function Connect() {
  return (
    <div className="mb-32 flex flex-col items-center gap-4 pt-14">
      <ChangingText />
      <div className="flex items-center gap-6">
        <SocialLinks />
      </div>
    </div>
  );
}
