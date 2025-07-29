import React, { useState } from 'react';
import { useAnimatedWords } from '../hooks/useAnimatedWords';
import { useHeaderVisibility } from '../hooks/useHeaderVisibility';
import MobileMenu from './MobileMenu';

const navLinks = [
  { href: '#hero', label: 'Главная' },
  { href: '#about', label: 'Обо мне' },
  { href: '#services', label: 'Услуги' },
  { href: '#reviews', label: 'Отзывы' },
  { href: '#pricing', label: 'Цены' },
  { href: 'https://t.me/knvlvivn', label: 'Написать мне', isExternal: true },
];

const animatedWords = ['информатике', 'олимпиадам', 'программиро­ванию'];

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHeaderVisible = useHeaderVisibility(100);
  const animatedWord = useAnimatedWords({ words: animatedWords });

  return (
    <header
      id="sticky-header"
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-out ${
        isHeaderVisible
          ? 'bg-gradient-to-b from-beige/70 to-black/10 backdrop-blur-xl border-b border-gray-200/70'
          : 'bg-transparent border-b border-transparent'
      } ${
        isHeaderVisible ? 'transform-none' : '-translate-y-full'
      }`}
      role="banner"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <a href="#hero" className="font-pixel text-xs font-bold text-gray-800 lowercase">konovalov ivan |</a>
            <div className="font-mono text-xs text-gray-600 ml-2">
              Репетитор по <span className="text-accent inline-block min-w-[120px]">{animatedWord}</span>
            </div>
          </div>

          <div className="relative">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative w-10 h-10 flex items-center justify-center focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Открыть меню</span>
              <div className="flex flex-col justify-center items-center w-full h-full">
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-5 bg-gray-800 transform transition duration-300 ease-in-out ${
                    mobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'
                  }`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-5 bg-gray-800 transform transition duration-300 ease-in-out ${
                    mobileMenuOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-5 bg-gray-800 transform transition duration-300 ease-in-out ${
                    mobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'
                  }`}
                ></span>
              </div>
            </button>
            <MobileMenu navLinks={navLinks} isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
