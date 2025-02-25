'use client';

import dynamic from 'next/dynamic';
import CurrentPlaying from './current-playing';
import CurrentTime from './current-time';
import HeaderLink from './header-link';
import HEADER_LINKS from './header-link/links';
// import Logo from './logo';
const Logo = dynamic(() => import('./logo'), { ssr: false });

export default function Header() {
  return (
    <header className="mx-auto flex max-w-5xl items-center justify-between">
      <Logo />
      <nav className="flex items-center gap-6">
        <CurrentPlaying />
        {HEADER_LINKS.map((link, id) => {
          const Icon = link.Icon;
          return (
            <HeaderLink key={id} href={link.href} alt={link.alt}>
              {Icon}
            </HeaderLink>
          );
        })}
        <CurrentTime />
      </nav>
    </header>
  );
}
