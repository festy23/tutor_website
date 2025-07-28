import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Review } from '../data/reviews';

// --- Helper Functions ---

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
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 50 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="relative bg-white rounded-xl shadow-2xl p-6 sm:p-8 border-2 border-gray-800 w-full max-w-lg max-h-[80vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
          <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 z-10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <div className="relative">
            <span className="absolute -top-4 -left-4 text-7xl text-yellow opacity-50">“</span>
            <p className="font-mono text-base text-gray-800">{highlightKeywords(review.text)}</p>
          </div>
          <footer className="font-mono text-sm font-bold text-accent text-right mt-6 pt-4 border-t">
            <p>{review.author.split(',')[0].trim()}</p>
            <p className="text-xs text-gray-500">{extractTelegram(review.author)}</p>
          </footer>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ReviewModal;
