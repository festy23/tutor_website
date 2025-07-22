import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const achievements = [
  {
    emoji: '🎓',
    text: 'Обучил 20+ учеников со средним баллом 90+',
  },
  {
    emoji: '💻',
    text: 'Имею опыт работы в IT-индустрии',
  },
  {
    emoji: '🏛️',
    text: 'Учусь в НИУ ВШЭ на ФКН "Программная инженерия"',
  },
  {
    emoji: '🚀',
    text: 'Помогаю с карьерной консультацией в IT и выбором вуза',
  },
  {
    emoji: '📈',
    text: 'Отслеживаю прогресс КАЖДОГО ученика',
  },
  {
    emoji: '💡',
    text: 'Создаю индивидуальные планы обучения для каждого',
  }
];

const Achievements: React.FC = () => {
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
    <section id="achievements" className="py-20 sm:py-32">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 ref={typewriterRef} className="font-pixel text-3xl sm:text-4xl md:text-5xl text-accent" data-text="Почему я?">
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 flex items-center border border-gray-200 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <span className="text-4xl mr-6">{achievement.emoji}</span>
              <p className="font-mono text-base text-gray-700">{achievement.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;