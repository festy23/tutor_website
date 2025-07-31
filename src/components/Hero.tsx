import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useAnimatedWords } from '../hooks/useAnimatedWords';
import sparkleIcon from '../assets/silver_sparkle.webp';

const animatedWords = ['информатике', 'олимпиадам', `программи-
рованию`];
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
        <div className="flex justify-center items-center gap-4 sm:gap-6 mb-8 sm:mb-10">
          <img
            src={sparkleIcon}
            alt="Sparkle"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain"
            data-aos="fade-right"
          />
          <div className="flex flex-col" data-aos="fade-left">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-accent whitespace-pre-wrap">
              репетитор по
            </h1>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-accent h-[96px] sm:h-[120px] md:h-[160px] flex items-center whitespace-pre-wrap">
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