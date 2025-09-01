import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import DefaultErrorFallback from '../components/DefaultErrorFallback';

interface ErrorFallbackProps {
  error?: Error;
  componentName?: string;
}

export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  ErrorFallback: React.ComponentType<ErrorFallbackProps> = DefaultErrorFallback,
  componentName?: string
) {
  const WrappedComponent: React.FC<P> = (props) => {
    const name = componentName || Component.displayName || Component.name || 'Unknown';
    
    return (
      <ErrorBoundary fallback={(error) => <ErrorFallback error={error} componentName={name} />}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };

  WrappedComponent.displayName = `withErrorBoundary(${name})`;
  
  return WrappedComponent;
}
