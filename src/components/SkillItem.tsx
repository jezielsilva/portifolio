import React from 'react';

interface SkillItemProps {
  name: string;
  level: number;
  isSoft?: boolean;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, level, isSoft = false }) => {
  const maxLevel = 5;
  const filledLevels = Array(level).fill(0);
  const emptyLevels = Array(maxLevel - level).fill(0);
  
  const getColorClass = () => {
    if (isSoft) return 'bg-purple-500';
    
    switch (level) {
      case 5: return 'bg-blue-600';
      case 4: return 'bg-blue-500';
      case 3: return 'bg-blue-400';
      default: return 'bg-blue-300';
    }
  };
  
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-slate-700">{name}</span>
        <span className="text-xs text-slate-500">{level}/{maxLevel}</span>
      </div>
      
      <div className="flex space-x-1">
        {filledLevels.map((_, index) => (
          <div 
            key={`filled-${index}`} 
            className={`h-2 w-full rounded-full ${getColorClass()}`}
          />
        ))}
        
        {emptyLevels.map((_, index) => (
          <div 
            key={`empty-${index}`} 
            className="h-2 w-full rounded-full bg-slate-200"
          />
        ))}
      </div>
    </div>
  );
};

export default SkillItem;