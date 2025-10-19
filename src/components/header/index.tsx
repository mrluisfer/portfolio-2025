import Container from '../container';
import SocialLinks from '../social-links';
import { ThemeToggle } from '../theme-toggle';
import CurrentPlaying from './current-playing';
import CurrentTime from './current-time';
import Logo from './logo';

export default function Header() {
  return (
    <Container>
      <header className="mx-auto px-2 flex items-center justify-between sm:px-[20px] lg:px-0 flex-wrap">
        <div className={'flex flex-1 justify-between items-center'}>
        <Logo />
          <div className={'block sm:hidden'}>
          <ThemeToggle />
          </div>
        </div>
        <nav className="flex items-center justify-center sm:justify-start lg:justify-end gap-6 flex-wrap">
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
