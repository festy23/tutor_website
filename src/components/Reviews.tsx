import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Title from './Title';
import ReviewCard from './ReviewCard';
import ReviewModal from './ReviewModal';
import { useReviews } from '../hooks/useReviews';

const Reviews: React.FC = () => {
  const {
    activeTag,
    allTags,
    filteredReviews,
    reviewIndex,
    direction,
    selectedReview,
    page,
    paginate,
    handleTagChange,
    handleOpenModal,
    handleCloseModal,
  } = useReviews();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="reviews" className="relative py-16 sm:py-24">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-12">
          <Title text="Отзывы" className="font-pixel text-3xl sm:text-4xl md:text-5xl text-accent" />
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12" data-aos="fade-up">
          <button
            onClick={() => handleTagChange(null)}
            className={`font-mono text-xs sm:text-base px-3 py-2 sm:px-4 sm:py-2 rounded-full transition-colors ${
              !activeTag ? 'bg-brand-red text-white' : 'bg-black text-white hover:bg-gray-800'
            }`}
          >
            Все
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagChange(tag)}
              className={`font-mono text-xs sm:text-base px-3 py-2 sm:px-4 sm:py-2 rounded-full transition-colors ${
                activeTag === tag ? 'bg-brand-red text-white' : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>

        <div className="relative w-full max-w-xl mx-auto flex items-center justify-center min-h-[320px] sm:min-h-[280px]" data-aos="fade-up" data-aos-delay="200">
          {filteredReviews.length > 1 && (
            <>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => paginate(-1)}
                className="absolute left-0 sm:-left-16 z-20 p-1 sm:p-2 bg-white/60 rounded-full shadow-lg hover:bg-white"
                aria-label="Previous review"
              >
                <svg className="h-5 w-5 sm:h-6 sm:w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => paginate(1)}
                className="absolute right-0 sm:-right-16 z-20 p-1 sm:p-2 bg-white/60 rounded-full shadow-lg hover:bg-white"
                aria-label="Next review"
              >
                <svg className="h-5 w-5 sm:h-6 sm:w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </>
          )}
          <div className="relative w-full h-full flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              {filteredReviews.length > 0 ? (
                <ReviewCard
                  key={page}
                  review={filteredReviews[reviewIndex]}
                  onOpenModal={handleOpenModal}
                />
              ) : (
                <p className="font-mono text-gray-500">Нет отзывов для этой категории.</p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <ReviewModal review={selectedReview} onClose={handleCloseModal} />
    </section>
  );
};

export default Reviews;