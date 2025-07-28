import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { achievements } from '../data/achievements';
import Title from './Title';

const HighlightedText: React.FC<{ text: string }> = ({ text }) => {
  const keywords = ['90+', 'IT-индустрии', 'НИУ ВШЭ', 'ФКН', 'Программная инженерия', 'КАЖДОГО'];
  const regex = new RegExp(`(${keywords.join('|')})`, 'g');
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        keywords.includes(part) ? (
          <span key={i} className="text-accent font-bold">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
};

const Achievements: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="achievements" className="py-20 sm:py-32">
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <Title text="Почему я?" className="font-pixel text-3xl sm:text-4xl md:text-5xl text-accent" />
        </div>
        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 flex items-center border border-gray-200 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <span className="text-2xl mx-2 sm:mx-4">{achievement.emoji}</span>
              <p className="font-mono text-sm sm:text-base text-gray-700 flex-1 pr-2">
                <HighlightedText text={achievement.text} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;