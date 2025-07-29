import { useState, useMemo, useEffect, useRef } from 'react';
import { reviews as allReviews } from '../data/reviews';
import type { Review } from '../data/reviews';

export const useReviews = () => {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [[page, direction], setPage] = useState([0, 0]);
  const [isAutoplaying, setIsAutoplaying] = useState(true);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const autoplayRef = useRef<number | null>(null);
  const [autoplayInterval, setAutoplayInterval] = useState(3000);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setAutoplayInterval(1500);
      } else {
        setAutoplayInterval(3000);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const allTags = useMemo(() => [...new Set(allReviews.flatMap(r => r.tags || []))], []);

  const filteredReviews = useMemo(() => {
    const reviewsList = activeTag ? allReviews.filter(r => r.tags?.includes(activeTag)) : allReviews;
    // Reset pagination when filter changes
    setPage([0, 0]);
    return reviewsList;
  }, [activeTag]);

  const reviewIndex = useMemo(() => {
    if (filteredReviews.length === 0) return 0;
    return (page % filteredReviews.length + filteredReviews.length) % filteredReviews.length;
  }, [page, filteredReviews.length]);

  const paginate = (newDirection: number) => {
    setPage(prev => [prev[0] + newDirection, newDirection]);
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
      autoplayRef.current = window.setInterval(() => {
        setPage(([p]) => [p + 1, 1]);
      }, autoplayInterval);
    } else if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isAutoplaying, filteredReviews.length, autoplayInterval]);

  return {
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
  };
};
