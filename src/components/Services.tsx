import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { services } from '../data/services';
import { typeWriter } from '../utils/typewriter';

const Services: React.FC = () => {
  const typewriterRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && typewriterRef.current) {
            const text = typewriterRef.current.dataset.text || '';
            typeWriter(typewriterRef.current, text);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );

    const currentRef = typewriterRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="services" className="relative py-20 sm:py-32 overflow-hidden">
      
      <div className="relative max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <h2 ref={typewriterRef} className="font-pixel text-3xl sm:text-4xl md:text-5xl text-accent" data-text="Услуги">
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center border-2 border-gray-800 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl ${
                index % 2 === 0 ? 'hover:rotate-2' : 'hover:-rotate-2'
              }`}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <span className="text-5xl mb-4">{service.emoji}</span>
              <h3 className="font-mono text-xl font-bold mb-3 text-accent h-14 flex items-center">{service.title}</h3>
              <p className="font-mono text-sm text-gray-600 mb-6 flex-grow">{service.description}</p>
              <a
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-accent text-white text-sm font-bold py-3 px-6 rounded-lg hover:bg-black transition-colors"
              >
                Узнать больше
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;