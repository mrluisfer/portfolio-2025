'use client';
import { NAVIGATION_NAMES } from '@/constants/navigation-names';
import Container from '../../../components/container';
import AboutMe from './about-me';
import Experience from './experience';
import Header from './header';

export const CONTENT_TEXT_COLOR =
  'text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors leading-[1.8]';

export default function Profile() {
  return (
    <>
      <Container className="px-[30px] pt-24 pb-24 lg:px-0" asChild>
        <div id={NAVIGATION_NAMES.PROFILE}>
          <Header />
          <Experience />
          <hr />
          <AboutMe />
        </div>
      </Container>
      <hr />
    </>
  );
}
