import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { pricingOptions } from '../data/pricing';
import Title from './Title';

const Pricing: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="pricing" className="py-20 sm:py-32">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Title text="Цены" className="font-pixel text-3xl sm:text-4xl md:text-5xl text-accent" />
        </div>

        <div className="relative w-full overflow-hidden bg-gray-800/5 py-3 mb-12 sm:mb-16 border-y-2 border-dashed border-gray-300">
          <div className="flex animate-marquee-mobile md:animate-marquee whitespace-nowrap">
            {[...Array(4)].map((_, i) => (
              <p key={i} className="font-pixel text-sm sm:text-base text-gray-600 mx-8">
                первое занятие бесплатно!
                <span className="text-accent mx-2">*</span>
                проведем тест!
                <span className="text-accent mx-2">*</span>
                узнаем ваш уровень знаний!
              </p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl shadow-lg p-6 sm:p-8 transition-transform duration-300 transform hover:scale-105 ${
                option.featured ? 'border-2 border-brand-red' : 'border border-gray-200'
              }`}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              {option.featured && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 text-xs sm:text-sm font-semibold text-white bg-accent rounded-full">
                    Best Value
                  </span>
                </div>
              )}
              <div className="text-center">
                <span className="text-4xl sm:text-5xl mb-4">{option.emoji}</span>
                <h3 className="font-mono text-xl sm:text-2xl font-bold my-4 text-accent">{option.title}</h3>
                <div className="mb-6">
                  <span className="text-3xl sm:text-4xl font-bold text-gray-900">{option.price}</span>
                  <span className="text-base sm:text-lg font-medium text-gray-500">{option.period}</span>
                </div>
              </div>
              <ul className="space-y-3 sm:space-y-4 mb-8">
                {option.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-accent mr-2 sm:mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="font-mono text-sm sm:text-base text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={option.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full block text-center font-mono text-base font-bold py-3 px-6 rounded-lg transition-colors min-h-12 min-w-32 flex items-center justify-center ${
                  option.featured ? 'bg-brand-red text-white hover:bg-brand-red/90' : 'bg-beige text-accent hover:bg-beige/80'
                }`}
              >
                Записаться
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
