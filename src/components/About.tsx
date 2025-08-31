import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import booksIcon from '../assets/silver_books.webp';

const About: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="about" className="relative py-16 md:py-20 lg:py-24 bg-beige overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      
      <div className="relative z-10 container-responsive section-padding">
        {/* Main Title */}
        <div className="mb-12 md:mb-16 lg:mb-20" data-aos="fade-up">
          <h2 className="font-podkova font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-brand-red leading-[1.1] tracking-[-0.01em] text-center">
            привет! кратко о себе
          </h2>
        </div>

        {/* Introduction */}
        <div className="mb-12 md:mb-16 lg:mb-20" data-aos="fade-up" data-aos-delay="200">
          <p className="font-space-grotesk text-lg md:text-xl lg:text-2xl xl:text-3xl text-black leading-[1.4] tracking-[-0.005em] max-w-5xl mx-auto text-center">
            Меня зовут Иван и Я помогаю успешно сдавать ЕГЭ и ОГЭ по информатике, а также готовлю к олимпиадам 1/2 уровня.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 mb-16 lg:mb-20">
          {/* Left Column - Stats */}
          <div className="space-y-12 lg:space-y-16">
            {/* First Stat */}
            <div className="border-t-2 border-black pt-6 md:pt-8" data-aos="fade-up" data-aos-delay="400">
              <div className="flex flex-col lg:flex-row lg:items-baseline gap-4 lg:gap-8">
                <h3 className="font-space-grotesk font-medium text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[200px] text-dark-bg leading-[1.1] tracking-[-0.01em] text-center lg:text-left">
                  85+
                </h3>
                <p className="font-space-grotesk text-lg md:text-xl lg:text-2xl xl:text-3xl text-black leading-[1.3] tracking-[-0.005em] text-center lg:text-left">
                  средний балл ЕГЭ учеников
                </p>
              </div>
            </div>

            {/* Second Stat */}
            <div className="border-t-2 border-black pt-6 md:pt-8" data-aos="fade-up" data-aos-delay="600">
              <div className="flex flex-col lg:flex-row lg:items-baseline gap-4 lg:gap-8">
                <h3 className="font-space-grotesk font-medium text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[200px] text-dark-bg leading-[1.1] tracking-[-0.01em] text-center lg:text-left">
                  296
                </h3>
                <p className="font-space-grotesk text-lg md:text-xl lg:text-2xl xl:text-3xl text-black leading-[1.3] tracking-[-0.005em] text-center lg:text-left">
                  мой балл за 3 ЕГЭ
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Info Cards with Staggered Layout */}
          <div className="relative">
            {/* Mobile: Staggered zigzag layout, Desktop: vertical */}
            <div className="block md:hidden space-y-4">
              {/* HSE Info - Left aligned */}
              <div className="mr-8" data-aos="fade-right" data-aos-delay="400">
                <div className="glass-card text-black rounded-3xl px-6 py-4 grain enhanced-shadow">
                  <p className="font-space-grotesk text-base leading-relaxed text-center">
                    учусь в НИУ ВШЭ ФКН<br />
                    на бюджете
                  </p>
                </div>
              </div>

              {/* Experience - Right aligned */}
              <div className="ml-8" data-aos="fade-left" data-aos-delay="500">
                <div className="red-liquid-glass text-white rounded-3xl px-6 py-4 grain enhanced-shadow">
                  <p className="font-space-grotesk text-base leading-relaxed text-center">
                    имею опыт работы в IT
                  </p>
                </div>
              </div>

              {/* EGE Score - Left aligned */}
              <div className="mr-6" data-aos="fade-right" data-aos-delay="600">
                <div className="glass text-black rounded-3xl px-6 py-4 grain enhanced-shadow">
                  <p className="font-space-grotesk text-base leading-relaxed text-center">
                    95 баллов - мой балл ЕГЭ по информатике
                  </p>
                </div>
              </div>

              {/* Students - Right aligned */}
              <div className="ml-6" data-aos="fade-left" data-aos-delay="700">
                <div className="liquid-gradient text-black rounded-3xl px-6 py-4 grain enhanced-shadow">
                  <p className="font-space-grotesk text-base leading-relaxed text-center">
                    более 20 учеников
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop: Traditional vertical layout */}
            <div className="hidden md:block space-y-6 lg:space-y-8">
              {/* HSE Info */}
              <div className="glass-card text-black rounded-full px-6 py-4 md:px-8 md:py-6 grain enhanced-shadow" data-aos="fade-left" data-aos-delay="400">
                <p className="font-space-grotesk text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed text-center">
                  учусь в НИУ ВШЭ ФКН<br />
                  на бюджете
                </p>
              </div>

              {/* Experience */}
              <div className="red-liquid-glass text-white rounded-full px-6 py-4 md:px-8 md:py-6 grain enhanced-shadow" data-aos="fade-left" data-aos-delay="500">
                <p className="font-space-grotesk text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed text-center">
                  имею опыт работы в IT
                </p>
              </div>

              {/* EGE Score */}
              <div className="glass text-black rounded-full px-6 py-4 md:px-8 md:py-6 grain enhanced-shadow" data-aos="fade-left" data-aos-delay="600">
                <p className="font-space-grotesk text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed text-center">
                  95 баллов - мой балл ЕГЭ по информатике
                </p>
              </div>

              {/* Students */}
              <div className="liquid-gradient text-black rounded-full px-6 py-4 md:px-8 md:py-6 grain enhanced-shadow" data-aos="fade-left" data-aos-delay="700">
                <p className="font-space-grotesk text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed text-center">
                  более 20 учеников
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Books Icon */}
        <div className="flex justify-center mb-12 md:mb-16" data-aos="fade-up" data-aos-delay="800">
          <div className="relative">
            <img
              src={booksIcon}
              alt="Books"
              className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 2xl:w-80 2xl:h-80 object-contain animate-float"
            />
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-black opacity-5 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
