import { CONTENT_TEXT_COLOR } from '.';
import Details from './details';

const AboutMe = () => {
  return (
    <div className="pt-5 flex lg:items-center justify-between gap-5 flex-col lg:flex-row">
      <div className="max-w-[550px]">
        <h3 className="text-xl font-bold pb-2">About me</h3>
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
