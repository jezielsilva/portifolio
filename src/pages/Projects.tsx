import React, { useState } from 'react';
import { ArrowLeft, Filter } from 'lucide-react';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  // Extract unique tags from all projects
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  );
  
  // Filter projects based on selected tag
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter((project) => project.tags.includes(activeFilter));
  
  return (
    <main>
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meus Projetos</h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            Explore meu portfólio de projetos front-end, mostrando meu trabalho com várias tecnologias e abordagens de design.
          </p>
        </div>
      </section>
      
      {/* Projects Section */}
      <Section title="" subtitle="">
        <div className="mb-8">
          <Button to="/" variant="outline" className="mb-6">
            <ArrowLeft size={18} className="mr-1" />
            Voltar para Home
          </Button>
          
          <div className="bg-white p-4 rounded-lg shadow-md mb-8">
            <div className="flex items-center mb-4">
              <Filter size={20} className="text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold">Filtrar por Tecnologia</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Todos
              </button>
              
              {allTags.map((tag, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFilter(tag)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === tag
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-slate-600 mb-4">
              Nenhum projeto encontrado com a tecnologia selecionada.
            </p>
            <Button onClick={() => setActiveFilter('all')} variant="outline">
              Mostrar Todos os Projetos
            </Button>
          </div>
        )}
      </Section>
    </main>
  );
};

export default Projects;