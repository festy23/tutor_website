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
          className="fixed inset-0 top-16 bg-black/15 backdrop-blur-sm z-[9999]"
          id="mobile-menu"
        >
          <div className="pt-8 px-6">
            {/* Navigation Bubbles */}
            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target={link.isExternal ? '_blank' : undefined}
                  rel={link.isExternal ? 'noopener noreferrer' : undefined}
                  onClick={onClose}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 300, 
                    damping: 30, 
                    delay: index * 0.1 
                  }}
                  className="group"
                >
                  <div className="rounded-2xl p-4 text-center transition-all duration-300 cursor-pointer border border-white/40 bg-white/30 hover:bg-white/40 shadow-xl backdrop-blur-md">
                    <span className="font-space-grotesk text-sm md:text-base font-medium text-gray-900 group-hover:text-brand-red transition-colors duration-300">
                      {link.label}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
