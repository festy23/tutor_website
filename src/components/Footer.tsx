import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Title from './Title';

const Footer: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const telegramLink = 'https://t.me/knvlvivn';
  const email = 'ivankon1@icloud.com';

  return (
    <footer id="contact" className="bg-white text-text-primary py-16 sm:py-24">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div data-aos="fade-up">
          <Title text="Связаться со мной" className="font-pixel text-3xl sm:text-4xl text-accent mb-8" />
          <p className="font-mono text-base sm:text-lg text-gray-700 max-w-2xl mx-auto mb-10">
            Готовы начать подготовку? Есть вопросы? Напишите мне, и я отвечу в ближайшее время.
          </p>
          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-white font-pixel text-sm sm:text-base py-4 px-8 rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl mb-12"
          >
            Написать в Telegram
          </a>
        </div>

        <div className="border-t border-gray-200 pt-8 mt-8" data-aos="fade-up" data-aos-delay="200">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 font-mono text-sm text-gray-700">
            <a href={`mailto:${email}`} className="hover:text-accent transition-colors">
              {email}
            </a>
            <span className="hidden sm:block">|</span>
            <a href={telegramLink} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              Telegram: @knvlvivn
            </a>
          </div>
          <p className="font-mono text-xs text-gray-500 mt-8">
            © {new Date().getFullYear()} Konovalov Ivan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;