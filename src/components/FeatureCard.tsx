import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode; 
  className?: string; 
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, className }) => {
  return (
    <div className={`bg-gray-900 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ${className}`}>
      {icon && <div className="mb-3 flex justify-center items-center">{icon}</div>}
      <h3 className="text-lg font-semibold mb-2 text-center">{title}</h3>
      <p className="text-sm text-center">{description}</p>
    </div>
  );
};

export default FeatureCard;
