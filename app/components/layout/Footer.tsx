import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-5">
        <div className="text-gray-500 text-sm">
          © 2025 Workspace. All rights reserved.
        </div>
        
        <div className="flex gap-6">
          <Link href="#" className="text-gray-500 text-sm hover:text-black transition-colors">
            Privacy
          </Link>
          <Link href="#" className="text-gray-500 text-sm hover:text-black transition-colors">
            Terms
          </Link>
          <Link href="#" className="text-gray-500 text-sm hover:text-black transition-colors">
            Contact
          </Link>
          <Link href="#" className="text-gray-500 text-sm hover:text-black transition-colors">
            Help
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;