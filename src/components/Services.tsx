import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Section from '../shared/ui/Section/Section';
import Title from '../shared/ui/Title/Title';
import { ServiceCard } from '../features/services';
import cupIcon from '../assets/silver_cup.webp';
import hatIcon from '../assets/silver_hat.webp';
import pythonIcon from '../assets/silver_python_logo.webp';

const services = [
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
  },
  {
    id: 1,
    title: 'Изучением программирования',
    description: '• владею Python, C++, Go, C#, Kotlin, Swift\n• пройдём путь с нуля до создания РЕАЛЬНЫХ проектов',
    icon: pythonIcon,
    color: 'bg-beige'
  }
];

const Services: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Section id="services" background="dark" className="py-20 md:py-24 lg:py-32" patternOpacity={0.15}>
      {/* Main Title */}
      <div className="mb-16 md:mb-20 lg:mb-24" data-aos="fade-up">
        <div className="flex flex-col items-center">
          <div className="w-24 h-1 bg-brand-red mb-8 md:mb-12 rounded-full"></div>
          <Title size="xl" color="red" align="center">
            я помогаю ученикам с
          </Title>
        </div>
      </div>

      {/* Services Grid */}
      <div className="space-y-16 lg:space-y-20">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>

      {/* Bottom statement (replaces bubble) */}
      <div className="mt-12 md:mt-16 text-center" data-aos="fade-up" data-aos-delay="150">
        <p className="font-podkova font-bold text-3xl md:text-4xl lg:text-5xl text-beige tracking-[-0.01em] leading-tight">
          70% практика + 30% теории = 100% результата
        </p>
      </div>
    </Section>
  );
};

export default Services;
