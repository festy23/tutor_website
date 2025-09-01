import React from 'react';
import { motion } from 'framer-motion';

interface ProfileImageProps {
  src: string;
  alt?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt = "Profile Picture" }) => {
  return (
    <motion.div 
      className="flex justify-center lg:justify-end"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, duration: 0.8 }}
    >
      <div className="relative">
        <img
          src={src}
          alt={alt}
          className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] 2xl:w-[36rem] 2xl:h-[36rem] object-cover rounded-2xl enhanced-shadow enhanced-border"
          loading="eager"
          fetchPriority="high"
        />
        {/* Subtle border effect */}
        <div className="absolute inset-0 rounded-2xl border-2 border-black opacity-20"></div>
      </div>
    </motion.div>
  );
};

export default ProfileImage;
