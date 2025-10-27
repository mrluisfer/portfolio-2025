import Container from '../container';
import SocialLinks from '../social-links';
import { ThemeToggle } from '../theme-toggle';
import CurrentPlaying from './current-playing';
import CurrentTime from './current-time';
import Logo from './logo';

export default function Header() {
  return (
    <Container>
      <header className="mx-auto flex flex-wrap items-center justify-between px-2 sm:px-[20px] lg:px-0">
        <div className={'flex flex-1 items-center justify-between'}>
          <Logo />
          <div className={'block sm:hidden'}>
            <ThemeToggle />
          </div>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-6 sm:justify-start lg:justify-end mx-auto sm:mx-0">
          <CurrentPlaying />
          <SocialLinks />
          <div className={'hidden sm:block'}>
            <ThemeToggle />
          </div>
          <CurrentTime />
        </nav>
      </header>
    </Container>
  );
}
