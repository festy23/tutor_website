import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Section from '../shared/ui/Section/Section';
import Title from '../shared/ui/Title/Title';
import Marquee from '../shared/ui/Marquee/Marquee';
import { PricingCard } from '../features/pricing';
import { pricingOptions } from '../data/pricing';

const marqueeTopTexts = ["первое занятие бесплатно!"];
const marqueeBottomTexts = ["с началом учебного года будет повышение цен"];

const Pricing: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Section id="pricing" background="dark" patternOpacity={0.1}>
      <div className="text-center mb-8 md:mb-12" data-aos="fade-up">
        <Title size="lg" color="red" align="center">
          Цены
        </Title>
      </div>

      <Marquee 
        texts={marqueeTopTexts}
        textClassName="text-beige"
        className="mb-12 md:mb-16"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {pricingOptions.map((option, index) => (
          <PricingCard key={index} option={option} index={index} />
        ))}
      </div>

      <Marquee 
        texts={marqueeBottomTexts}
        textClassName="text-beige"
        className="mt-12 md:mt-16"
      />
    </Section>
  );
};

export default Pricing;
