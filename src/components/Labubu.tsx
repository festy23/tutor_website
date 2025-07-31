import React from 'react';
import labubuImage from '../assets/silver_labubu.png';

const Labubu: React.FC = () => {
  return (
    <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 z-10 transform transition-transform duration-300 hover:scale-110 rotate-[35deg]">
      <img 
        src={labubuImage} 
        alt="Labubu" 
        className="w-20 h-auto sm:w-24 md:w-28"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

export default Labubu;