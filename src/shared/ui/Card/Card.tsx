import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  variant?: 'glass' | 'glass-dark' | 'glass-card' | 'solid';
  hover?: boolean;
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
  animated?: boolean;
  delay?: number;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'glass-card',
  hover = true,
  rounded = 'xl',
  padding = 'md',
  className = '',
  onClick,
  animated = true,
  delay = 0,
}) => {
  const variantClasses = {
    glass: 'glass',
    'glass-dark': 'glass-dark',
    'glass-card': 'glass-card',
    solid: 'bg-white border border-gray-200',
  };

  const roundedClasses = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
  };

  const paddingClasses = {
    sm: 'p-3',
    md: 'p-4 md:p-6',
    lg: 'p-6 md:p-8',
    xl: 'p-8 md:p-10',
  };

  const cardContent = (
    <div
      className={`
        ${variantClasses[variant]}
        ${roundedClasses[rounded]}
        ${paddingClasses[padding]}
        ${hover ? 'transition-all duration-300 hover:scale-105 cursor-pointer' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        grain enhanced-shadow
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );

  if (!animated) {
    return cardContent;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
        delay,
      }}
      whileHover={hover ? { scale: 1.02, y: -5 } : undefined}
    >
      {cardContent}
    </motion.div>
  );
};

export default Card;
