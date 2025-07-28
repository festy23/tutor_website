import React from 'react';
import { motion } from 'framer-motion';

interface Review {
  text: string;
  author: string;
  tags?: string[];
}

interface ReviewCardProps {
  review: Review;
  onOpenModal: (review: Review) => void;
}

const KEYWORDS = ['ЕГЭ', 'ОГЭ', 'информатике', 'программированию', 'поступил', 'сдал', 'балл', 'университет', 'ВШЭ', 'понятно', 'рекомендую', 'профессионал', 'результат'];

const highlightKeywords = (text: string) => {
  const regex = new RegExp(`(${KEYWORDS.join('|')})`, 'gi');
  return text.split(regex).map((part, index) =>
    KEYWORDS.some(keyword => new RegExp(`^${keyword}$`, 'i').test(part)) ? (
      <span key={index} className="text-accent font-bold">{part}</span>
    ) : (
      part
    )
  );
};

const truncateToTwoSentences = (text: string) => {
  const sentenceEndings = /(?<=[.!?])\s+/;
  const sentences = text.split(sentenceEndings);
  return sentences.slice(0, 2).join(' ') + (sentences.length > 2 ? '...' : '');
};

const extractTelegram = (authorString: string) => {
  const match = authorString.match(/tg:\s*(@[a-zA-Z0-9_]+)/);
  return match ? `Telegram: ${match[1]}` : 'Telegram: не указан';
};

const ReviewCard: React.FC<ReviewCardProps> = ({ review, onOpenModal }) => {
  return (
    <motion.div
      className="absolute w-[95%] sm:w-4/5 md:w-3/4 lg:w-full"
      variants={{
        enter: (direction: number) => ({ x: direction > 0 ? 100 : -100, opacity: 0, scale: 0.9 }),
        center: { zIndex: 1, x: 0, opacity: 1, scale: 1 },
        exit: (direction: number) => ({ zIndex: 0, x: direction < 0 ? 100 : -100, opacity: 0, scale: 0.9 }),
      }}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
    >
      <div className="flex flex-col bg-white rounded-xl shadow-lg p-6 sm:p-8 border-2 border-gray-800">
        <p className="font-mono text-sm sm:text-base text-gray-700 mb-4">{highlightKeywords(truncateToTwoSentences(review.text))}</p>
        <div className="text-center mt-auto">
          <button onClick={() => onOpenModal(review)} className="font-mono px-4 py-2 bg-accent text-white rounded-lg shadow-md hover:bg-accent/90 transition-all duration-200 transform hover:scale-105">Читать</button>
        </div>
        <footer className="font-mono text-sm font-bold text-accent text-right mt-2 pt-2 border-t">
          <p>{review.author.split(',')[0].trim()}</p>
          <p className="text-xs text-gray-500">{extractTelegram(review.author)}</p>
        </footer>
      </div>
    </motion.div>
  );
};

export default ReviewCard;
