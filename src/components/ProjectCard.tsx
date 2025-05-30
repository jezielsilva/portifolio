import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative overflow-hidden h-48 bg-slate-100">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-39 md:h-40 lg:h-40 object-cover rounded-md"
        />
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        
        <p className="text-slate-600 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-slate-700 hover:text-blue-600 transition-colors"
              aria-label="GitHub repository"
            >
              <Github size={18} className="mr-1" />
              <span>Código</span>
            </a>
          )}
          
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-slate-700 hover:text-blue-600 transition-colors"
              aria-label="Live project"
            >
              <ExternalLink size={18} className="mr-1" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;