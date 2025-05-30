import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-12" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Seu Nome</h3>
            <p className="text-slate-300 mb-4">
               Desenvolvedor Full Stack apaixonado por criar experiências que fazem a diferença.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/jezielsilva" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/jeziel-silva-b8b179151/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-slate-300 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="/#about" className="text-slate-300 hover:text-white transition-colors">Sobre</a>
              </li>
              <li>
                <a href="/projects" className="text-slate-300 hover:text-white transition-colors">Projetos</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-blue-400" />
                <a href="silvajeziel22@gmail.com" className="text-slate-300 hover:text-white transition-colors">
                  silvajeziel22@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={18} className="text-blue-400" />
                <span className="text-slate-300">Rio de Janeiro, Brasil</span>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-slate-400">
          <p>&copy; {currentYear} Jeziel Silva dos Santos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;