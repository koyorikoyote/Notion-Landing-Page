import React from 'react';

type AvatarProps = {
  initials: string;
  className?: string;
};

const Avatar: React.FC<AvatarProps> = ({ initials, className = '' }) => {
  return (
    <div className={`w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center font-semibold text-gray-800 relative overflow-hidden transition-all duration-200 group-hover:text-white ${className}`}>
      {initials}
      <div className="absolute bottom-0 left-0 w-full h-0 bg-black transition-height duration-200 -z-10 group-hover:h-full"></div>
    </div>
  );
};

export default Avatar;