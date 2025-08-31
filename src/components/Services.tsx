import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import cupIcon from '../assets/silver_cup.webp';
import hatIcon from '../assets/silver_hat.webp';
import pythonIcon from '../assets/silver_python_logo.webp';

const Services: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      id: 1,
      title: 'Изучением программирования',
      description: '• владею Python, C++, Go, C#, Kotlin, Swift\n• пройдём путь с нуля до создания РЕАЛЬНЫХ проектов',
      icon: pythonIcon,
      color: 'bg-beige'
    },
    {
      id: 2,
      title: 'Подготовкой к ЕГЭ/ОГЭ',
      description: '• разберём абсолютно ВСЕ задачи\n• правильно распределим время\n• без РЕШУ ЕГЭ и пустой зубрежки\n• современные подходы с ai (NotebookLM)',
      icon: cupIcon,
      color: 'bg-beige'
    },
    {
      id: 3,
      title: 'Подготовкой к олимпиадам',
      description: '• изучим C++ и выучим полезные data structures\n• изучим все сложные алгоритмы (BFS, DFS, деревья, графы)\n• на КАЖДОМ IT-собеседовании спрашивают задачи ПОХОЖИЕ на олимпиадные',
      icon: hatIcon,
      color: 'bg-beige'
    }
  ];

  return (
    <section id="services" className="relative py-20 md:py-24 lg:py-32 bg-dark-bg overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-15"></div>
      
      <div className="relative z-10 container-responsive section-padding">
        {/* Main Title */}
        <div className="mb-16 md:mb-20 lg:mb-24" data-aos="fade-up">
          <div className="flex flex-col items-center">
            <div className="w-24 h-1 bg-brand-red mb-8 md:mb-12 rounded-full"></div>
            <h2 className="font-podkova font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-brand-red leading-[0.9] tracking-[-0.02em] text-center">
              я помогаю ученикам с
            </h2>
          </div>
        </div>

        {/* Practice Theory Ratio - Compact Label */}
        <div className="flex justify-end mb-8 md:mb-12" data-aos="fade-up" data-aos-delay="200">
          <div className="glass-dark text-white px-4 py-2 md:px-6 md:py-3 rounded-xl grain enhanced-shadow">
            <p className="font-space-grotesk text-sm md:text-base font-medium leading-tight tracking-[-0.005em]">
              70% практика + 30% теории = 100% результата
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="space-y-16 lg:space-y-20">
          {services.map((service, index) => (
            <div key={service.id} className="group relative p-8 md:p-12 lg:p-16" data-aos="fade-up" data-aos-delay={400 + index * 100}>
              {/* Subtle background accent */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-red/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                {/* Icon */}
                <div className="lg:col-span-4 flex justify-center lg:justify-start">
                  <div className="relative">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-48 xl:h-48 2xl:w-56 2xl:h-56 object-contain animate-float transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                    {/* Enhanced glow effect */}
                    <div className="absolute inset-0 bg-brand-red opacity-20 rounded-full blur-3xl transition-opacity duration-300 group-hover:opacity-30"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-8">
                  <div className="space-y-6 md:space-y-8">
                    {/* Service Title */}
                    <h3 className="font-podkova font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-brand-red leading-[0.9] tracking-[-0.02em] text-center lg:text-left">
                      {service.title}
                    </h3>
                    
                    {/* Service Description */}
                    <div className="glass-dark text-white p-6 md:p-8 rounded-3xl grain enhanced-shadow">
                      <p className="font-space-grotesk text-lg md:text-xl lg:text-2xl leading-[1.4] tracking-[-0.005em] whitespace-pre-line text-center lg:text-left">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
