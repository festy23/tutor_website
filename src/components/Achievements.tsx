import React, { useEffect, useRef } from 'react';

const Achievements: React.FC = () => {
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
        data-text="Почему я?"
      ></h2>
      <ul className="list-none p-0 max-w-3xl mx-auto text-left">
        <li className="mb-4 pl-9 relative" data-aos="fade-right" data-aos-delay="100">
          <span className="absolute left-0 top-0 text-accent font-pixel">{'>'}</span>
          Обучил 20+ учеников со средним баллом 90+
        </li>
        <li className="mb-4 pl-9 relative" data-aos="fade-right" data-aos-delay="200">
          <span className="absolute left-0 top-0 text-accent font-pixel">{'>'}</span>
          Имею опыт работы в IT-индустрии
        </li>
        <li className="mb-4 pl-9 relative" data-aos="fade-right" data-aos-delay="300">
          <span className="absolute left-0 top-0 text-accent font-pixel">{'>'}</span>
          Учусь в НИУ ВШЭ на ФКН "Программная инженерия"
        </li>
        <li className="mb-4 pl-9 relative" data-aos="fade-right" data-aos-delay="400">
          <span className="absolute left-0 top-0 text-accent font-pixel">{'>'}</span>
          Помогаю с карьерной консультацией в IT и выбором вуза
        </li>
        <li className="mb-4 pl-9 relative" data-aos="fade-right" data-aos-delay="500">
          <span className="absolute left-0 top-0 text-accent font-pixel">{'>'}</span>
          Отслеживаю прогресс КАЖДОГО ученика
        </li>
      </ul>
    </div>
  );
};

export default Achievements;