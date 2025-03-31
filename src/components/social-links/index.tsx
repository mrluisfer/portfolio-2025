import SocialLink from './link';
import SOCIAL_LINKS from './links';

export default function SocialLinks() {
  return (
    <>
      {SOCIAL_LINKS.map((link, id) => {
        const Icon = link.Icon;
        return (
          <SocialLink key={id} href={link.href} alt={link.alt}>
            {Icon}
          </SocialLink>
        );
      })}
    </>
  );
}
