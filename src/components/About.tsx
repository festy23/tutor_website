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
    <section id="about" className="py-16 sm:py-24 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Image Column */}
          <div className="w-full md:w-5/12" data-aos="fade-right">
            <img
              src={photo}
              alt="Коновалов Иван"
              className="w-full max-w-sm mx-auto md:max-w-full h-auto object-cover rounded-lg shadow-lg"
              loading="lazy"
              decoding="async"
              width="500"
              height="500"
            />
          </div>

          {/* Text and Tags Column */}
          <div className="w-full md:w-7/12" data-aos="fade-left" data-aos-delay="200">
            <Title text="Обо мне" className="font-pixel text-3xl sm:text-4xl md:text-5xl text-accent mb-8 text-center md:text-left" />
            
            {/* White bubble with black corner effect */}
            <div className="relative bg-white p-6 sm:p-8 rounded-lg shadow-lg">
              <div className="absolute top-0 left-0 w-8 h-8 bg-black" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}></div>
              <p className="font-mono text-sm sm:text-base text-gray-800 leading-relaxed">
                Привет! Меня зовут Коновалов Иван, и я ваш проводник в мир программирования.
                Моя цель — не просто научить вас писать код, а показать, насколько увлекательным
                и творческим может быть этот процесс.
              </p>
              <p className="font-mono text-sm sm:text-base text-gray-800 leading-relaxed mt-4">
                Я помогаю школьникам успешно сдавать ЕГЭ и ОГЭ по информатике, а также готовлю
                к олимпиадам. Вместе мы превратим сложные задачи в интересные проекты и достигнем ваших целей.
              </p>
            </div>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`bg-black text-white rounded-full px-3 py-1.5 sm:px-4 sm:py-2 flex items-center justify-center shadow-md`}
                  data-aos="fade-up"
                  data-aos-delay={100 + index * 100}
                >
                  <span className="font-mono text-[11px] sm:text-sm text-center">{achievement.text}</span>
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
