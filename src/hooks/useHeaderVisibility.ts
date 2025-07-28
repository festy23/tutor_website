import { useState, useEffect } from 'react';

export const useHeaderVisibility = (threshold = 100) => {
  const [isHeaderVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderVisible(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isHeaderVisible;
};
