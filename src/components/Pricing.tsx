import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { pricingOptions } from '../data/pricing';

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
    <section id="pricing" className="relative py-16 md:py-20 lg:py-24 bg-dark-bg overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      
      <div className="relative z-10 container-responsive section-padding">
        <div className="text-center mb-8 md:mb-12" data-aos="fade-up">
          <h2 className="font-podkova font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-brand-red leading-[1.1] tracking-[-0.01em]">
            Цены
          </h2>
        </div>

        <div className="relative w-full overflow-hidden py-4 md:py-3 mb-12 md:mb-16 border-y-2 border-dashed border-gray-300">
          <div className="flex animate-marquee-mobile md:animate-marquee whitespace-nowrap">
            {Array(30).fill(marqueeTopTexts).flat().map((text, i) => (
              <div key={i} className="flex items-center">
                <span className="text-brand-red mx-6 md:mx-4 font-pixel text-lg md:text-base">—</span>
                <p className="font-space-grotesk text-base md:text-base text-beige mr-6 md:mr-4">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl enhanced-shadow p-6 md:p-8 transition-all duration-300 transform hover:scale-105 grain ${
                option.featured ? 'border-2 border-brand-red' : 'border border-gray-200'
              }`}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              {option.featured && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 text-xs md:text-sm font-semibold text-white bg-brand-red rounded-full font-space-grotesk shadow-lg whitespace-nowrap grain enhanced-shadow">
                    Лучший выбор!
                  </span>
                </div>
              )}
              <div className="text-center">
                <img src={option.emoji} alt={option.title} className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mx-auto mb-6" loading="lazy" width="128" height="128" />
                <h3 className="font-space-grotesk text-xl md:text-2xl font-bold my-4 text-accent">{option.title}</h3>
                <div className="mb-8">
                  <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">{option.price}</span>
                  <span className="text-base md:text-lg font-medium text-gray-500">{option.period}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-10">
                {option.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-brand-red mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="font-space-grotesk text-sm md:text-base text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={option.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full block text-center font-space-grotesk text-base md:text-lg font-bold py-3 md:py-4 px-6 md:px-8 rounded-xl transition-all duration-300 min-h-12 md:min-h-14 flex items-center justify-center shadow-lg transform hover:-translate-y-1 grain enhanced-shadow ${
                  option.featured ? 'bg-brand-red text-white hover:bg-red-700' : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                Записаться
              </a>
            </div>
          ))}
        </div>

        <div className="relative w-full overflow-hidden py-4 md:py-3 mt-12 md:mt-16 border-y-2 border-dashed border-gray-300">
          <div className="flex animate-marquee-mobile md:animate-marquee whitespace-nowrap">
            {Array(30).fill(marqueeBottomTexts).flat().map((text, i) => (
              <div key={i} className="flex items-center">
                <span className="text-brand-red mx-6 md:mx-4 font-pixel text-lg md:text-base">—</span>
                <p className="font-space-grotesk text-base md:text-base text-beige mr-6 md:mr-4">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
