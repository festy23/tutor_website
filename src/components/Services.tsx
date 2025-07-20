import React, { useEffect, useRef } from 'react';
import computerIcon from '../assets/computer-svgrepo-com.svg';
import universityIcon from '../assets/university-svgrepo-com.svg';
import university1Icon from '../assets/university1.svg';
import bookIcon from '../assets/book-svgrepo-com.svg';
import serverIcon from '../assets/server-svgrepo-com.svg';
import aiIcon from '../assets/ai-svgrepo-com.svg';

const Services: React.FC = () => {
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

  const services = [
    {
      icon: computerIcon,
      title: 'подготовкой к ЕГЭ по информатике на 90+ и ОГЭ на 5',
      description: 'Системная подготовка к экзаменам с нуля до высоких баллов. Разбираем все типы заданий, учимся решать быстро и без ошибок, прорабатываем стратегию поведения на экзамене.',
      link: 'https://t.me/knvlvivn?text=Здравствуйте!%20🎓%20Я%20заинтересован(а)%20в%20услуге%20\'Подготовка%20к%20ЕГЭ/ОГЭ%20по%20информатике%20на%2090%2B\'.%20Расскажите,%20пожалуйста,%20подробнее.',
      aosDelay: '0',
    },
    {
      icon: universityIcon,
      title: 'подготовкой к олимпиадам',
      description: 'Подготовка к перечневым олимпиадам 1 и 2 уровня по программированию. Разбираем сложные задачи и алгоритмы, учимся писать код на С++.',
      link: 'https://t.me/knvlvivn?text=Здравствуйте!%20🏆%20Я%20заинтересован(а)%20в%20услуге%20\'Подготовка%20к%20олимпиадам\'.%20Расскажите,%20пожалуйста,%20подробнее.',
      aosDelay: '100',
    },
    {
        icon: university1Icon,
        title: 'выбором вуза и траекторией развития',
        description: 'Консультации для абитуриентов по выбору университета и факультета. Помогаю оценить перспективы разных направлений и составить план для успешного поступлеия.',
        link: 'https://t.me/knvlvivn?text=Здравствуйте!%20🏛️%20Я%20заинтересован(а)%20в%20услуге%20\'Помощь%20с%20выбором%20вуза%20и%20траектории%20развития\'.%20Расскажите,%20пожалуйста,%20подробнее.',
        aosDelay: '200',
    },
    {
        icon: bookIcon,
        title: 'изучением программирования (Python, C++, Golang)',
        description: 'Освоение востребованных языков программирования для начинающих и не только. Создаем первые проекты, разбираемся в особенностях языка, учимся писать чистый код.',
        link: 'https://t.me/knvlvivn?text=Здравствуйте!%20💻%20Я%20заинтересован(а)%20в%20услуге%20\'Изучение%20программирования%20(Python,%20C%2B%2B,%20Golang)\\.%20Расскажите,%20пожалуйста,%20подробнее.',
        aosDelay: '300',
    },
    {
        icon: serverIcon,
        title: 'карьерной консультацией в сфере IT',
        description: 'Помощь в построении карьерного трека в IT. Обсуждаем выбор специализации (Frontend, Backend, etc.), составляем резюме и готовимся к техническим интервью.',
        link: 'https://t.me/knvlvivn?text=Здравствуйте!%20🚀%20Я%20заинтересован(а)%20в%20услуге%20\'Карьерная%20консультация%20в%20сфере%20IT\'.%20Расскажите,%20пожалуйста,%20подробнее.',
        aosDelay: '400',
    },
    {
        icon: aiIcon,
        title: 'обучением работе с нейросетями',
        description: 'Умение работать с ИИ - новая грамотность 21 века. Учимся правильно составлять запросы к нейросетям и давать ей нужный контекст, чтобы получать максимальный результат от работы с ИИ для учебы, работы и жизни.',
        link: 'https://t.me/knvlvivn?text=Здравствуйте!%20🤖%20Я%20заинтересован(а)%20в%20услуге%20\'Обучение%20работе%20с%20нейросетями\'.%20Расскажите,%20пожалуйста,%20подробнее.',
        aosDelay: '500',
    }
  ];

  return (
    <div className="text-center">
      <h2
        ref={typewriterRef}
        className="font-pixel text-clamp-xl mb-12 uppercase inline-block relative text-accent"
        data-text="Я помогу вам с..."
      ></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
        {services.map((service, index) => (
          <a
            key={index}
            href={service.link}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-inherit border-2 border-accent transition-all duration-300 hover:bg-beige"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay={service.aosDelay}
          >
            <div className="p-4 flex flex-col items-center text-center">
              <img src={service.icon} alt="" className="w-12 h-12 mb-4" />
              <div className="service-item-text">
                <h3 className="font-pixel text-clamp-base mb-4 text-accent">{service.title}</h3>
                <p className="text-text-primary">{service.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Services;