import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface HeroProps {
  setShouldShowTitle: (show: boolean) => void;
}

const Hero: React.FC<HeroProps> = ({ setShouldShowTitle }) => {
  const [dynamicText, setDynamicText] = useState('');
  const [isTitleVisible, setIsTitleVisible] = useState(true);
  const dynamicTextRef = useRef<HTMLSpanElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const words = ['программированию', 'информатике', 'олимпиадам'];

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShouldShowTitle(!entry.isIntersecting);
        setIsTitleVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, [setShouldShowTitle]);

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        setDynamicText(currentWord.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setDynamicText(currentWord.substring(0, charIndex + 1));
        charIndex++;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => (isDeleting = true), 3000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    };

    const typingInterval = setInterval(type, isDeleting ? 50 : 80);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div ref={heroRef} className="min-h-[calc(100vh-200px)] flex flex-col justify-center items-center text-center">
      <div className="container mx-auto px-4">
        <h1
          id="hero-title"
          className={`font-pixel text-clamp-2xl mb-6 text-text-primary min-h-[86px] transition-opacity duration-500 ${
            isTitleVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="static-text">Репетитор по </span>
          <span ref={dynamicTextRef} className="dynamic-text">{dynamicText}</span>
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-5 mt-7">
          <a href="#services" className="cta-button" data-aos="fade-up" data-aos-delay="1500">ЕГЭ</a>
          <a href="#services" className="cta-button" data-aos="fade-up" data-aos-delay="1600">ОГЭ</a>
          <a href="https://t.me/knvlvivn?text=Здравствуйте!%20Я%20заинтересован(а)%20в%20ваших%20услугах." target="_blank" rel="noopener noreferrer" className="cta-button" data-aos="fade-up" data-aos-delay="1700">Связаться со мной</a>
        </div>
        <a href="#about" className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center text-text-primary no-underline">
          <span className="font-mono text-xs mb-2.5">Листать вниз</span>
          <span className="w-0 h-0 border-l-8 border-r-8 border-t-10 border-transparent border-t-accent animate-bounce"></span>
        </a>
      </div>
    </div>
  );
};

export default Hero;