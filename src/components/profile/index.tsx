import Container from '../container';
import AboutMe from './about-me';
import Experience from './experience';
import Header from './header';

export const CONTENT_TEXT_COLOR =
  'text-neutral-500 hover:text-neutral-700 transition-colors leading-[1.8]';

export default function Profile() {
  return (
    <>
      <Container className="pt-24 pb-24">
        <Header />
        <Experience />
        <hr />
        <AboutMe />
      </Container>
      <hr />
    </>
  );
}
