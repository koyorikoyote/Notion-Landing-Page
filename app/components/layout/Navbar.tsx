import React from 'react';
import Link from 'next/link';
import Button from '../ui/Button';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 fixed top-0 w-full bg-white/98 z-50 border-b border-gray-100">
      <div className="font-bold text-xl tracking-tight">Workspace</div>
      
      <div className="hidden md:flex gap-6">
        <Link href="#" className="text-gray-500 text-sm font-medium hover:text-black transition-colors">
          Features
        </Link>
        <Link href="#" className="text-gray-500 text-sm font-medium hover:text-black transition-colors">
          Templates
        </Link>
        <Link href="#" className="text-gray-500 text-sm font-medium hover:text-black transition-colors">
          Pricing
        </Link>
        <Link href="#" className="text-gray-500 text-sm font-medium hover:text-black transition-colors">
          About
        </Link>
      </div>
      
      <Button href="#" className="px-4 py-2 text-sm">
        Try it free
      </Button>
    </nav>
  );
};

export default Navbar;