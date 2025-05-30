import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-xl font-bold tracking-tight"
          >
            <span className="text-slate-900">Je</span>
            <span className="text-blue-600">ziel</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <Link to="/" className="text-slate-700 hover:text-blue-600 transition-colors">Home</Link>
              {/* <Link to="/#about" className="text-slate-700 hover:text-blue-600 transition-colors">Sobre</Link> */}
              <Link to="/projects" className="text-slate-700 hover:text-blue-600 transition-colors">Projetos</Link>
              {/* <Link to="/#contact" className="text-slate-700 hover:text-blue-600 transition-colors">Contato</Link> */}
            </nav>
            
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/jezielsilva" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-blue-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/jeziel-silva-b8b179151/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <button 
            className="md:hidden text-slate-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-20 px-4">
          <nav className="flex flex-col space-y-6 text-center text-lg">
            <Link 
              to="/" 
              className="py-2 text-slate-800 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/#about" 
              className="py-2 text-slate-800 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link 
              to="/projects" 
              className="py-2 text-slate-800 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projetos
            </Link>
            <Link 
              to="/#contact" 
              className="py-2 text-slate-800 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
            
            <div className="flex justify-center space-x-8 pt-6">
              <a 
                href="https://github.com/username" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-blue-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/username" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;