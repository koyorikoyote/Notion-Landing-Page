import React from 'react';

type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-start">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: '📝',
      title: 'Simple & flexible notes',
      description: 'Write, organize, and connect your thoughts together. From quick notes to detailed documents.'
    },
    {
      icon: '🗂️',
      title: 'Database & lists',
      description: 'Build custom databases for any need. Track projects, tasks, or collections with ease.'
    },
    {
      icon: '🔄',
      title: 'Real-time collaboration',
      description: 'Work seamlessly with your team. Changes sync instantly across all devices.'
    },
    {
      icon: '📱',
      title: 'Access anywhere',
      description: 'Available on all platforms. Your workspace syncs across desktop, web, and mobile.'
    },
    {
      icon: '🔍',
      title: 'Powerful search',
      description: 'Find anything in seconds with our lightning-fast search across all your content.'
    },
    {
      icon: '🔌',
      title: 'Connect your tools',
      description: 'Integrate with your favorite apps and services for a seamless workflow.'
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;