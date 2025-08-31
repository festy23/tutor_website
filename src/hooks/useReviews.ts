import { useState, useMemo } from 'react';
import { reviews as allReviews } from '../data/reviews';
import type { Review } from '../data/reviews';

export const useReviews = () => {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);

  const allTags = useMemo(() => [...new Set(allReviews.flatMap(r => r.tags || []))], []);

  const filteredReviews = useMemo(() => {
    if (activeTag) {
      return allReviews.filter(r => r.tags?.includes(activeTag));
    }
    return allReviews;
  }, [activeTag]);

  const handleOpenModal = (review: Review) => {
    setSelectedReview(review);
  };

  const handleCloseModal = () => {
    setSelectedReview(null);
  };

  const handleTagChange = (tag: string | null) => {
    setActiveTag(tag);
  };

  return {
    activeTag,
    allTags,
    filteredReviews,
    selectedReview,
    handleTagChange,
    handleOpenModal,
    handleCloseModal,
  };
};
