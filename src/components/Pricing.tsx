import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { pricingOptions } from '../data/pricing';
import Title from './Title';

const marqueeTopTexts = [
  "первое занятие бесплатно!",
];
const marqueeBottomTexts = [
  "с началом учебного года будет повышение цен",
];

const Pricing: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="pricing" className="py-20 sm:py-32">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <Title text="Цены" className="font-heading text-3xl sm:text-4xl md:text-5xl text-accent" />
      </div>

      <div className="relative w-full overflow-hidden bg-gray-800/5 py-3 mb-12 sm:mb-16 border-y-2 border-dashed border-gray-300">
        <div className="flex animate-marquee-mobile md:animate-marquee whitespace-nowrap">
          {Array(50).fill(marqueeTopTexts).flat().map((text, i) => (
            <div key={i} className="flex items-center">
              <span className="text-accent mx-4 font-pixel">*</span>
              <p className="font-mono text-sm sm:text-base text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg p-6 sm:p-8 transition-transform duration-300 transform hover:scale-105 ${
                option.featured ? 'border-2 border-brand-red' : 'border-2 border-black'
              }`}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              {option.featured && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 text-sm font-semibold text-white bg-accent rounded-full font-mono shadow-lg">
                    Лучший выбор!
                  </span>
                </div>
              )}
              <div className="text-center">
                <img src={option.emoji} alt={option.title} className="w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-6" loading="lazy" width="128" height="128" />
                <h3 className="font-mono text-xl sm:text-2xl font-bold my-4 text-accent">{option.title}</h3>
                <div className="mb-8">
                  <span className="text-4xl sm:text-5xl font-bold text-gray-900">{option.price}</span>
                  <span className="text-lg font-medium text-gray-500">{option.period}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-10">
                {option.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="font-mono text-base text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={option.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full block text-center font-mono text-lg font-bold py-4 px-8 rounded-xl transition-all duration-300 min-h-14 flex items-center justify-center shadow-lg transform hover:-translate-y-1 ${
                  option.featured ? 'bg-brand-red text-white hover:bg-red-700' : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                Записаться
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-gray-800/5 py-3 mt-12 sm:mt-16 border-y-2 border-dashed border-gray-300">
        <div className="flex animate-marquee-mobile md:animate-marquee whitespace-nowrap">
          {Array(50).fill(marqueeBottomTexts).flat().map((text, i) => (
            <div key={i} className="flex items-center">
              <span className="text-accent mx-4 font-pixel">*</span>
              <p className="font-mono text-sm sm:text-base text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
