import Header from '../header';
import Technologies from './technologies';
import Title from './Title.tsx';

export default function Hero() {
  return (
    <div className="hero-pattern pt-5 h-[400px]">
      <Header />
      <div className='relative'>
        <Technologies />
        <Title />
      </div>
    </div>
  );
}