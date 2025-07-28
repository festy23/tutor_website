import React from 'react';

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
  if (!isOpen) return null;

  return (
    <div id="mobile-menu" className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-lg z-50 border border-gray-200">
      <nav className="py-1">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target={link.isExternal ? '_blank' : undefined}
            rel={link.isExternal ? 'noopener noreferrer' : undefined}
            onClick={onClose}
            className="block px-4 py-2 text-sm font-mono text-gray-700 hover:bg-gray-100"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;
