import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero: React.FC = () => {
  const [animatedWord, setAnimatedWord] = useState('');
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const words = ['информатике', 'олимпиадам', 'программированию'];
    AOS.init({
      duration: 1000,
      once: true,
    });

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const type = () => {
      const currentWord = words[wordIndex];
      setAnimatedWord(currentWord.substring(0, charIndex));

      let typeSpeed = isDeleting ? 60 : 100;

      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typeSpeed = 2500;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
      }

      if (!isDeleting) {
        charIndex++;
      } else {
        charIndex--;
      }
      
      timeoutId = setTimeout(type, typeSpeed);
    };

    timeoutId = setTimeout(type, 120);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section ref={heroRef} id="hero" className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden p-4">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-in">
        <div className="min-h-[120px] sm:min-h-[140px] flex flex-col justify-center items-center mb-8">
          <h1
            className="font-pixel text-lg sm:text-2xl md:text-3xl font-bold text-gray-600"
            data-aos="fade-down"
          >
            Репетитор по
          </h1>
          <h2 
            className="font-pixel text-lg sm:text-2xl md:text-3xl font-bold text-accent"
            data-aos="fade-down"
          >
            {animatedWord}
            <span className="animate-blink">|</span>
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4" data-aos="fade-up" data-aos-delay="400">
          <a 
            href="#services" 
            className="font-mono text-sm sm:text-base text-accent bg-yellow/80 px-4 py-2 rounded-full hover:bg-yellow transition-colors"
          >
            #ЕГЭ
          </a>
          <a 
            href="#services"
            className="font-mono text-sm sm:text-base text-accent bg-yellow/80 px-4 py-2 rounded-full hover:bg-yellow transition-colors"
          >
            #ОГЭ
          </a>
          <a 
            href="#services"
            className="font-mono text-sm sm:text-base text-accent bg-yellow/80 px-4 py-2 rounded-full hover:bg-yellow transition-colors"
          >
            #Python
          </a>
        </div>
        <a href="#about" className="flex flex-col items-center text-gray-500 no-underline z-10 animate-bounce hover:text-accent mt-8" aria-label="Листать вниз">
          <span className="font-mono text-xs sm:text-sm mb-2">Далее</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
