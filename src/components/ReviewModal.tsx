import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Review } from '../data/reviews';

// --- Helper Functions ---

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

const extractTelegram = (authorString: string) => {
  const match = authorString.match(/tg:\s*(@[a-zA-Z0-9_]+)/);
  return match ? `Telegram: ${match[1]}` : 'Telegram: не указан';
};


// --- Modal Component ---

interface ReviewModalProps {
  review: Review | null;
  onClose: () => void;
}

const ReviewModal: React.FC<ReviewModalProps> = ({ review, onClose }) => {
  if (!review) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 50 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="relative bg-white/10 backdrop-blur-sm rounded-2xl enhanced-shadow p-6 md:p-8 border border-white/30 w-full max-w-2xl max-h-[80vh] overflow-y-auto grain"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
          {/* Close Button */}
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-gray-500 hover:text-black transition-colors duration-200 z-10 p-2 rounded-full hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="relative pt-8">
            {/* Quote Mark */}
            <div className="text-center mb-6">
              <span className="text-6xl md:text-7xl text-brand-red opacity-30 font-podkova">"</span>
            </div>
            
            {/* Review Text */}
            <div className="mb-8">
              <p className="font-space-grotesk text-base md:text-lg lg:text-xl text-white leading-relaxed text-center">
                {highlightKeywords(review.text)}
              </p>
            </div>

            {/* Footer */}
            <div className="border-t-2 border-gray-200 pt-6">
              <div className="text-center">
                <p className="font-space-grotesk text-lg md:text-xl font-bold text-brand-red mb-2">
                  {review.author.split(',')[0].trim()}
                </p>
                <p className="font-space-grotesk text-sm md:text-base text-gray-500">
                  {extractTelegram(review.author)}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ReviewModal;
