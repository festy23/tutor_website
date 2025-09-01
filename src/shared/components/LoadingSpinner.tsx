import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  text = 'Загрузка...', 
  fullScreen = false 
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const containerClass = fullScreen 
    ? 'min-h-screen bg-beige flex items-center justify-center'
    : 'flex items-center justify-center py-8';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={containerClass}
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
          className={`${sizeClasses[size]} border-4 border-brand-red/20 border-t-brand-red rounded-full mx-auto mb-4`}
        />
        
        {text && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-space-grotesk text-sm md:text-base text-gray-600"
          >
            {text}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default LoadingSpinner;
