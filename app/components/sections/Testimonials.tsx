import React from 'react';
import Avatar from '../ui/Avatar';

type TestimonialCardProps = {
  badge: string;
  quote: string;
  author: {
    initials: string;
    name: string;
    title: string;
  };
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ badge, quote, author }) => {
  return (
    <div className="bg-white rounded-xl p-8 relative h-full border border-black/5 shadow-sm transition-all duration-200 hover:translate-y-[-5px] hover:shadow-md hover:border-black/10 group">
      <div className="absolute top-[-12px] right-6 bg-black text-white text-xs py-1 px-2.5 rounded-full font-medium tracking-wide">
        &nbsp;{badge}&nbsp;
      </div>
      
      <div className="text-5xl leading-none text-black/5 font-serif absolute top-[-24px] left-[-12px]">
        "
      </div>
      
      <p className="text-base text-gray-900 mb-7 leading-relaxed relative z-10">
        &emsp;&emsp;{quote}
      </p>
      
      <div className="flex items-center mt-auto border-t border-black/5 pt-5">
        <div className="mr-4 group-hover:text-white">
          <Avatar initials={author.initials} />
        </div>
        
        <div className="flex flex-col">
          <div className="font-semibold text-sm text-black mb-0.5">
            {author.name}
          </div>
          <div className="text-gray-500 text-xs">
            {author.title}
          </div>
          <div className="flex gap-1 mt-1.5">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-xs text-black">★</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      badge: 'Team Lead',
      quote: 'This workspace changed how our team collaborates. Everything is organized, accessible, and beautifully simple. The minimalist interface keeps us focused on what matters.',
      author: {
        initials: 'SJ',
        name: 'Sarah Johnson',
        title: 'Design Director, Studio Create'
      }
    },
    {
      badge: 'Product',
      quote: 'I\'ve tried dozens of productivity tools, but this is the only one that actually stuck. The interface is intuitive and distraction-free. Perfect for organizing complex projects.',
      author: {
        initials: 'ML',
        name: 'Michael Lee',
        title: 'Product Manager, TechFlow'
      }
    },
    {
      badge: 'Freelancer',
      quote: 'As a freelancer, I needed something flexible yet powerful. This platform adapts to my workflow perfectly and keeps everything in one place. It\'s become essential to my process.',
      author: {
        initials: 'AP',
        name: 'Alex Patel',
        title: 'Independent Consultant'
      }
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 tracking-tight relative">
          What people are saying
          <span className="absolute bottom-[-16px] left-1/2 transform -translate-x-1/2 w-10 h-1 bg-black rounded-sm"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              badge={testimonial.badge}
              quote={testimonial.quote}
              author={testimonial.author}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
