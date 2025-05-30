import React from 'react';

interface TechBadgeProps {
  name: string;
  icon: React.ReactNode;
  color?: string;
}

const TechBadge: React.FC<TechBadgeProps> = ({ name, icon, color = 'blue' }) => {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-800 border-blue-200',
    green: 'bg-green-100 text-green-800 border-green-200',
    purple: 'bg-purple-100 text-purple-800 border-purple-200',
    orange: 'bg-orange-100 text-orange-800 border-orange-200',
    red: 'bg-red-100 text-red-800 border-red-200',
    yellow: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  } as {[key: string]: string};
  
  return (
    <div className={`flex items-center px-3 py-1.5 rounded-full border ${colorClasses[color]} transition-transform hover:scale-105`}>
      <span className="mr-1.5">{icon}</span>
      <span className="font-medium">{name}</span>
    </div>
  );
};

export default TechBadge;