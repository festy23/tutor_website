import React, { useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { typeWriter } from '../utils/typewriter';

interface TitleProps {
  text: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ text, className }) => {
  const { ref, isIntersecting } = useIntersectionObserver<HTMLHeadingElement>({
    threshold: 0.6,
    once: true,
  });

  useEffect(() => {
    if (isIntersecting && ref.current) {
      typeWriter(ref.current, text);
    }
  }, [isIntersecting, ref, text]);

  return <h2 ref={ref} className={className} data-text={text}></h2>;
};

export default Title;
