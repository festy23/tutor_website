import React from 'react';
import { motion } from 'framer-motion';

interface TitleProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'red' | 'black' | 'white' | 'gray';
  align?: 'left' | 'center' | 'right';
  className?: string;
  animated?: boolean;
  delay?: number;
}

const Title: React.FC<TitleProps> = ({
  children,
  size = 'lg',
  color = 'red',
  align = 'center',
  className = '',
  animated = true,
  delay = 0,
}) => {
  const sizeClasses = {
    sm: 'text-2xl md:text-3xl lg:text-4xl',
    md: 'text-3xl md:text-4xl lg:text-5xl',
    lg: 'text-4xl md:text-5xl lg:text-6xl xl:text-7xl',
    xl: 'text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl',
  };

  const colorClasses = {
    red: 'text-brand-red',
    black: 'text-black',
    white: 'text-white',
    gray: 'text-gray-700',
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const titleContent = (
    <h2 className={`
      font-podkova font-bold 
      ${sizeClasses[size]} 
      ${colorClasses[color]} 
      ${alignClasses[align]}
      leading-[1.1] tracking-[-0.01em]
      ${className}
    `}>
      {children}
    </h2>
  );

  if (!animated) {
    return titleContent;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
        delay,
      }}
    >
      {titleContent}
    </motion.div>
  );
};

export default Title;
