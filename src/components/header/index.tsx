import HeaderLink from './header-link';
import HEADER_LINKS from './header-link/links';
import Logo from './logo';
import CurrentTime from './current-time';

export default function Header() {
  return (
    <header className="flex items-center justify-between max-w-5xl mx-auto">
      <Logo />
      <nav className="flex items-center gap-8">
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
