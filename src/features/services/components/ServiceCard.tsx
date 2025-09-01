import React from 'react';
import Card from '../../../shared/ui/Card/Card';

interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
    color: string;
  };
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <div className="group relative p-8 md:p-12 lg:p-16" data-aos="fade-up" data-aos-delay={400 + index * 100}>
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
            {/* Service Title - beige text, no bubble */}
            <h3 className="font-podkova font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-beige leading-[1.1] sm:leading-[1.0] md:leading-[0.9] tracking-[-0.02em] text-center lg:text-left">
              {service.title}
            </h3>
            
            {/* Service Description - full-bleed on mobile for wider bubble */}
            <div className="-mx-4 sm:mx-0">
              <Card variant="glass-dark" rounded="3xl" padding="lg">
                <p className="font-space-grotesk text-lg md:text-xl lg:text-2xl leading-[1.4] tracking-[-0.005em] whitespace-pre-line text-center lg:text-left text-white">
                  {service.description}
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
