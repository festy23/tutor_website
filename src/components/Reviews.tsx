import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { reviews } from '../data/reviews';
import { typeWriter } from '../utils/typewriter';

// --- Helper Functions & Components ---

interface Review {
  text: string;
  author: string;
  tags?: string[];
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

// --- Modal Component ---

const ReviewModal: React.FC<{ review: Review; onClose: () => void }> = ({ review, onClose }) => (
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

// --- Main Reviews Component ---

const cardVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 100 : -100, opacity: 0, scale: 0.9 }),
  center: { zIndex: 1, x: 0, opacity: 1, scale: 1 },
  exit: (direction: number) => ({ zIndex: 0, x: direction < 0 ? 100 : -100, opacity: 0, scale: 0.9 }),
};

const Reviews: React.FC = () => {
  const typewriterRef = useRef<HTMLHeadingElement>(null);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [[page, direction], setPage] = useState([0, 0]);
  const [isAutoplaying, setIsAutoplaying] = useState(true);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const autoplayRef = useRef<number | null>(null);

  const allTags = useMemo(() => [...new Set(reviews.flatMap(r => r.tags || []))], []);

  const filteredReviews = useMemo(() => {
    const reviewsList = activeTag ? reviews.filter(r => r.tags?.includes(activeTag)) : reviews;
    setPage([0, 0]);
    return reviewsList;
  }, [activeTag]);

  const reviewIndex = (page % filteredReviews.length + filteredReviews.length) % filteredReviews.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
    setIsAutoplaying(false);
  };

  const handleOpenModal = (review: Review) => {
    setSelectedReview(review);
    setIsAutoplaying(false);
  };

  const handleCloseModal = () => {
    setSelectedReview(null);
    setIsAutoplaying(true);
  };

  const handleTagChange = (tag: string | null) => {
    setActiveTag(tag);
    setIsAutoplaying(true);
  };

  useEffect(() => {
    if (isAutoplaying && filteredReviews.length > 1) {
      autoplayRef.current = window.setInterval(() => setPage(([p]) => [p + 1, 1]), 3000);
    } else if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isAutoplaying, filteredReviews.length]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && typewriterRef.current) {
          typeWriter(typewriterRef.current, typewriterRef.current.dataset.text || '');
          observer.unobserve(entries[0].target);
        }
      }, { threshold: 0.6 }
    );
    if (typewriterRef.current) observer.observe(typewriterRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="reviews" className="relative py-16 sm:py-24">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-12">
          <h2 ref={typewriterRef} className="font-pixel text-3xl sm:text-4xl md:text-5xl text-accent" data-text="Отзывы"></h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
          <button onClick={() => handleTagChange(null)} className={`font-mono text-sm sm:text-base px-4 py-2 rounded-full transition-colors ${!activeTag ? 'bg-accent text-white' : 'bg-yellow/80 text-accent hover:bg-yellow'}`}>Все</button>
          {allTags.map(tag => (
            <button key={tag} onClick={() => handleTagChange(tag)} className={`font-mono text-sm sm:text-base px-4 py-2 rounded-full transition-colors ${activeTag === tag ? 'bg-accent text-white' : 'bg-yellow/80 text-accent hover:bg-yellow'}`}>#{tag}</button>
          ))}
        </div>

        <div className="relative w-full max-w-xl mx-auto flex items-center justify-center min-h-[320px] sm:min-h-[280px]">
          {filteredReviews.length > 1 && (
            <>
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => paginate(-1)} className="absolute -left-2 sm:-left-8 z-20 p-1 sm:p-2 bg-white/60 rounded-full shadow-lg hover:bg-white"><svg className="h-5 w-5 sm:h-6 sm:w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg></motion.button>
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => paginate(1)} className="absolute -right-2 sm:-right-8 z-20 p-1 sm:p-2 bg-white/60 rounded-full shadow-lg hover:bg-white"><svg className="h-5 w-5 sm:h-6 sm:w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></motion.button>
            </>
          )}
          <div className="relative w-full h-full flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                className="absolute w-[90%] sm:w-4/5 md:w-3/4 lg:w-full"
              >
                <div className="flex flex-col bg-white rounded-xl shadow-lg p-6 sm:p-8 border-2 border-gray-800">
                  <p className="font-mono text-sm sm:text-base text-gray-700 mb-4">{highlightKeywords(truncateToTwoSentences(filteredReviews[reviewIndex].text))}</p>
                  <div className="text-center mt-auto">
                    <button onClick={() => handleOpenModal(filteredReviews[reviewIndex])} className="font-mono px-4 py-2 bg-accent text-white rounded-lg shadow-md hover:bg-accent/90 transition-all duration-200 transform hover:scale-105">Читать</button>
                  </div>
                  <footer className="font-mono text-sm font-bold text-accent text-right mt-4 pt-4 border-t">
                    <p>{filteredReviews[reviewIndex].author.split(',')[0].trim()}</p>
                    <p className="text-xs text-gray-500">{extractTelegram(filteredReviews[reviewIndex].author)}</p>
                  </footer>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      {selectedReview && <ReviewModal review={selectedReview} onClose={handleCloseModal} />}
    </section>
  );
};

export default Reviews;
