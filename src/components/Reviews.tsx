import React, { useEffect, useRef } from 'react';

const Reviews: React.FC = () => {
  const typewriterRef = useRef<HTMLHeadingElement>(null);
  const marqueeContentRef = useRef<HTMLDivElement>(null);

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

    if (marqueeContentRef.current) {
      const marquee = marqueeContentRef.current;
      const content = marquee.innerHTML;
      marquee.innerHTML += content;
    }

    return () => {
      if (typewriterRef.current) {
        observer.unobserve(typewriterRef.current);
      }
    };
  }, []);

  const reviews = [
    {
      text: '"Иван — великолепный преподаватель! Материал объясняется очень доступно, а индивидуальный подход помог закрыть все пробелы. В итоге сдал ЕГЭ на 95 баллов!"',
      author: 'Николаев Роман, студент НИУ ВШЭ',
    },
    {
      text: '"Занимался с нуля, за год подготовился к ОГЭ на твердую пятерку. Очень понравился формат занятий, было не скучно и максимально продуктивно."',
      author: 'Смирнов Никита, ученик 9 класса, Лицей №1535',
    },
    {
      text: '"Помог разобраться со сложными алгоритмами для олимпиады. Благодаря Ивану смог взять диплом призера на \'Высшей пробе\'."',
      author: 'Артем Ковальчук, студент НИУ ВШЭ',
    },
    {
      text: '"Лучший репетитор! Помог не только сдать экзамен, но и по-настоящему полюбить программирование. Теперь это моя будущая профессия."',
      author: 'Роман Шухов, студент МИСИС',
    },
  ];

  return (
    <div className="text-center">
      <h2
        ref={typewriterRef}
        className="font-pixel text-clamp-xl mb-12 uppercase inline-block relative text-accent"
        data-text="Отзывы"
      ></h2>
      <div className="marquee w-full overflow-hidden relative mt-12">
        <div ref={marqueeContentRef} className="marquee-content flex items-stretch w-max gap-8 animate-marquee-scroll hover:animate-pause">
          {[...reviews, ...reviews].map((review, index) => (
            <div key={index} className="flex-shrink-0 w-[400px] min-w-[320px] max-w-[420px] p-7 pixel-border-inset bg-background flex flex-col justify-center whitespace-normal transition-all duration-300 hover:bg-beige relative">
              <p className="mb-5 text-base text-center">"{review.text}"</p>
              <footer className="font-pixel text-sm text-accent text-center">{review.author}</footer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;