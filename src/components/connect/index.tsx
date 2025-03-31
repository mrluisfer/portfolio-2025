import SocialLinks from '../social-links';

export default function Connect() {
  return (
    <div className="flex items-center flex-col gap-4 pt-5 mb-20">
      <p className="font-medium text-neutral-500">Feel free to connect with me:</p>
      <div className="flex items-center gap-6">
        <SocialLinks />
      </div>
    </div>
  );
}
