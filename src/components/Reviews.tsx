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
          <Title text="Отзывы" className="font-heading text-3xl sm:text-4xl md:text-5xl text-accent" />
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12" data-aos="fade-up">
          <button
            onClick={() => handleTagChange(null)}
            className={`font-mono text-sm sm:text-base px-4 py-2.5 sm:px-5 sm:py-3 rounded-full transition-colors shadow-md ${
              !activeTag ? 'bg-brand-red text-white' : 'bg-black text-white hover:bg-gray-800'
            }`}
          >
            все
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagChange(tag)}
              className={`font-mono text-sm sm:text-base px-4 py-2.5 sm:px-5 sm:py-3 rounded-full transition-colors shadow-md ${
                activeTag === tag ? 'bg-brand-red text-white' : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              #{tag.toLowerCase()}
            </button>
          ))}
        </div>

        <div className="relative w-full max-w-xl mx-auto flex items-center justify-center min-h-[340px] sm:min-h-[300px]" data-aos="fade-up" data-aos-delay="200">
          {filteredReviews.length > 1 && (
            <>
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 1)' }}
                whileTap={{ scale: 0.9 }}
                onClick={() => paginate(-1)}
                className="absolute left-0 sm:-left-12 md:-left-20 z-20 p-3 bg-white/70 rounded-full shadow-lg"
                aria-label="Previous review"
              >
                <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 1)' }}
                whileTap={{ scale: 0.9 }}
                onClick={() => paginate(1)}
                className="absolute right-0 sm:-right-12 md:-right-20 z-20 p-3 bg-white/70 rounded-full shadow-lg"
                aria-label="Next review"
              >
                <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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