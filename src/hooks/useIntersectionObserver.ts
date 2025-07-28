import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  once?: boolean;
}

export const useIntersectionObserver = <T extends HTMLElement>({
  threshold = 0.6,
  once = true,
}: UseIntersectionObserverProps) => {
  const ref = useRef<T>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  return { ref, isIntersecting };
};
