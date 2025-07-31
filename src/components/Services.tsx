import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useServices } from '../hooks/useServices';
import Title from './Title';
import ServiceModal from './ServiceModal';
import StudentWorkModal from './StudentWorkModal';


const Services: React.FC = () => {
  const { services, selectedService, handleOpenModal, handleCloseModal } = useServices();
  const [studentWorkModalOpen, setStudentWorkModalOpen] = useState(false);

  const handleOpenStudentWorkModal = () => {
    setStudentWorkModalOpen(true);
  };

  const handleCloseStudentWorkModal = () => {
    setStudentWorkModalOpen(false);
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
          <Title text="Услуги" className="font-heading text-3xl sm:text-4xl md:text-5xl text-accent" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center border-2 border-black transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              {service.title === 'Подготовка к ЕГЭ/ОГЭ' && (
                <div className="absolute -top-4 -right-4 bg-brand-red text-white font-pixel text-xs py-1.5 px-4 rounded-full transform rotate-12 shadow-lg">
                  Набор 2025
                </div>
              )}
              {service.studentWork && (
                <div 
                  onClick={() => handleOpenStudentWorkModal()}
                  className="absolute -top-4 -left-4 bg-accent text-white font-pixel text-xs py-1.5 px-4 rounded-full transform -rotate-12 shadow-lg cursor-pointer hover:scale-110 transition-transform duration-200"
                >
                  работы учеников
                </div>
              )}
              <div className="flex-shrink-0 mb-6">
                <img src={service.icon} alt={service.title} className="w-28 h-28 sm:w-32 sm:h-32 object-contain" loading="lazy" width="128" height="128" />
              </div>
              <h3 className="font-mono text-xl sm:text-2xl font-bold mb-4 text-accent h-16 flex items-center justify-center">
                {service.title}
              </h3>
              <p className="font-mono text-base text-gray-600 mb-8 flex-grow">
                {service.description}
              </p>
              <div className="flex flex-col gap-3 w-full mt-auto">
                <button
                  onClick={() => handleOpenModal(service)}
                  className="w-full inline-block bg-accent text-white text-base font-bold py-4 px-8 rounded-full hover:bg-black transition-all duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg"
                >
                  узнать больше
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ServiceModal service={selectedService} onClose={handleCloseModal} />
      {studentWorkModalOpen && <StudentWorkModal onClose={handleCloseStudentWorkModal} />}
    </section>
  );
};

export default Services;
