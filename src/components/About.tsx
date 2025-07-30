import React, { useEffect } from 'react';
import photo from '../assets/profile_pic.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Title from './Title';
import { achievements } from '../data/achievements';

const About: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="about" className="py-20 sm:py-32 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Image Column */}
          <div className="w-full sm:w-10/12 md:w-8/12 lg:w-5/12" data-aos="fade-right">
            <div className="relative">
              {/* To change the color of the rectangle, modify the background color class below (e.g., bg-blue-500, bg-brand-red) */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-paper rounded-lg transform -rotate-3 transition-transform duration-300 group-hover:rotate-0"></div>
              <img
                src={photo}
                alt="Коновалов Иван"
                className="relative w-full h-auto object-cover rounded-lg shadow-lg border-4 border-white"
                loading="lazy"
                decoding="async"
                width="500"
                height="500"
              />
            </div>
          </div>

          {/* Text and Tags Column */}
          <div className="w-full lg:w-7/12" data-aos="fade-left" data-aos-delay="200">
            <Title text="Обо мне" className="font-pixel text-3xl sm:text-4xl md:text-5xl text-accent mb-8 text-center lg:text-left" />
            
            {/* Bubble with black border */}
            <div className="relative bg-white p-6 sm:p-8 rounded-lg shadow-xl border-2 border-black">
              <p className="font-mono text-base sm:text-lg text-gray-800 leading-relaxed">
                Привет! Меня зовут Коновалов Иван, и я ваш проводник в мир программирования.
                Моя цель — не просто научить вас писать код, а показать, насколько увлекательным
                и творческим может быть этот процесс.
              </p>
              <p className="font-mono text-base sm:text-lg text-gray-800 leading-relaxed mt-4">
                Я помогаю школьникам успешно сдавать ЕГЭ и ОГЭ по информатике, а также готовлю
                к олимпиадам. Вместе мы превратим сложные задачи в интересные проекты и достигнем ваших целей.
              </p>
            </div>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-black text-white rounded-full px-3 py-2 sm:px-4 sm:py-2 flex items-center justify-center text-center shadow-md transform transition-transform duration-300 hover:scale-110"
                  data-aos="fade-up"
                  data-aos-delay={100 + index * 100}
                >
                  <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase">{achievement.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
