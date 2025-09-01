import React from 'react';
import Card from '../../../shared/ui/Card/Card';

interface StatsBadgeProps {
  text?: string;
  position?: 'left' | 'right' | 'center';
  delay?: number;
}

const StatsBadge: React.FC<StatsBadgeProps> = ({ 
  text = '70% практика + 30% теории = 100% результата',
  position = 'right',
  delay = 200
}) => {
  const positionClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  };

  return (
    <div className={`flex ${positionClasses[position]} mb-8 md:mb-12`} data-aos="fade-up" data-aos-delay={delay}>
      <Card variant="glass-dark" rounded="xl" padding="sm" hover={false}>
        <p className="font-space-grotesk text-sm md:text-base font-medium leading-tight tracking-[-0.005em] text-white">
          {text}
        </p>
      </Card>
    </div>
  );
};

export default StatsBadge;
