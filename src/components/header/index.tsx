import Container from '../container';
import SocialLinks from '../social-links';
import { ThemeToggle } from '../theme-toggle';
import CurrentPlaying from './current-playing';
import CurrentTime from './current-time';
import Logo from './logo';

export default function Header() {
  return (
    <Container>
      <header className="mx-auto flex items-center justify-between sm:px-[20px] lg:px-0">
        <Logo />
        <nav className="flex items-center gap-6">
          <CurrentPlaying />
          <SocialLinks />
          <ThemeToggle />
          <CurrentTime />
        </nav>
      </header>
    </Container>
  );
}
