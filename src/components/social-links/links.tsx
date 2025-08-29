import {
  Bento,
  Dailydev,
  DailydevDark,
  Devto,
  DevtoDark,
  GitHub,
  GithubDark,
  GitLab,
  LinkedIn,
  Twitter,
} from '@/assets/icons/allIcons';
import { type ReactNode } from 'react';
import SocialMediaLinks from '../../constants/social-media-links';

type SocialLink = {
  href: string;
  alt: string;
  LightIcon: ReactNode;
  DarkIcon?: ReactNode;
};

const SOCIAL_LINKS: Array<SocialLink> = [
  {
    href: SocialMediaLinks.TWITTER,
    alt: 'Twitter: @mrLuisFer',
    LightIcon: <Twitter />,
  },
  {
    href: SocialMediaLinks.GITHUB,
    alt: 'GitHub: mrLuisFer',
    LightIcon: <GitHub />,
    DarkIcon: <GithubDark />,
  },
  {
    href: SocialMediaLinks.LINKEDIN,
    alt: 'LinkedIn: mrLuisFer',
    LightIcon: <LinkedIn />,
  },
  {
    href: SocialMediaLinks.BENTO,
    alt: 'Bento: mrLuisFer',
    LightIcon: <Bento />,
  },
  {
    href: SocialMediaLinks.DEVTO,
    alt: 'Dev.to: mrLuisFer',
    LightIcon: <Devto />,
    DarkIcon: <DevtoDark />,
  },
  {
    href: SocialMediaLinks.GITLAB,
    alt: 'GitLab: mrLuisFer',
    LightIcon: <GitLab />,
  },
  {
    href: SocialMediaLinks.DAILYDEV,
    alt: 'Daily.dev: mrLuisFer',
    LightIcon: <Dailydev />,
    DarkIcon: <DailydevDark />,
  },
];

export default SOCIAL_LINKS;
