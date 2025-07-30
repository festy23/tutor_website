import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useServices } from '../hooks/useServices';
import Title from './Title';
import ServiceModal from './ServiceModal';
import StudentWorkModal from './StudentWorkModal';
import type { Service } from '../data/services';

const Services: React.FC = () => {
  const { services, selectedService, handleOpenModal, handleCloseModal } = useServices();
  const [studentWorkModalOpen, setStudentWorkModalOpen] = useState(false);
  const [selectedStudentWork, setSelectedStudentWork] = useState<Service | null>(null);

  const handleOpenStudentWorkModal = (service: Service) => {
    setSelectedStudentWork(service);
    setStudentWorkModalOpen(true);
  };

  const handleCloseStudentWorkModal = () => {
    setStudentWorkModalOpen(false);
    setSelectedStudentWork(null);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section id="services" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="relative max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-12 sm:mb-16">
          <Title text="Услуги" className="font-pixel text-3xl sm:text-4xl md:text-5xl text-accent" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center border-2 border-black transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              {service.title === 'Подготовка к ЕГЭ/ОГЭ' && (
                <div className="absolute -top-4 -right-4 bg-brand-red text-white font-pixel text-xs py-1 px-3 rounded-full transform rotate-12 shadow-lg">
                  Набор 2025
                </div>
              )}
              {service.studentWork && (
                <div 
                  onClick={() => handleOpenStudentWorkModal(service)}
                  className="absolute -top-4 -left-4 bg-accent text-white font-pixel text-xs py-1 px-3 rounded-full transform -rotate-12 shadow-lg cursor-pointer hover:scale-110 transition-transform duration-200"
                >
                  Работы учеников
                </div>
              )}
              <div className="flex-shrink-0 mb-6">
                <img src={service.icon} alt={service.title} className="w-24 h-24 sm:w-28 sm:h-28 object-contain" />
              </div>
              <h3 className="font-mono text-lg sm:text-xl font-bold mb-3 text-accent h-16 flex items-center justify-center">
                {service.title}
              </h3>
              <p className="font-mono text-sm sm:text-base text-gray-600 mb-6 flex-grow">
                {service.description}
              </p>
              <div className="flex flex-col gap-2 w-full mt-auto">
                <button
                  onClick={() => handleOpenModal(service)}
                  className="w-full inline-block bg-accent text-white text-sm font-bold py-3 px-8 rounded-full hover:bg-black transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                >
                  Узнать больше
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ServiceModal service={selectedService} onClose={handleCloseModal} />
      {studentWorkModalOpen && <StudentWorkModal service={selectedStudentWork} onClose={handleCloseStudentWorkModal} />}
    </section>
  );
};

export default Services;
