import React, { useEffect, useRef } from 'react';
import photo from '../assets/profile_pic.webp';
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
    AOS.init({ duration: 1000, once: true });

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
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section id="about" className="bg-white pt-20 pb-0 rounded-xl shadow-lg">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Text */}
        <div className="w-full md:w-7/12">
          <h2 className="font-pixel text-3xl sm:text-4xl md:text-5xl text-accent mb-6">
            Обо мне
          </h2>
          <p className="font-mono text-sm sm:text-base text-gray-700 leading-relaxed">
            Привет! Меня зовут Коновалов Иван, и я ваш проводник в мир программирования.
            Моя цель — не просто научить вас писать код, а показать, насколько увлекательным
            и творческим может быть этот процесс.
          </p>
          <p className="font-mono text-sm sm:text-base text-gray-700 leading-relaxed mt-4">
            Я помогаю школьникам успешно сдавать ЕГЭ и ОГЭ по информатике, а также готовлю
            к олимпиадам. Вместе мы превратим сложные задачи в интересные проекты и достигнем ваших целей.
          </p>
        </div>

        {/* Image */}
        <div className="w-full md:w-5/12 flex justify-center md:justify-end">
          <img
            src={photo}
            alt="Коновалов Иван"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain mx-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
