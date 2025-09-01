import React from 'react';

const A11yAnnouncer: React.FC = () => {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
      id="a11y-announcer"
    />
  );
};

export default A11yAnnouncer;
