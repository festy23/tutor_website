import React from 'react';
import { motion } from 'framer-motion';
import Card from '../../../shared/ui/Card/Card';

interface PricingOption {
  emoji: string;
  title: string;
  price: string;
  period: string;
  features: string[];
  link: string;
  featured: boolean;
}

interface PricingCardProps {
  option: PricingOption;
  index: number;
}

const PricingCard: React.FC<PricingCardProps> = ({ option, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="relative"
    >
      <Card
        variant="solid"
        rounded="2xl"
        padding="lg"
        hover={true}
        className={`relative ${
          option.featured ? 'border-2 border-brand-red' : 'border border-gray-200'
        }`}
      >
        {/* Featured Badge */}
        {option.featured && (
          <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
            <span className="px-4 py-1.5 text-xs md:text-sm font-semibold text-white bg-brand-red rounded-full font-space-grotesk shadow-lg whitespace-nowrap grain enhanced-shadow">
              Лучший выбор!
            </span>
          </div>
        )}

        {/* Card Content */}
        <div className="text-center">
          {/* Icon */}
          <motion.img 
            src={option.emoji} 
            alt={option.title} 
            className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mx-auto mb-6" 
            loading="lazy" 
            width="128" 
            height="128"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />

          {/* Title */}
          <h3 className="font-space-grotesk text-xl md:text-2xl font-bold my-4 text-accent">
            {option.title}
          </h3>

          {/* Price */}
          <div className="mb-8">
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              {option.price}
            </span>
            <span className="text-base md:text-lg font-medium text-gray-500">
              {option.period}
            </span>
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-4 mb-10">
          {option.features.map((feature, i) => (
            <motion.li 
              key={i} 
              className="flex items-start"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: (index * 0.1) + (i * 0.05) }}
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-brand-red mr-3 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="font-space-grotesk text-sm md:text-base text-gray-700">
                {feature}
              </span>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <motion.a
          href={option.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-full block text-center font-space-grotesk text-base md:text-lg font-bold py-3 md:py-4 px-6 md:px-8 rounded-xl transition-all duration-300 min-h-12 md:min-h-14 flex items-center justify-center shadow-lg transform hover:-translate-y-1 grain enhanced-shadow ${
            option.featured ? 'bg-brand-red text-white hover:bg-red-700' : 'bg-black text-white hover:bg-gray-800'
          }`}
        >
          Записаться
        </motion.a>
      </Card>
    </motion.div>
  );
};

export default PricingCard;
