import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const reviews = [
  {
    text: 'Я решил сдавать ЕГЭ, но посмотрев баллы понял, чтобы попасть в хороший ВУЗ, мне нужно набрать больше 90. У меня было плохо с алгоритмами и сложные задания ЕГЭ я не понимал вообще. За полгода подготовки я понял, что это несложно, Иван объяснил все понтяным языком. В итоге я набрал 95 баллов на ЕГЭ и я смог поступить во ВШЭ.',
    author: 'Николаев Роман, студент НИУ ВШЭ',
  },
  {
    text: 'Думал сдавать ОГЭ по информатике, но программированием никогда не занимался. За год с нуля на занятиях я выучил питон и сдал ОГЭ на 5, сейчас планирую учатсвовать в хакатонах по веб-разработке. ',
    author: 'Смирнов Никита, ученик 9 класса',
  },
  {
    text: 'Чтобы поступить БВИ в вуз я решил получить диплом олимпиады. За год занятий с Иваном я стал призером олимпиады "DANO" по анализу данных, сейчас учусь во ВШЭ и нисколько не жалею, что потратил силы и время на это',
    author: 'Артем Ковальчук, студент НИУ ВШЭ',
  },
  {
    text: 'Писал пробники ЕГЭ на 60 баллов в середине зимы. За полгода по 2 занятия в неделю я вышел вообще на другой уровень - к концу года писал пробники больше 90. ЕГЭ я сдал на 90 баллов, баллами доволен, спасибо Ивану в подготовке.',
    author: 'Роман Шухов, студент МИСИС, tg: @matveichinazec',
  },
  {
    text: 'Мне было интересно программирование, я пробовал себя в создании моби',
    author: 'Матвей, ученик 10 класса, tg: @matveichinazec',
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