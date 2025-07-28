import React from 'react';

interface NavLink {
  href: string;
  label: string;
  isExternal?: boolean;
}

interface NavigationProps {
  navLinks: NavLink[];
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ navLinks, className }) => {
  return (
    <nav className={className} aria-label="Main navigation">
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
  );
};

export default Navigation;
