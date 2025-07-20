import React, { useEffect, useRef } from 'react';
import photo from '../assets/photo.jpg';

const About: React.FC = () => {
  const typewriterRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const typeWriter = (element: HTMLElement, speed = 120) => {
      if (element.dataset.typewriterTimer) {
        clearInterval(parseInt(element.dataset.typewriterTimer));
      }

      const text = element.dataset.text || '';
      element.innerHTML = '';
      element.style.visibility = 'visible';
      let i = 0;

      const timer = setInterval(() => {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
        } else {
          clearInterval(timer);
          element.dataset.typewriterTimer = undefined;
        }
      }, speed);

      element.dataset.typewriterTimer = timer.toString();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (typewriterRef.current) {
              typeWriter(typewriterRef.current);
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    if (typewriterRef.current) {
      observer.observe(typewriterRef.current);
    }

    return () => {
      if (typewriterRef.current) {
        observer.unobserve(typewriterRef.current);
      }
    };
  }, []);

  return (
    <div className="text-center">
      <h2
        ref={typewriterRef}
        className="font-pixel text-clamp-xl mb-12 uppercase inline-block relative text-accent"
        data-text="Обо мне"
      ></h2>
      <div className="about-content flex flex-col md:flex-row items-center gap-8" data-aos="fade-up">
        <img src={photo} alt="Коновалов Иван" className="w-[150px] h-[150px] object-cover border-3 border-accent p-1.5" />
        <p className="text-left max-w-3xl text-lg">
          Привет, меня зовут Коновалов Иван - я репетитор по информатике. Помогу вам в достижении нужных баллов ЕГЭ, сдаче ОГЭ, покажу что программирование может быть не только полезным занятием, но также интересным хобби
        </p>
      </div>
    </div>
  );
};

export default About;