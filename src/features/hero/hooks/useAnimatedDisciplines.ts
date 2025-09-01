import { useState, useEffect } from 'react';
import type { Discipline } from '../types';

interface UseAnimatedDisciplinesProps {
  disciplines: Discipline[];
  interval?: number;
}

export const useAnimatedDisciplines = ({ 
  disciplines, 
  interval = 3000 
}: UseAnimatedDisciplinesProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (disciplines.length <= 1) return;

    const animationInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % disciplines.length);
    }, interval);

    return () => clearInterval(animationInterval);
  }, [disciplines.length, interval]);

  return {
    currentDiscipline: disciplines[currentIndex],
    currentIndex,
    setCurrentIndex,
  };
};
