import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

import ReviewCard from './ReviewCard';
import ReviewModal from './ReviewModal';
import { useReviews } from '../hooks/useReviews';

const REVIEWS_PER_PAGE_MOBILE = 3;
const REVIEWS_PER_PAGE_DESKTOP = 6;

const Reviews: React.FC = () => {
  const {
    activeTag,
    allTags,
    filteredReviews,
    selectedReview,
    handleTagChange,
    handleOpenModal,
    handleCloseModal,
  } = useReviews();

  const [visibleCount, setVisibleCount] = useState(REVIEWS_PER_PAGE_MOBILE);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    
    // Check if mobile on mount and resize
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setVisibleCount(mobile ? REVIEWS_PER_PAGE_MOBILE : REVIEWS_PER_PAGE_DESKTOP);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reset visible count when filter changes
  useEffect(() => {
    setVisibleCount(isMobile ? REVIEWS_PER_PAGE_MOBILE : REVIEWS_PER_PAGE_DESKTOP);
  }, [activeTag, isMobile]);

  const handleTagClick = (tag: string | null) => {
    handleTagChange(tag);
  };

  const visibleReviews = useMemo(() => {
    return filteredReviews.slice(0, visibleCount);
  }, [filteredReviews, visibleCount]);

  const hasMore = filteredReviews.length > visibleCount;

  const handleShowMore = () => {
    const increment = isMobile ? REVIEWS_PER_PAGE_MOBILE : REVIEWS_PER_PAGE_DESKTOP;
    setVisibleCount(prev => prev + increment);
  };

  const handleShowLess = () => {
    const initial = isMobile ? REVIEWS_PER_PAGE_MOBILE : REVIEWS_PER_PAGE_DESKTOP;
    setVisibleCount(initial);
  };

  return (
    <section id="reviews" className="relative py-16 md:py-20 lg:py-24 bg-beige overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      
      <div className="relative z-10 container-responsive section-padding">
        {/* Main Title */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="font-podkova font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-brand-red leading-[1.1] tracking-[-0.01em]">
            Отзывы
          </h2>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16" data-aos="fade-up">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleTagClick(null)}
            className={`font-space-grotesk text-sm md:text-base px-6 py-3 md:px-8 md:py-4 rounded-full transition-all duration-300 shadow-md grain enhanced-shadow ${
              !activeTag ? 'bg-brand-red text-white' : 'bg-black text-white hover:bg-gray-800'
            }`}
          >
            все отзывы
          </motion.button>
          {allTags.map((tag) => (
            <motion.button
              key={tag}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleTagClick(tag)}
              className={`font-space-grotesk text-sm md:text-base px-6 py-3 md:px-8 md:py-4 rounded-full transition-all duration-300 shadow-md grain enhanced-shadow ${
                activeTag === tag ? 'bg-brand-red text-white' : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              #{tag.toLowerCase()}
            </motion.button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="relative" data-aos="fade-up" data-aos-delay="200">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTag || 'all'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
            >
              {visibleReviews.map((review, index) => (
                <motion.div
                  key={`${review.author}-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.05,
                    ease: "easeOut"
                  }}
                  className="h-full"
                >
                  <ReviewCard
                    review={review}
                    onOpenModal={handleOpenModal}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredReviews.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 md:py-20"
            >
              <div className="bg-white rounded-2xl enhanced-shadow p-8 md:p-12 grain">
                <p className="font-space-grotesk text-lg md:text-xl text-gray-500 mb-4">
                  Нет отзывов для этой категории
                </p>
                <button
                  onClick={() => handleTagClick(null)}
                  className="font-space-grotesk text-base md:text-lg px-6 py-3 bg-brand-red text-white rounded-full hover:bg-red-700 transition-colors duration-200 grain enhanced-shadow"
                >
                  Показать все отзывы
                </button>
              </div>
            </motion.div>
          )}

          {/* Pagination Controls */}
          {filteredReviews.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12 md:mt-16"
            >
              {hasMore && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleShowMore}
                  className="font-space-grotesk text-base md:text-lg font-bold py-3 md:py-4 px-8 md:px-12 bg-black text-white rounded-full transition-all duration-300 hover:bg-gray-800 grain enhanced-shadow"
                >
                  Показать ещё {Math.min(isMobile ? REVIEWS_PER_PAGE_MOBILE : REVIEWS_PER_PAGE_DESKTOP, filteredReviews.length - visibleCount)} отзыв{filteredReviews.length - visibleCount === 1 ? '' : (filteredReviews.length - visibleCount < 5 ? 'а' : 'ов')}
                </motion.button>
              )}
              
              {visibleCount > (isMobile ? REVIEWS_PER_PAGE_MOBILE : REVIEWS_PER_PAGE_DESKTOP) && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleShowLess}
                  className="font-space-grotesk text-base md:text-lg font-medium py-3 md:py-4 px-8 md:px-12 bg-white text-black border-2 border-black rounded-full transition-all duration-300 hover:bg-gray-50 grain enhanced-shadow"
                >
                  Свернуть
                </motion.button>
              )}
            </motion.div>
          )}
        </div>

        {/* Stats */}
        {filteredReviews.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center mt-12 md:mt-16"
          >
            <div className="inline-flex items-center gap-8 md:gap-12 bg-white/10 backdrop-blur-sm rounded-full px-6 md:px-8 py-3 md:py-4 grain enhanced-shadow">
              <div className="text-center">
                <p className="font-space-grotesk text-sm md:text-base text-gray-600">Показано</p>
                <p className="font-podkova font-bold text-2xl md:text-3xl text-brand-red">{visibleCount}</p>
              </div>
              <div className="w-px h-8 md:h-12 bg-gray-300"></div>
              <div className="text-center">
                <p className="font-space-grotesk text-sm md:text-base text-gray-600">Всего</p>
                <p className="font-podkova font-bold text-2xl md:text-3xl text-black">{filteredReviews.length}</p>
              </div>
              <div className="w-px h-8 md:h-12 bg-gray-300"></div>
              <div className="text-center">
                <p className="font-space-grotesk text-sm md:text-base text-gray-600">Категория</p>
                <p className="font-podkova font-bold text-lg md:text-xl text-black">
                  {activeTag ? `#${activeTag.toLowerCase()}` : 'все'}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <ReviewModal review={selectedReview} onClose={handleCloseModal} />
    </section>
  );
};

export default Reviews;