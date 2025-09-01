import { useEffect, useRef } from 'react';

interface PerformanceMetrics {
  renderTime: number;
  componentName: string;
  timestamp: number;
}

export const usePerformanceMonitor = (componentName: string) => {
  const renderStartTime = useRef<number | undefined>(undefined);
  const metricsRef = useRef<PerformanceMetrics[]>([]);

  useEffect(() => {
    renderStartTime.current = performance.now();
  });

  useEffect(() => {
    if (renderStartTime.current) {
      const renderTime = performance.now() - renderStartTime.current;
      const metrics: PerformanceMetrics = {
        renderTime,
        componentName,
        timestamp: Date.now(),
      };

      metricsRef.current.push(metrics);

      // Log slow renders (>16ms for 60fps)
      if (renderTime > 16) {
        console.warn(`🐌 Slow render detected in ${componentName}: ${renderTime.toFixed(2)}ms`);
      }

      // Keep only last 100 metrics
      if (metricsRef.current.length > 100) {
        metricsRef.current = metricsRef.current.slice(-100);
      }
    }
  });

  const getMetrics = () => metricsRef.current;
  
  const getAverageRenderTime = () => {
    const metrics = metricsRef.current;
    if (metrics.length === 0) return 0;
    return metrics.reduce((sum, m) => sum + m.renderTime, 0) / metrics.length;
  };

  return { getMetrics, getAverageRenderTime };
};
