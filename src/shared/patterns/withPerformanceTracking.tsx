import React from 'react';
import { usePerformanceMonitor } from '../hooks/usePerformanceMonitor';

 

interface WithPerformanceTrackingProps {
  componentName?: string;
}

export function withPerformanceTracking<P extends object>(
  Component: React.ComponentType<P>,
  displayName?: string
) {
  const WrappedComponent = React.memo<P & WithPerformanceTrackingProps>((props) => {
    const componentName = displayName || Component.displayName || Component.name || 'Unknown';
    const { getAverageRenderTime } = usePerformanceMonitor(componentName);

    // Add performance data to component for debugging
    React.useEffect(() => {
      if (import.meta.env.DEV) {
        interface WindowWithMetrics extends Window {
          __COMPONENT_METRICS?: Record<string, { averageRenderTime: number; lastUpdated: string }>;
        }
        const windowWithMetrics = window as WindowWithMetrics;
        windowWithMetrics.__COMPONENT_METRICS = {
          ...windowWithMetrics.__COMPONENT_METRICS,
          [componentName]: {
            averageRenderTime: getAverageRenderTime(),
            lastUpdated: new Date().toISOString(),
          },
        };
      }
    });

    return <Component {...props} />;
  });

  WrappedComponent.displayName = `withPerformanceTracking(${displayName || Component.displayName || Component.name})`;
  
  return WrappedComponent;
}
