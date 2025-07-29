import React from 'react';
import telegramIcon from '../assets/telegram-svgrepo-com-3.svg';

const TelegramBubble: React.FC = () => {
  return (
    <a
      href="https://t.me/knvlvivn"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-white text-black rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 z-50"
      aria-label="Написать в Telegram"
    >
      <img src={telegramIcon} alt="Telegram" className="w-8 h-8" />
    </a>
  );
};

export default TelegramBubble;