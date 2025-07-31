import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useAnimatedWords } from '../hooks/useAnimatedWords';
import sparkleIcon from '../assets/silver_sparkle.webp';

const animatedWords = ['информатике', 'олимпиадам', 'программированию'];
const tags = ['#ЕГЭ', '#ОГЭ', '#Python'];

const Hero: React.FC = () => {
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
    <section id="hero" className="flex flex-col items-center justify-center text-center relative overflow-hidden px-4 pt-24 sm:pt-32 pb-16 sm:pb-20">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 flex flex-col items-center" data-aos="fade-in">
        <div className="flex flex-col justify-center items-center mb-8 sm:mb-10">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-3 sm:gap-4">
              <img src={sparkleIcon} alt="Sparkle" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 transform transition-transform duration-300 hover:scale-110" />
              <h1
                className="font-mono text-lg sm:text-xl md:text-2xl font-bold text-gray-600 lowercase"
                data-aos="fade-down"
              >
                репетитор по
              </h1>
            </div>
            <h2
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-accent whitespace-pre-line flex items-center justify-center h-[60px] sm:h-[80px] md:h-[100px] lg:h-[120px]"
              data-aos="fade-up"
            >
              {animatedWord}
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3" data-aos="fade-up" data-aos-delay="400">
          {tags.map((tag) => (
            <a
              key={tag}
              href="#services"
              className={`font-mono text-xs sm:text-sm px-4 py-2 sm:px-5 sm:py-2.5 rounded-full transition-all duration-300 relative overflow-hidden shadow-md transform hover:scale-105 ${
                tag === '#Python' ? 'bg-brand-red text-white hover:bg-red-700' : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              {tag}
            </a>
          ))}
        </div>
        <a href="#about" className="mt-16 sm:mt-20 flex flex-col items-center text-gray-500 no-underline z-10 group" aria-label="Листать вниз">
          <span className="font-mono text-xs sm:text-sm mb-2 transition-transform duration-300 group-hover:translate-y-1">Далее</span>
          <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-y-1 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;