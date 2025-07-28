import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useAnimatedWords } from '../hooks/useAnimatedWords';

const animatedWords = ['информатике', 'олимпиадам', 'программиро­ванию'];
const tags = ['#ЕГЭ', '#ОГЭ', '#Python'];

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const animatedWord = useAnimatedWords({
    words: animatedWords,
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section ref={heroRef} id="hero" className="min-h-screen flex flex-col items-center text-center relative overflow-hidden p-4 pt-32 sm:pt-40">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10 flex flex-col items-center" data-aos="fade-in">
        <div className="min-h-[100px] sm:min-h-[140px] flex flex-col justify-center items-center mb-8">
          <h1
            className="font-pixel text-2xl sm:text-4xl md:text-5xl font-bold text-gray-600"
            data-aos="fade-down"
          >
            Репетитор по <span className="text-accent">{animatedWord}</span>
            <span className="animate-blink text-gray-400">|</span>
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4" data-aos="fade-up" data-aos-delay="400">
          {tags.map((tag) => (
            <a 
              key={tag}
              href="#services" 
              className={`font-mono text-sm sm:text-base px-6 py-3 rounded-full transition-colors duration-300 relative overflow-hidden ${
                tag === '#Python' ? 'bg-brand-red text-white' : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              {tag}
            </a>
          ))}
        </div>
        <a href="#about" className="mt-12 flex flex-col items-center text-gray-500 no-underline z-10 group" aria-label="Листать вниз">
          <span className="font-mono text-sm sm:text-base mb-2 transition-transform duration-300 group-hover:translate-y-1">Далее</span>
          <svg className="w-8 h-8 transition-transform duration-300 group-hover:translate-y-1 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;