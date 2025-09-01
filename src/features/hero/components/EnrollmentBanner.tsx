import React from 'react';
import { motion } from 'framer-motion';

interface EnrollmentBannerProps {
  text?: string;
  year?: string;
  align?: 'left' | 'center' | 'right';
}

const EnrollmentBanner: React.FC<EnrollmentBannerProps> = ({ 
  text = 'набор',
  year = '2026',
  align = 'right'
}) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right lg:text-right',
  };

  return (
    <motion.div 
      className={`text-center lg:${alignClasses[align]}`}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      <h3 className="font-podkova font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black tracking-[-0.01em] leading-[1.1]">
        {text} {year}!
      </h3>
    </motion.div>
  );
};

export default EnrollmentBanner;
