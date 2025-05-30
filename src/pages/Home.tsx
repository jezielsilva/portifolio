import React from 'react';
import { ArrowRight, Code, Star, Zap } from 'lucide-react';
import Button from '../components/Button';
import Section from '../components/Section';
import TechBadge from '../components/TechBadge';
import SkillItem from '../components/SkillItem';
import { technicalSkills, softSkills } from '../data/skills';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
  SiSharp,
  SiDotnet,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiPython
} from "react-icons/si";
import { Link as ScrollLink } from 'react-scroll';


const Home: React.FC = () => {
  // Display only featured projects on home page
  const featuredProjects = projects.slice(0, 3);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4 md:px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                <span className="text-slate-900">Olá, sou </span>
                <span className="text-blue-600">Jeziel</span>
              </h1>
              
              <p className="text-2xl text-slate-700 mb-8">
                Desenvolvedor Full Stack apaixonado por criar experiências que fazem a diferença.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button to="/projects" size="lg">
                  Ver Projetos
                  <ArrowRight size={20} className="ml-2" />
                </Button>
                
                <ScrollLink to="about" smooth={true} duration={500}>
                  <Button variant="outline" size="lg">
                    Sobre Mim
                  </Button>
                </ScrollLink>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-blue-600 rounded-full opacity-10 animate-pulse"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code size={120} className="text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <a href="#about" className="text-slate-400 hover:text-blue-600 transition-colors">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </a>
        </div>
      </section>
      
      {/* About Section */}
      <Section 
        id="about" 
        title="Sobre Mim"
        subtitle="Conheça um pouco sobre minha jornada"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Minha História</h3>
            <p className="text-slate-700 mb-4">
              Sou um desenvolvedor full stack com mais de 4 anos de experiência criando interfaces
              modernas e funcionais. Minha jornada começou com HTML, CSS e JavaScript, e desde então
              venho me aprimorando constantemente.
            </p>
            <p className="text-slate-700 mb-4">
              Atualmente, foco meu trabalho em criar experiências usando ferramentas modernas. 
              Procuro equilibrar estética e usabilidade para entregar experiências simples, úteis e agradáveis.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Tecnologias</h3>
            <div className="flex flex-wrap gap-3">
              <TechBadge name="HTML5" icon={<SiHtml5 className="text-orange-500" />} color="orange" />
              <TechBadge name="CSS3" icon={<SiCss3 className="text-blue-500" />} color="blue" />
              <TechBadge name="JavaScript" icon={<SiJavascript className="text-yellow-500" />} color="yellow" />
              <TechBadge name="TypeScript" icon={<SiTypescript className="text-blue-700" />} color="blue" />
              <TechBadge name="React" icon={<SiReact className="text-blue-400" />} color="blue" />
              <TechBadge name="Angular" icon={<SiAngular className="text-red-500" />} color="red" />
              <TechBadge name="Node.js" icon={<SiNodedotjs className="text-green-500" />} color="green" />
              <TechBadge name="Tailwind CSS" icon={<SiTailwindcss className="text-cyan-500" />} color="blue" />
              <TechBadge name="Git" icon={<SiGit className="text-orange-600" />} color="orange" />
              <TechBadge name="C#" icon={<SiSharp className="text-purple-600" />} color="purple" />
              <TechBadge name=".NET" icon={<SiDotnet className="text-indigo-600" />} color="indigo" />
              <TechBadge name="SQL" icon={<SiMysql className="text-blue-600" />} color="blue" />
              <TechBadge name="MongoDB" icon={<SiMongodb className="text-green-600" />} color="green" />
              <TechBadge name="Docker" icon={<SiDocker className="text-blue-400" />} color="blue" />
              <TechBadge name="Python" icon={<SiPython className="text-yellow-500" />} color="yellow" />
            </div>
          </div>
        </div>
      </Section>
      
      {/* Skills Section */}
      <Section 
        id="skills" 
        title="Minhas Habilidades"
        subtitle="Competências técnicas e interpessoais"
        className="bg-slate-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <Code size={24} className="text-blue-600 mr-2" />
              <h3 className="text-2xl font-bold text-slate-900">Habilidades Técnicas</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              {technicalSkills.map((skill, index) => (
                <SkillItem 
                  key={index}
                  name={skill.name}
                  level={skill.level}
                />
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-6">
              <Star size={24} className="text-purple-600 mr-2" />
              <h3 className="text-2xl font-bold text-slate-900">Soft Skills</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              {softSkills.map((skill, index) => (
                <SkillItem 
                  key={index}
                  name={skill.name}
                  level={skill.level}
                  isSoft={true}
                />
              ))}
            </div>
          </div>
        </div>
      </Section>
      
      {/* Featured Projects Section */}
      <Section 
        id="featured-projects" 
        title="Projetos em Destaque"
        subtitle="Alguns dos meus trabalhos recentes"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
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
        
        <div className="text-center mt-12">
          <Button to="/projects" variant="outline">
            Ver Todos os Projetos
            <ArrowRight size={18} className="ml-1" />
          </Button>
        </div>
      </Section>
    
    </main>
  );
};

export default Home;