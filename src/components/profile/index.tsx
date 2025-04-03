import { FaCheck } from 'react-icons/fa';
import Container from '../container';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import Details from './details';

export const CONTENT_TEXT_COLOR = 'text-neutral-500 hover:text-neutral-600 transition-colors';

export default function Profile() {
  return (
    <>
      <Container className="pt-32 pb-24">
        <header className="flex items-center gap-7">
          <div className="relative">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/65029792?v=4"
                alt="@mrluisfer"
              />
              <AvatarFallback>LA</AvatarFallback>
            </Avatar>
            <div className="bg-blue-400 rounded-full absolute -bottom-1 -right-1 p-2 text-white hover:shadow-blue-300 hover:shadow-md transition-all">
              <FaCheck />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">Luis Alvarez</h1>
            <p className={`${CONTENT_TEXT_COLOR}`}>I'm a Frontend Developer based in Mexico</p>
          </div>
        </header>
        <div className="pt-10 pb-5">
          <h2 className="text-xl font-bold pb-2">Experience</h2>
          <p className={`${CONTENT_TEXT_COLOR}`}>
            I developed a unified platform to optimize products and accelerate delivery, improved
            performance by 60% through API migration, and enhanced web performance by implementing
            best practices. I contributed to integrating tools like Sentry for API monitoring and
            participated in code reviews to ensure quality and scalability. I worked on integrating
            cookies for customer tracking, contributed to Next.js and HubSpot integration for the
            company’s blog, and helped refactor the landing page with modern technologies, ensuring
            scalability. I also contributed to maintaining and improving the landing page and other
            products, following best practices and collaborating closely with the team to ensure
            timely delivery using agile methodologies.
          </p>
        </div>
        <hr />
        <div className="pt-5 flex items-center justify-between gap-5">
          <div className="max-w-[550px]">
            <h3 className="text-xl font-bold pb-2">About me</h3>
            <p className={`${CONTENT_TEXT_COLOR}`}>
              Frontend Engineer with 4 years of experience in developing and deploying scalable,
              high-performance web applications. Skilled in teamwork and communication to deliver
              maintainable, high-quality solutions. Passionate about learning and professional
              growth.
            </p>
          </div>
          <div>
            <Details
              email="mrluisfeer@gmai.com"
              location="Mexico"
              github="mrluisfer"
              website="https://mrluisfer.vercel.app"
            />
          </div>
        </div>
      </Container>
      <hr />
    </>
  );
}
