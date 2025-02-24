import Header from '../header';
import Technologies from './technologies';
import Title from './title';
import 'src/styles/hero-pattern.scss';

export default function Hero() {
  return (
    <div className="hero-pattern h-[600px] pt-5 inset-shadow-white">
      <Header />
      <div className="relative">
        <Technologies />
        <Title />
      </div>
    </div>
  );
}
