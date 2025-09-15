import React from 'react';
import { Itechnology } from '../../constants';

interface MobileTechBallProps {
  technology: Itechnology;
}

const MobileTechBall: React.FC<MobileTechBallProps> = ({ technology }) => {
  return (
    <div className="w-28 h-28 flex items-center justify-center bg-tertiary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
      <img 
        src={technology.icon} 
        alt={technology.name}
        className="w-16 h-16 object-contain"
        loading="lazy"
      />
    </div>
  );
};

export default MobileTechBall;