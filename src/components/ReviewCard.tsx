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
      <span key={index} className="text-brand-red font-bold">{part}</span>
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
      className="h-full"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl enhanced-shadow h-full flex flex-col grain">
        {/* Content */}
        <div className="flex-1 p-6 md:p-8">
          {/* Review Text */}
          <div className="mb-6">
            <p className="font-space-grotesk text-base md:text-lg text-gray-700 leading-relaxed">
              {highlightKeywords(truncateToTwoSentences(review.text))}
            </p>
          </div>

          {/* Tags if available */}
          {review.tags && review.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {review.tags.slice(0, 3).map((tag, index) => (
                <span 
                  key={index}
                  className="inline-block px-3 py-1 text-xs md:text-sm bg-gray-100 text-gray-600 rounded-full font-space-grotesk"
                >
                  #{tag.toLowerCase()}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-6 md:p-8 pt-4 md:pt-6">
          {/* Author */}
          <div className="mb-4">
            <p className="font-space-grotesk text-lg md:text-xl font-bold text-brand-red text-center">
              {review.author.split(',')[0].trim()}
            </p>
          </div>

          {/* Telegram */}
          <div className="mb-6">
            <p className="font-space-grotesk text-sm md:text-base text-gray-500 text-center">
              {extractTelegram(review.author)}
            </p>
          </div>

          {/* Read More Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onOpenModal(review)}
            className="w-full font-space-grotesk text-base md:text-lg font-bold py-3 md:py-4 px-6 md:px-8 bg-black text-white rounded-xl transition-all duration-300 hover:bg-gray-800 grain enhanced-shadow"
          >
            читать полностью
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewCard;
