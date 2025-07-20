import React, { useEffect, useRef } from 'react';

const Footer: React.FC = () => {
  const typewriterRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const typeWriter = (element: HTMLElement, speed = 120) => {
      if (element.dataset.typewriterTimer) {
        clearInterval(parseInt(element.dataset.typewriterTimer));
      }

      const text = element.dataset.text || '';
      element.innerHTML = '';
      element.style.visibility = 'visible';
      let i = 0;

      const timer = setInterval(() => {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
        } else {
          clearInterval(timer);
          element.dataset.typewriterTimer = undefined;
        }
      }, speed);

      element.dataset.typewriterTimer = timer.toString();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (typewriterRef.current) {
              typeWriter(typewriterRef.current);
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    if (typewriterRef.current) {
      observer.observe(typewriterRef.current);
    }

    return () => {
      if (typewriterRef.current) {
        observer.unobserve(typewriterRef.current);
      }
    };
  }, []);

  return (
    <footer className="py-12 text-center bg-accent text-background border-t-2 border-accent">
      <div className="container mx-auto px-4 max-w-3xl">
        <div id="contact-footer">
          <h2
            ref={typewriterRef}
            className="font-pixel text-clamp-xl mb-12 uppercase inline-block relative text-background"
            data-text="Контакты"
          ></h2>
          <p>
            Для записи и по всем вопросам пишите в Telegram:{' '}
            <a href="https://t.me/knvlvivn" target="_blank" rel="noopener noreferrer" className="text-background border-b border-dashed border-background hover:bg-background hover:text-accent">
              @knvlvivn
            </a>{' '}
            или на почту:{' '}
            <a href="mailto:ivankon1@icloud.com" className="text-background border-b border-dashed border-background hover:bg-background hover:text-accent">
              ivankon1@icloud.com
            </a>
          </p>
        </div>
        <p className="mt-10 text-sm text-background/50">© 2025 Created by Konovalov Ivan</p>
      </div>
    </footer>
  );
};

export default Footer;