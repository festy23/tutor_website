import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const pricingOptions = [
  {
    emoji: '💬',
    title: 'Консультация',
    price: 'от 1500₽',
    period: '/ час',
    features: [
      'Помощь с выбором вуза',
      'Карьерная консультация',
      'Разбор сложных тем',
    ],
    link: 'https://t.me/knvlvivn?text=Здравствуйте!%20Я%20хочу%20записаться%20на%20консультацию.',
    featured: false,
  },
  {
    emoji: '📚',
    title: 'Занятие',
    price: 'от 2000₽',
    period: '/ час',
    features: [
      'Подготовка к ЕГЭ/ОГЭ',
      'Изучение программирования',
      'Подготовка к олимпиадам',
    ],
    link: 'https://t.me/knvlvivn?text=Здравствуйте!%20Я%20хочу%20записаться%20на%20занятие.',
    featured: true,
  },
];

const Pricing: React.FC = () => {
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
    <section id="pricing" className="py-20 sm:py-32">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 ref={typewriterRef} className="font-pixel text-3xl sm:text-4xl md:text-5xl text-accent" data-text="Цены">
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 transform hover:scale-105 ${option.featured ? 'border-2 border-accent' : 'border border-gray-200'}`}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              {option.featured && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 text-sm font-semibold text-white bg-accent rounded-full">Best Value</span>
                </div>
              )}
              <div className="text-center">
                <span className="text-5xl mb-4">{option.emoji}</span>
                <h3 className="font-mono text-2xl font-bold my-4 text-accent">{option.title}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{option.price}</span>
                  <span className="text-lg font-medium text-gray-500">{option.period}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {option.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="font-mono text-base text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={option.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full block text-center font-mono text-base font-bold py-3 px-6 rounded-lg transition-colors ${option.featured ? 'bg-accent text-white hover:bg-black' : 'bg-yellow text-accent hover:bg-yellow/80'}`}
              >
                Записаться
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-16" data-aos="fade-up">
          <p className="font-pixel text-xl sm:text-2xl text-white bg-accent p-6 inline-block rounded-lg shadow-lg animate-shimmer">
            ПЕРВОЕ ЗАНЯТИE - БЕСПЛАТНО!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;