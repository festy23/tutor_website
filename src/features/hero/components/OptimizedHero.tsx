import React, { useEffect, useMemo } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Section from '../../../shared/ui/Section/Section';
import OptimizedImage from '../../../shared/components/OptimizedImage';
import { withPerformanceTracking } from '../../../shared/patterns/withPerformanceTracking';
import { withErrorBoundary } from '../../../shared/patterns/withErrorBoundary';
import { useAnimatedDisciplines } from '../hooks/useAnimatedDisciplines';
import { DISCIPLINES, ANIMATION_CONFIG } from '../constants';
import AnimatedTitle from './AnimatedTitle';
import PythonLogo from './PythonLogo';
import SkillTags from './SkillTags';
import FreeLesson from './FreeLesson';

import pythonLogo from '../../../assets/silver_python_logo.webp';
import profilePic from '../../../assets/profile_pic.webp';

const HeroComponent: React.FC = () => {
  const { currentDiscipline, currentIndex } = useAnimatedDisciplines({
    disciplines: DISCIPLINES,
    interval: ANIMATION_CONFIG.interval,
  });

  // Memoize AOS initialization to prevent re-runs
  const aosConfig = useMemo(() => ({
    duration: 1000,
    once: true,
  }), []);

  useEffect(() => {
    AOS.init(aosConfig);
  }, [aosConfig]);

  // Memoize heavy components to prevent unnecessary re-renders
  const memoizedAnimatedTitle = useMemo(() => (
    <AnimatedTitle 
      currentDiscipline={currentDiscipline?.displayName || ''}
      currentIndex={currentIndex}
    />
  ), [currentDiscipline?.displayName, currentIndex]);

  const memoizedPythonLogo = useMemo(() => (
    <PythonLogo src={pythonLogo} />
  ), []);

  const memoizedSkillTags = useMemo(() => (
    <SkillTags />
  ), []);

  return (
    <Section 
      id="hero" 
      background="beige" 
      className="min-h-screen"
      patternOpacity={0.3}
    >
      {memoizedAnimatedTitle}

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column - Python Logo and Tags */}
        <div className="space-y-10 lg:space-y-12" data-aos="fade-right">
          {memoizedPythonLogo}
          <FreeLesson align="center" />
          {memoizedSkillTags}
        </div>

        {/* Right Column - Profile and Enrollment */}
        <div className="space-y-10 lg:space-y-12" data-aos="fade-left">
          <div className="text-center lg:text-right">
            <h3 className="font-podkova font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black tracking-[-0.01em] leading-[1.1]">
              набор 2026!
            </h3>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <OptimizedImage
                src={profilePic}
                alt="Profile Picture"
                className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] 2xl:w-[36rem] 2xl:h-[36rem] object-cover rounded-2xl enhanced-shadow enhanced-border"
                priority="high"
                loading="eager"
                animated={true}
                width={576}
                height={576}
              />
              {/* Subtle border effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-black opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

// Apply HOCs for performance tracking and error handling
const OptimizedHero = withPerformanceTracking(
  withErrorBoundary(React.memo(HeroComponent), undefined, 'Hero'),
  'Hero'
);

export default OptimizedHero;
