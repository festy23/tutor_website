import React, { useState } from 'react';
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

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHeaderVisible = useHeaderVisibility(100);

  return (
    <header
      id="sticky-header"
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-out ${
        isHeaderVisible
          ? 'backdrop-blur-lg bg-white/35 border-b border-black/10'
          : 'bg-transparent border-b border-transparent'
      } ${
        isHeaderVisible ? 'transform-none' : '-translate-y-full'
      }`}
      role="banner"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-baseline">
            <a href="#hero" className="font-space-grotesk text-sm md:text-base font-bold text-black hover:text-brand-red transition-colors duration-200">
              konovalov ivan
            </a>
            <div className="hidden sm:block font-space-grotesk text-xs md:text-sm text-gray-600 ml-2">
              | репетитор по python
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.isExternal ? '_blank' : undefined}
                rel={link.isExternal ? 'noopener noreferrer' : undefined}
                className="font-space-grotesk text-sm md:text-base font-bold text-black hover:text-brand-red transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="relative md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative w-12 h-12 flex items-center justify-center focus:outline-none -mr-2"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Открыть меню</span>
              <div className="flex flex-col justify-center items-center w-full h-full">
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-6 bg-black transform transition duration-300 ease-in-out ${
                    mobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'
                  }`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-6 bg-black transform transition duration-300 ease-in-out ${
                    mobileMenuOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-6 bg-black transform transition duration-300 ease-in-out ${
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
