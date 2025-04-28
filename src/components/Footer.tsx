import React from 'react';
import { socialLinks } from '../data/portfolioData';
import { Linkedin, Github, Mail, Phone, ArrowUp, Bean as Behance } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Linkedin':
        return Linkedin;
      case 'Github':
        return Github;
      case 'Mail':
        return Mail;
      case 'Behance':
        return Behance;
      default:
        return Phone;
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold">
              Ayman<span className="text-blue-500">.Dev</span>
            </a>
            <p className="mt-2 text-gray-400 max-w-md">
              Smart System Engineer specializing in electronics integration, 
              automation, and artificial intelligence.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link) => {
                const Icon = getIcon(link.icon);
                
                return (
                  <a 
                    key={link.name}
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-blue-600 transition-colors p-2 rounded-full"
                    aria-label={link.name}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
              <a 
                href="tel:+212664677279" 
                className="bg-gray-800 hover:bg-blue-600 transition-colors p-2 rounded-full"
                aria-label="Phone"
              >
                <Phone size={18} />
              </a>
            </div>
            
            <button
              onClick={scrollToTop}
              className="bg-blue-600 hover:bg-blue-700 transition-colors p-3 rounded-full"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Ayman Charef. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap space-x-4 text-sm text-gray-400">
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;