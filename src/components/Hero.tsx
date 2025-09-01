import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import pythonLogo from '../assets/silver_python_logo.webp';
import profilePic from '../assets/profile_pic.webp';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [currentDiscipline, setCurrentDiscipline] = useState(0);
  
  const disciplines = [
    'python',
    'информатике'
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Анимация смены дисциплин
    const interval = setInterval(() => {
      setCurrentDiscipline((prev) => (prev + 1) % disciplines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [disciplines.length]);

  return (
    <section id="hero" className="relative min-h-screen bg-beige overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      
      <div className="relative z-10 container-responsive section-padding">
        {/* Main Title Section */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20" data-aos="fade-up">
          <h1 className="font-podkova font-bold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-brand-red leading-[1.1] tracking-[-0.02em] mb-2 sm:mb-4">
            <span className="whitespace-nowrap">репетитор по</span>{' '}
            <span className="block sm:inline">
              <span className="inline-block relative h-[1.2em] min-w-[12ch] align-baseline">
                <motion.span
                  key={currentDiscipline}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 200, 
                    damping: 20,
                    duration: 0.6
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  {disciplines[currentDiscipline]}
                </motion.span>
              </span>
            </span>
          </h1>
          <h2 className="font-podkova font-bold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-brand-red leading-[1.1] tracking-[-0.02em]">
            из вшэ
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Python Logo and Tags */}
          <div className="space-y-10 lg:space-y-12" data-aos="fade-right">
            {/* Python Logo */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <img
                  src={pythonLogo}
                  alt="Python Logo"
                  className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 2xl:w-[28rem] 2xl:h-[28rem] object-contain animate-float"
                  loading="eager"
                  fetchPriority="high"
                  width={384}
                  height={384}
                  sizes="(min-width: 1536px) 448px, (min-width: 1280px) 384px, (min-width: 1024px) 320px, (min-width: 768px) 288px, 256px"
                />
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-brand-red opacity-10 rounded-full blur-3xl"></div>
              </div>
            </div>

            {/* Free First Lesson */}
            <div className="text-center lg:text-left">
              <p className="font-space-grotesk text-2xl md:text-3xl lg:text-4xl text-black tracking-[-0.01em] font-medium leading-relaxed">
                первое занятие бесплатно!
              </p>
            </div>

            {/* Tags Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-5" data-aos="fade-up" data-aos-delay="400">
              <div className="glass-dark text-white rounded-full px-5 py-3 md:px-6 md:py-4 font-space-grotesk text-base md:text-lg lg:text-xl text-center grain enhanced-shadow">
                #ЕГЭ
              </div>
              <div className="glass-dark text-white rounded-full px-5 py-3 md:px-6 md:py-4 font-space-grotesk text-base md:text-lg lg:text-xl text-center grain enhanced-shadow">
                #ОГЭ
              </div>
              <div className="glass-dark text-white rounded-full px-5 py-3 md:px-6 md:py-4 font-space-grotesk text-base md:text-lg lg:text-xl text-center grain enhanced-shadow col-span-2">
                #Python (+пет проекты)
              </div>
              <div className="glass-dark text-white rounded-full px-5 py-3 md:px-6 md:py-4 font-space-grotesk text-base md:text-lg lg:text-xl text-center grain enhanced-shadow col-span-2">
                #Олимпиады
              </div>
            </div>
          </div>

          {/* Right Column - Profile and Enrollment */}
          <div className="space-y-10 lg:space-y-12" data-aos="fade-left">
            {/* Enrollment */}
            <div className="text-center lg:text-right">
              <h3 className="font-podkova font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black tracking-[-0.01em] leading-[1.1]">
                набор 2026!
              </h3>
            </div>

            {/* Profile Picture */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src={profilePic}
                  alt="Profile Picture"
                  className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] 2xl:w-[36rem] 2xl:h-[36rem] object-cover rounded-2xl enhanced-shadow enhanced-border transition-opacity duration-300 opacity-100"
                  loading="eager"
                  fetchPriority="high"
                  width={576}
                  height={576}
                  sizes="(min-width: 1536px) 576px, (min-width: 1280px) 512px, (min-width: 1024px) 448px, (min-width: 768px) 384px, 320px"
                />
                {/* Subtle border effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-black opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;