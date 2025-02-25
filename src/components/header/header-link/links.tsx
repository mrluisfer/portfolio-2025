import { ReactNode } from 'react';
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { FiGithub } from 'react-icons/fi';
import { PiDevToLogo } from 'react-icons/pi';
import SocialMediaLinks from '../../../constants/social-media-links';

type HeaderLink = {
  href: string;
  alt: string;
  Icon: ReactNode;
};

const HEADER_LINKS: Array<HeaderLink> = [
  {
    href: SocialMediaLinks.TWITTER,
    alt: 'Twitter: @mrLuisFer',
    Icon: <FaXTwitter />,
  },
  {
    href: SocialMediaLinks.GITHUB,
    alt: 'GitHub: mrLuisFer',
    Icon: <FiGithub />,
  },
  {
    href: SocialMediaLinks.LINKEDIN,
    alt: 'LinkedIn: mrLuisFer',
    Icon: <FaLinkedinIn />,
  },
  {
    href: SocialMediaLinks.DEVTO,
    alt: 'Dev.to: mrLuisFer',
    Icon: <PiDevToLogo />,
  },
];

export default HEADER_LINKS;
