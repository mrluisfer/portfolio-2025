import { CONTENT_TEXT_COLOR } from '.';
import Details from './details';

const AboutMe = () => {
  return (
    <div className="flex flex-col justify-between gap-5 pt-5 lg:flex-row lg:items-center">
      <div className="max-w-[550px]">
        <h3 className="pb-2 text-xl font-bold">About me</h3>
        <p className={`${CONTENT_TEXT_COLOR}`}>
          Frontend Engineer with 4 years of experience in developing and deploying scalable,
          high-performance web applications. Skilled in teamwork and communication to deliver
          maintainable, high-quality solutions. Passionate about learning and professional growth.
        </p>
      </div>
      <Details />
    </div>
  );
};

export default AboutMe;
