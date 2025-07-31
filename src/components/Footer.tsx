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
    <footer id="contact" className="bg-transparent text-text-primary py-16 sm:py-24">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div data-aos="fade-up">
          <Title text="Связаться со мной" className="font-heading text-3xl sm:text-4xl md:text-5xl text-accent mb-8" />
          <p className="font-mono text-base sm:text-lg text-gray-700 max-w-2xl mx-auto mb-10">
            Готовы начать подготовку? Есть вопросы? Напишите мне, и я отвечу в ближайшее время.
          </p>
          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-white font-mono text-base sm:text-lg py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg mb-16"
          >
            Написать в Telegram
          </a>
        </div>

        <div className="border-t-2 border-dashed border-gray-300 pt-10 mt-10" data-aos="fade-up" data-aos-delay="200">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 font-mono text-base text-gray-700">
            <a href={`mailto:${email}`} className="hover:text-accent transition-colors duration-300">
              {email}
            </a>
            <span className="hidden sm:block text-gray-400">|</span>
            <a href={telegramLink} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">
              Telegram: @knvlvivn
            </a>
          </div>
          <p className="font-mono text-sm text-gray-500 mt-10">
            © {new Date().getFullYear()} Konovalov Ivan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;