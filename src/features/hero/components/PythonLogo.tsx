import React from 'react';
import { motion } from 'framer-motion';

interface PythonLogoProps {
  src: string;
  alt?: string;
}

const PythonLogo: React.FC<PythonLogoProps> = ({ src, alt = "Python Logo" }) => {
  return (
    <div className="flex justify-center lg:justify-start">
      <div className="relative">
        <motion.img
          src={src}
          alt={alt}
          className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 2xl:w-[28rem] 2xl:h-[28rem] object-contain"
          loading="eager"
          fetchPriority="high"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-brand-red opacity-10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default PythonLogo;
