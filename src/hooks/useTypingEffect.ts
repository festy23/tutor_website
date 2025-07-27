import { useState, useEffect } from 'react';

interface TypingEffectOptions {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
}

export const useTypingEffect = ({
  words,
  typeSpeed = 100,
  deleteSpeed = 60,
  delaySpeed = 2500,
}: TypingEffectOptions) => {
  const [animatedWord, setAnimatedWord] = useState('');
  
  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const type = () => {
      const currentWord = words[wordIndex];
      setAnimatedWord(currentWord.substring(0, charIndex));

      let currentTypeSpeed = isDeleting ? deleteSpeed : typeSpeed;

      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        currentTypeSpeed = delaySpeed;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        currentTypeSpeed = 500;
      }

      if (!isDeleting) {
        charIndex++;
      } else {
        charIndex--;
      }
      
      timeoutId = setTimeout(type, currentTypeSpeed);
    };

    timeoutId = setTimeout(type, 120);

    return () => clearTimeout(timeoutId);
  }, [words, typeSpeed, deleteSpeed, delaySpeed]);

  return animatedWord;
};
