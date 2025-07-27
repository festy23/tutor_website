import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setHeaderVisible] = useState(false);
  const [animatedWord, setAnimatedWord] = useState('');

  useEffect(() => {
    const words = ['информатике', 'олимпиадам', 'программированию'];
    const handleScroll = () => {
      setHeaderVisible(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const type = () => {
      const currentWord = words[wordIndex];
      setAnimatedWord(currentWord.substring(0, charIndex));

      let typeSpeed = isDeleting ? 60 : 100;

      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typeSpeed = 2500;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
      }

      if (!isDeleting) {
        charIndex++;
      } else {
        charIndex--;
      }
      
      timeoutId = setTimeout(type, typeSpeed);
    };

    timeoutId = setTimeout(type, 120);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const navLinks = [
    { href: '#hero', label: 'Главная' },
    { href: '#about', label: 'Обо мне' },
    { href: '#services', label: 'Услуги' },
    { href: '#achievements', label: 'Почему я?' },
    { href: '#reviews', label: 'Отзывы' },
    { href: '#pricing', label: 'Цены' },
    { href: 'https://t.me/knvlvivn', label: 'Написать мне', isExternal: true },
  ];

  return (
    <header
      id="sticky-header"
      className={`sticky top-0 z-50 w-full bg-beige/95 backdrop-blur-sm border-b border-gray-200 transition-transform duration-300 ease-out ${
        isHeaderVisible ? 'transform-none' : '-translate-y-full'
      }`}
      role="banner"
    >
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Side: Name */}
          <div className="flex-shrink-0">
            <a href="#hero" className="font-mono text-sm sm:text-base font-bold text-accent">Коновалов Иван</a>
          </div>

          {/* Center: Animated Search Bar */}
          <div className="flex-1 justify-center px-2">
            <div className="font-mono text-xs sm:text-sm text-gray-600 text-center">
              Репетитор по <span className="text-accent">{animatedWord}</span>
              <span className="animate-blink">|</span>
            </div>
          </div>

          {/* Right Side: Desktop Menu (hidden on small screens) */}
          <nav className="hidden md:flex space-x-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.isExternal ? '_blank' : undefined}
                rel={link.isExternal ? 'noopener noreferrer' : undefined}
                className="font-mono text-sm text-gray-700 hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Side: Mobile Menu (hidden on medium screens and up) */}
          <div className="md:hidden relative">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative w-12 h-12 rounded-full bg-yellow/80 flex items-center justify-center focus:outline-none transition-all duration-300 ease-in-out transform hover:scale-105"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Открыть меню</span>
              <div className="flex flex-col justify-center items-center w-full h-full">
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-6 bg-accent transform transition duration-300 ease-in-out ${
                    mobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
                  }`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-6 bg-accent transform transition duration-300 ease-in-out ${
                    mobileMenuOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-6 bg-accent transform transition duration-300 ease-in-out ${
                    mobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
                  }`}
                ></span>
              </div>
            </button>
            
            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
              <div id="mobile-menu" className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-lg z-50 border border-gray-200">
                <nav className="py-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target={link.isExternal ? '_blank' : undefined}
                      rel={link.isExternal ? 'noopener noreferrer' : undefined}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-2 text-sm font-mono text-gray-700 hover:bg-gray-100"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;