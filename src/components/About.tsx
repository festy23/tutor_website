import React, { useEffect, useRef } from 'react';
import photo from '../assets/photo.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About: React.FC = () => {
  const typewriterRef = useRef<HTMLHeadingElement>(null);

  const typeWriter = (element: HTMLElement, text: string, speed = 120) => {
    element.innerHTML = '';
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && typewriterRef.current) {
            const text = typewriterRef.current.dataset.text || '';
            typeWriter(typewriterRef.current, text);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );

    const currentRef = typewriterRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            ref={typewriterRef}
            className="font-pixel text-3xl sm:text-4xl md:text-5xl text-accent"
            data-text="Обо мне"
          ></h2>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="md:w-1/3 text-center" data-aos="fade-right">
            <img 
              src={photo} 
              alt="Коновалов Иван" 
              className="w-48 h-48 sm:w-64 sm:h-64 object-cover border-4 border-gray-200 p-2 rounded-full shadow-lg mx-auto bg-white" 
              loading="lazy" 
            />
          </div>
          <div className="md:w-2/3" data-aos="fade-left">
            <p className="font-mono text-base sm:text-lg text-left leading-relaxed text-gray-700">
              Привет! Меня зовут Коновалов Иван, и я ваш проводник в мир программирования. 
              Моя цель — не просто научить вас писать код, а показать, насколько увлекательным и творческим может быть этот процесс.
            </p>
            <p className="font-mono text-base sm:text-lg text-left leading-relaxed text-gray-700 mt-4">
              Я помогаю школьникам успешно сдавать ЕГЭ и ОГЭ по информатике, а также готовлю к олимпиадам. 
              Вместе мы превратим сложные задачи в интересные проекты и достигнем ваших целей.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;