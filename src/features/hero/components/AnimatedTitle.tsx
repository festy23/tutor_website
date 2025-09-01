import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ANIMATION_CONFIG } from '../constants';

interface AnimatedTitleProps {
  currentDiscipline: string;
  currentIndex: number;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ currentDiscipline, currentIndex }) => {
  return (
    <div className="text-center mb-12 md:mb-16 lg:mb-20" data-aos="fade-up">
      <h1 className="font-podkova font-bold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-brand-red leading-[1.1] tracking-[-0.02em] mb-2 sm:mb-4">
        <span className="whitespace-nowrap">репетитор по</span>{' '}
        <span className="block sm:inline">
          <span className="relative inline-block align-baseline h-[1.2em] min-w-[12ch] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentIndex}
                initial={{ opacity: 0, y: 30, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -30, rotateX: 90 }}
                transition={ANIMATION_CONFIG.springConfig}
                className="absolute inset-0 flex items-center justify-center"
                style={{ transformOrigin: 'center center' }}
              >
                {currentDiscipline}
              </motion.span>
            </AnimatePresence>
          </span>
        </span>
      </h1>
      <h2 className="font-podkova font-bold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-brand-red leading-[1.1] tracking-[-0.02em]">
        из вшэ
      </h2>
    </div>
  );
};

export default AnimatedTitle;
