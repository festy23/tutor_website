import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Section from '../../../shared/ui/Section/Section';
import { useAnimatedDisciplines } from '../hooks/useAnimatedDisciplines';
import { DISCIPLINES, ANIMATION_CONFIG } from '../constants';
import AnimatedTitle from './AnimatedTitle';
import PythonLogo from './PythonLogo';
import ProfileImage from './ProfileImage';
import SkillTags from './SkillTags';
import FreeLesson from './FreeLesson';
import { motion } from 'framer-motion';

import pythonLogo from '../../../assets/silver_python_logo.webp';
import profilePic from '../../../assets/profile_pic.webp';

const Hero: React.FC = () => {
  const { currentDiscipline, currentIndex } = useAnimatedDisciplines({
    disciplines: DISCIPLINES,
    interval: ANIMATION_CONFIG.interval,
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Section 
      id="hero" 
      background="beige" 
      className="min-h-screen"
      patternOpacity={0.3}
    >
      <AnimatedTitle 
        currentDiscipline={currentDiscipline?.displayName || ''}
        currentIndex={currentIndex}
      />

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column - Python Logo and Tags */}
        <div className="space-y-10 lg:space-y-12" data-aos="fade-right">
          <PythonLogo src={pythonLogo} />
          <FreeLesson align="center" />
          <SkillTags />
        </div>

        {/* Right Column - Profile and Enrollment */}
        <div className="space-y-10 lg:space-y-12" data-aos="fade-left">
          <motion.div 
            className="text-center lg:text-right"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="font-podkova font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black tracking-[-0.01em] leading-[1.1]">
              набор 2026!
            </h3>
          </motion.div>
          <ProfileImage src={profilePic} />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
