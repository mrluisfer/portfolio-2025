'use client';

import dynamic from 'next/dynamic';
import Container from '../container';
import SocialLinks from '../social-links';
import SocialLink from '../social-links/link';
import CurrentPlaying from './current-playing';
import CurrentTime from './current-time';
// import Logo from './logo';
const Logo = dynamic(() => import('./logo'), { ssr: false });

export default function Header() {
  return (
    <Container>
      <header className="mx-auto flex items-center justify-between">
        <Logo />
        <nav className="flex items-center gap-6">
          <CurrentPlaying />
          <SocialLinks />
          <CurrentTime />
        </nav>
      </header>
    </Container>
  );
}
