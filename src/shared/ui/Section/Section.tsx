import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  background?: 'beige' | 'dark' | 'white';
  hasPattern?: boolean;
  patternOpacity?: number;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  id,
  className = '',
  background = 'beige',
  hasPattern = true,
  patternOpacity = 0.2,
  children,
}) => {
  const backgroundClasses = {
    beige: 'bg-beige',
    dark: 'bg-dark-bg',
    white: 'bg-white',
  };

  return (
    <section 
      id={id}
      className={`relative py-16 md:py-20 lg:py-24 ${backgroundClasses[background]} overflow-hidden ${className}`}
    >
      {/* Background Pattern */}
      {hasPattern && (
        <div 
          className="absolute inset-0 bg-grid" 
          style={{ opacity: patternOpacity }}
        />
      )}
      
      <div className="relative z-10 container-responsive section-padding">
        {children}
      </div>
    </section>
  );
};

export default Section;
