import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="pt-40 pb-20 px-6 flex flex-col items-center text-center max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tighter mb-6">
        All-in-one workspace for your best ideas
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mb-10">
        A minimalist platform to organize your thoughts, projects, and documents in one beautiful space.
      </p>
      
      <div className="flex gap-4 mb-12">
        <Button href="#" className="px-6 py-3 text-base">
          Get started
        </Button>
        <Button href="#" variant="secondary" className="px-6 py-3 text-base">
          See how it works
        </Button>
      </div>
      
      <div className="w-full max-w-4xl relative mb-10 transition-transform duration-300 hover:translate-y-[-5px] group">
        <Image 
          src="/api/placeholder/900/500" 
          alt="Workspace interface screenshot" 
          width={900} 
          height={500}
          className="rounded-lg shadow-lg transition-shadow duration-300 group-hover:shadow-xl"
        />
      </div>
    </section>
  );
};

export default Hero;