import React from 'react';
import telegramIcon from '../assets/telegram-svgrepo-com-3.svg';

const TelegramBubble: React.FC = () => {
  return (
    <a
      href="https://t.me/knvlvivn"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 bg-white text-black rounded-full w-14 h-14 flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 z-50 border-2 border-black"
      aria-label="Написать в Telegram"
    >
      <img src={telegramIcon} alt="Telegram" className="w-8 h-8" />
    </a>
  );
};

export default TelegramBubble;