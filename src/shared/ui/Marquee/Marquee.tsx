import React from 'react';

interface MarqueeProps {
  texts: string[];
  speed?: 'slow' | 'normal' | 'fast';
  direction?: 'left' | 'right';
  separator?: string;
  className?: string;
  textClassName?: string;
}

const Marquee: React.FC<MarqueeProps> = ({
  texts,
  speed = 'normal',
  direction = 'left',
  separator = '—',
  className = '',
  textClassName = '',
}) => {
  const speedClasses = {
    slow: 'animate-marquee-slow',
    normal: 'animate-marquee-mobile md:animate-marquee',
    fast: 'animate-marquee-fast',
  };

  const directionClass = direction === 'right' ? 'flex-row-reverse' : '';

  return (
    <div className={`relative w-full overflow-hidden py-4 md:py-3 border-y-2 border-dashed border-gray-300 ${className}`}>
      <div className={`flex ${speedClasses[speed]} ${directionClass} whitespace-nowrap`}>
        {Array(30).fill(texts).flat().map((text, i) => (
          <div key={i} className="flex items-center">
            <span className="text-brand-red mx-6 md:mx-4 font-pixel text-lg md:text-base">
              {separator}
            </span>
            <p className={`font-space-grotesk text-base md:text-base mr-6 md:mr-4 ${textClassName}`}>
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
