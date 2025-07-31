import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavLink {
  href: string;
  label: string;
  isExternal?: boolean;
}

interface MobileMenuProps {
  navLinks: NavLink[];
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ navLinks, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="absolute top-full right-0 mt-3 w-full max-w-xs sm:max-w-sm md:w-64 bg-white/90 backdrop-blur-lg rounded-xl shadow-2xl z-50 border border-gray-200/70"
          id="mobile-menu"
        >
          <nav className="py-2" role="menu">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                target={link.isExternal ? '_blank' : undefined}
                rel={link.isExternal ? 'noopener noreferrer' : undefined}
                onClick={onClose}
                className={`block px-5 py-3 text-lg font-mono text-gray-800 hover:bg-gray-500/10 transition-colors duration-200 ${
                  index !== navLinks.length - 1 ? 'border-b border-gray-200/80' : ''
                }`}
                role="menuitem"
                aria-label={link.label}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
