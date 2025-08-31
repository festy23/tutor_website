import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const telegramLink = 'https://t.me/knvllivn';
  const email = 'ivankon1@icloud.com';

  return (
    <footer id="contact" className="relative bg-beige text-text-primary py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      
      <div className="relative z-10 container-responsive section-padding text-center">
        <div data-aos="fade-up">
          <h2 className="font-podkova font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-brand-red leading-[1.1] tracking-[-0.01em] mb-8">
            Связаться со мной
          </h2>
          <p className="font-space-grotesk text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            Готовы начать подготовку? Есть вопросы? Напишите мне, и я отвечу в ближайшее время.
          </p>
          <motion.a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white font-space-grotesk text-base md:text-lg py-4 md:py-5 px-8 md:px-12 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl enhanced-shadow grain mb-16"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Написать в Telegram
          </motion.a>
        </div>

        <div className="border-t-2 border-dashed border-gray-300 pt-10 mt-10" data-aos="fade-up" data-aos-delay="200">
          {/* Contact Links - Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="text-center md:text-left"
            >
              <a 
                href={`mailto:${email}`} 
                className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:bg-white hover:border-gray-300 transition-all duration-300 group"
              >
                <svg className="w-5 h-5 mr-3 text-gray-600 group-hover:text-brand-red transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-space-grotesk text-base md:text-lg font-medium text-gray-700 group-hover:text-brand-red transition-colors">
                  {email}
                </span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="text-center md:text-right"
            >
              <a 
                href={telegramLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:bg-white hover:border-gray-300 transition-all duration-300 group"
              >
                <svg className="w-5 h-5 mr-3 text-gray-600 group-hover:text-brand-red transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                <span className="font-space-grotesk text-base md:text-lg font-medium text-gray-700 group-hover:text-brand-red transition-colors">
                  @knvlvivn
                </span>
              </a>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="text-center"
          >
            <p className="font-space-grotesk text-sm md:text-base text-gray-500">
              © {new Date().getFullYear()} Konovalov Ivan. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;