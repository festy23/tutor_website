import { useState, useEffect } from 'react';

interface UseAnimatedWordsProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
}

export const useAnimatedWords = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 60,
  delay = 2500,
}: UseAnimatedWordsProps) => {
  const [animatedWord, setAnimatedWord] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState({ typing: typingSpeed, deleting: deletingSpeed });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSpeed({ typing: typingSpeed / 2, deleting: deletingSpeed / 2 });
      } else {
        setSpeed({ typing: typingSpeed, deleting: deletingSpeed });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [typingSpeed, deletingSpeed]);

  useEffect(() => {
    const type = () => {
      const currentWord = words[wordIndex];
      setAnimatedWord(
        isDeleting
          ? currentWord.substring(0, charIndex - 1)
          : currentWord.substring(0, charIndex + 1)
      );

      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }

      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
    };

    const typingTimeout = setTimeout(type, isDeleting ? speed.deleting : speed.typing);
    return () => clearTimeout(typingTimeout);
  }, [animatedWord, isDeleting, words, speed, delay, wordIndex, charIndex]);

  return animatedWord;
};
