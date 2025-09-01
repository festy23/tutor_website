import React from 'react';
import { motion } from 'framer-motion';

interface FreeLessonProps {
  text?: string;
  align?: 'left' | 'center' | 'right';
}

const FreeLesson: React.FC<FreeLessonProps> = ({ 
  text = 'первое занятие бесплатно!',
  align = 'center'
}) => {
  const alignClasses = {
    left: 'text-left lg:text-left',
    center: 'text-center',
    right: 'text-right lg:text-right',
  };

  return (
    <motion.div 
      className={`${alignClasses[align]}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      <p className="font-space-grotesk text-2xl md:text-3xl lg:text-4xl text-black tracking-[-0.01em] font-medium leading-relaxed">
        {text}
      </p>
    </motion.div>
  );
};

export default FreeLesson;
