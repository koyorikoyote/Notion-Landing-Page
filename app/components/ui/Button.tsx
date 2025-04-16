import React from 'react';
import Link from 'next/link';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  href: string;
  children: React.ReactNode;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', href, children, className = '' }) => {
  const baseStyles = variant === 'primary' 
    ? 'bg-black text-white hover:bg-gray-800'
    : 'bg-gray-100 text-gray-900 hover:bg-gray-200';
  
  const styles = `${baseStyles} font-medium rounded-md transition-colors ${className}`;
  
  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
};

export default Button;