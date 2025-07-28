import React from 'react';

const TelegramBubble: React.FC = () => {
  return (
    <a
      href="https://t.me/knvlvivn"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-black text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 z-50"
      aria-label="Написать в Telegram"
    >
      <span className="text-2xl">✈️</span>
      <span className="font-pixel text-xs absolute bottom-1">tg</span>
    </a>
  );
};

export default TelegramBubble;