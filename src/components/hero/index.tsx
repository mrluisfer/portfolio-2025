'use client';

import Header from '../header';
import Technologies from './technologies';
import Title from './title';
import '@/styles/hero-pattern.scss';

export default function Hero() {
  return (
    <div className="hero-pattern relative h-[600px] pt-5 inset-shadow-white">
      <Header />
      <div className="h-full w-full">
        <Technologies />
        <Title />
      </div>
    </div>
  );
}
