import React, { useState, useEffect } from 'react';

interface HeaderProps {
  showTitle: boolean;
}

const Header: React.FC<HeaderProps> = ({ showTitle }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [dynamicText, setDynamicText] = useState('');
  const words = ['программированию', 'информатике', 'олимпиадам'];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    const sections = document.querySelectorAll('main > section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        setDynamicText(currentWord.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setDynamicText(currentWord.substring(0, charIndex + 1));
        charIndex++;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => (isDeleting = true), 3000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    };

    const typingInterval = setInterval(type, isDeleting ? 50 : 80);

    return () => clearInterval(typingInterval);
  }, []);

  const navLinks = [
    { href: '#hero', label: 'Главная' },
    { href: '#about', label: 'Обо мне' },
    { href: '#services', label: 'Услуги' },
    { href: '#achievements', label: 'Достижения' },
    { href: '#reviews', label: 'Отзывы' },
    { href: '#pricing', label: 'Цены' },
  ];

  return (
    <header
      id="sticky-header"
      className={`fixed top-0 left-0 w-full bg-beige/60 backdrop-blur-xl py-4 z-50 border-b-2 border-accent transition-transform duration-300 ease-out ${
        isSticky ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="font-mono text-sm text-accent">Коновалов Иван</div>
          <div
            className={`header-title font-pixel text-accent text-lg transition-all duration-500 text-center ${
              showTitle ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 -translate-y-5 blur-sm'
            }`}
          >
            Репетитор по <span className="dynamic-text inline-block min-w-[320px] text-left">{dynamicText}</span>
          </div>
          <nav>
            <ul className="flex items-center gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`font-mono text-sm text-accent transition-all duration-300 ${
                      activeSection === link.href.substring(1) ? 'underline' : 'hover:underline'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;