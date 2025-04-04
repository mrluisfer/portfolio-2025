import SocialLinks from '../social-links';
import ChangingText from './changing-text';

export default function Connect() {
  return (
    <div className="flex items-center flex-col gap-4 pt-14 mb-20">
      <ChangingText />
      <div className="flex items-center gap-6">
        <SocialLinks />
      </div>
    </div>
  );
}
