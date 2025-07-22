import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  {
    emoji: '🎓',
    title: 'Подготовка к ЕГЭ/ОГЭ',
    description: 'Системная подготовка к экзаменам с нуля до 90+ баллов. Разбираем все типы заданий и учимся решать без ошибок.',
    link: 'https://t.me/knvlvivn?text=Здравствуйте!%20🎓%20Я%20заинтересован(а)%20в%20услуге%20\'Подготовка%20к%20ЕГЭ/ОГЭ%20по%20информатике%20на%2090%2B\'.',
  },
  {
    emoji: '🏆',
    title: 'Подготовка к олимпиадам',
    description: 'Готовлю к перечневым олимпиадам по программированию. Разбираем сложные задачи и алгоритмы на C++.',
    link: 'https://t.me/knvlvivn?text=Здравствуйте!%20🏆%20Я%20заинтересован(а)%20в%20услуге%20\'Подготовка%20к%20олимпиадам\'.',
  },
  {
    emoji: '🏛️',
    title: 'Помощь с выбором вуза',
    description: 'Консультации по выбору университета и факультета. Помогаю оценить перспективы и составить план поступления.',
    link: 'https://t.me/knvlvivn?text=Здравствуйте!%20🏛️%20Я%20заинтересован(а)%20в%20услуге%20\'Помощь%20с%20выбором%20вуза\'.',
  },
  {
    emoji: '💻',
    title: 'Изучение программирования',
    description: 'Обучение Python, C++, Go. Создаем проекты, разбираемся в особенностях языка, пишем чистый код.',
    link: 'https://t.me/knvlvivn?text=Здравствуйте!%20💻%20Я%20заинтересован(а)%20в%20услуге%20\'Изучение%20программирования\'.',
  },
  {
    emoji: '🚀',
    title: 'Карьерная консультация',
    description: 'Помогаю построить карьерный трек в IT, составить резюме и подготовиться к техническим интервью.',
    link: 'https://t.me/knvlvivn?text=Здравствуйте!%20🚀%20Я%20заинтересован(а)%20в%20услуге%20\'Карьерная%20консультация%20в%20IT\'.',
  },
  {
    emoji: '🤖',
    title: 'Обучение работе с ИИ',
    description: 'Учимся правильно работать с нейросетями, чтобы получать максимальный результат для учебы, работы и жизни.',
    link: 'https://t.me/knvlvivn?text=Здравствуйте!%20🤖%20Я%20заинтересован(а)%20в%20услуге%20\'Обучение%20работе%20с%20нейросетями\'.',
  }
];

const Services: React.FC = () => {
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
      duration: 800,
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
    <section id="services" className="py-20 sm:py-32">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 ref={typewriterRef} className="font-pixel text-3xl sm:text-4xl md:text-5xl text-accent" data-text="Услуги">
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-200 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <span className="text-5xl mb-4">{service.emoji}</span>
              <h3 className="font-mono text-xl font-bold mb-3 text-accent h-14 flex items-center">{service.title}</h3>
              <p className="font-mono text-sm text-gray-600 mb-6 flex-grow">{service.description}</p>
              <a
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-accent text-white text-sm font-bold py-3 px-6 rounded-lg hover:bg-black transition-colors"
              >
                Узнать больше
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;