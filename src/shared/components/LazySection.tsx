import React, { Suspense } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import LoadingSpinner from './LoadingSpinner';
import ErrorBoundary from './ErrorBoundary';

interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  rootMargin?: string;
  threshold?: number;
  className?: string;
  id?: string;
}

const LazySection: React.FC<LazySectionProps> = ({
  children,
  fallback,
  rootMargin = '100px',
  threshold = 0.1,
  className = '',
  id,
}) => {
  const { elementRef: ref, hasTriggered: hasIntersected } = useIntersectionObserver<HTMLDivElement>({
    rootMargin,
    threshold,
  });

  return (
    <div ref={ref} className={className} id={id}>
      {hasIntersected ? (
        <ErrorBoundary>
          <Suspense fallback={fallback || <LoadingSpinner />}>
            {children}
          </Suspense>
        </ErrorBoundary>
      ) : (
        <div className="min-h-[200px] flex items-center justify-center">
          <LoadingSpinner text="Загружаем секцию..." />
        </div>
      )}
    </div>
  );
};

export default React.memo(LazySection);
