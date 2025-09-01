import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
  fallback?: ReactNode | ((error: Error) => ReactNode);
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    
    // In production, you would send this to your error reporting service
    if (import.meta.env.PROD) {
      // Example: Sentry.captureException(error, { contexts: { errorInfo } });
    }
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        if (typeof this.props.fallback === 'function') {
          return this.props.fallback(this.state.error!);
        }
        return this.props.fallback;
      }

      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="min-h-screen bg-beige flex items-center justify-center px-4"
        >
          <div className="text-center max-w-lg">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-brand-red/10 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.502 0L4.232 15.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
            </motion.div>
            
            <h2 className="font-podkova font-bold text-3xl md:text-4xl text-brand-red mb-4">
              Что-то пошло не так
            </h2>
            
            <p className="font-space-grotesk text-lg text-gray-700 mb-8">
              Произошла техническая ошибка. Попробуйте обновить страницу.
            </p>
            
            <motion.button
              onClick={() => window.location.reload()}
              className="bg-black text-white font-space-grotesk text-base py-4 px-8 rounded-full hover:bg-gray-800 transition-colors duration-300 enhanced-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Обновить страницу
            </motion.button>
          </div>
        </motion.div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
