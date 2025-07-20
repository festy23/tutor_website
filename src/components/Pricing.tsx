import React, { useEffect, useRef } from 'react';

const Pricing: React.FC = () => {
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
        data-text="Цены"
      ></h2>
      <div className="max-w-2xl mx-auto pixel-border" data-aos="fade-up">
        <div className="pricing-list">
          <ul className="list-none p-0 m-0 mb-8">
            <li className="mb-4 text-center text-lg">Консультация - от 1500 руб/час</li>
            <li className="text-center text-lg">Занятие ЕГЭ/ОГЭ - от 2000 руб/час</li>
          </ul>
        </div>
        <a href="https://t.me/knvlvivn?text=Здравствуйте!%20Я%20заинтересован(а)%20в%20ваших%20услугах." target="_blank" rel="noopener noreferrer" className="cta-button">
          СВЯЗАТЬСЯ СО МНОЙ
        </a>
        <p className="font-pixel text-lg text-accent mt-8">
          ПЕРВОЕ ЗАНЯТИE БЕСПЛАТНО!
        </p>
      </div>
    </div>
  );
};

export default Pricing;