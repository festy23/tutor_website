import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer: React.FC = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer id="contact" className="py-20 bg-white border-t border-gray-200">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-pixel text-3xl sm:text-4xl text-accent mb-8" data-aos="fade-down">
          Связаться со мной
        </h2>
        <p className="font-mono text-lg text-gray-600 mb-8 max-w-2xl mx-auto" data-aos="fade-up">
          Готовы начать? Напишите мне в Telegram, чтобы обсудить детали и запланировать первое бесплатное занятие.
        </p>
        <div className="flex justify-center space-x-6 mb-10" data-aos="fade-up" data-aos-delay="200">
          <a 
            href="https://t.me/knvlvivn" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-auto inline-flex items-center justify-center px-8 py-3 text-base sm:text-lg font-bold text-accent bg-yellow rounded-lg shadow-lg hover:bg-yellow/80 transition-all duration-300 transform hover:scale-105"
          >
            Написать в Telegram
          </a>
        </div>
        <div className="text-gray-500 text-sm font-mono" data-aos="fade-up" data-aos-delay="400">
          <p>© 2025 Коновалов Иван. Все права защищены.</p>
          <button onClick={scrollToTop} className="mt-4 text-gray-500 hover:text-accent transition-colors">
            Наверх ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;