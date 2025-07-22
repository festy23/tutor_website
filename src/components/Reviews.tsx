import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const reviews = [
  {
    text: 'Иван — великолепный преподаватель! Материал объясняется очень доступно, а индивидуальный подход помог закрыть все пробелы. В итоге сдал ЕГЭ на 95 баллов!',
    author: 'Николаев Роман, студент НИУ ВШЭ',
  },
  {
    text: 'Занимался с нуля, за год подготовился к ОГЭ на твердую пятерку. Очень понравился формат занятий, было не скучно и максимально продуктивно.',
    author: 'Смирнов Никита, ученик 9 класса',
  },
  {
    text: 'Помог разобраться со сложными алгоритмами для олимпиады. Благодаря Ивану смог взять диплом призера на \'Высшей пробе\'.',
    author: 'Артем Ковальчук, студент НИУ ВШЭ',
  },
  {
    text: 'Лучший репетитор! Помог не только сдать экзамен, но и по-настоящему полюбить программирование. Теперь это моя будущая профессия.',
    author: 'Роман Шухов, студент МИСИС',
  },
];

const Reviews: React.FC = () => {
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
    <section id="reviews" className="py-20 sm:py-32">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 ref={typewriterRef} className="font-pixel text-3xl sm:text-4xl md:text-5xl text-accent" data-text="Отзывы">
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <p className="font-mono text-base text-gray-700 mb-6 relative">
                <span className="absolute -top-4 -left-4 text-6xl text-yellow opacity-50">“</span>
                {review.text}
              </p>
              <footer className="font-mono text-sm font-bold text-accent text-right">{review.author}</footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;