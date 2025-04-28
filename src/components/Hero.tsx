import React, { useEffect, useRef } from 'react';
import { ArrowDown, Mail, Linkedin, Github, Phone, Bean as Behance } from 'lucide-react';
import { socialLinks } from '../data/portfolioData';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScrollAnimation = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        
        if (isVisible) {
          el.classList.add('fade-in');
        }
      });
    };
    
    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // Run once on mount
    
    return () => window.removeEventListener('scroll', handleScrollAnimation);
  }, []);

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
    <section 
      id="hero" 
      ref={heroRef}
      className="min-h-screen flex items-center relative pt-20 pb-16"
    >
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-bl from-blue-50 to-transparent dark:from-blue-900/20 dark:to-transparent opacity-70"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 items-center gap-12">
          <div className="order-2 md:order-1">
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 fade-in">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white fade-in animate-delay-100">
              Ayman Charef
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-400 mb-6 fade-in animate-delay-200">
              Smart System Engineer
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-lg fade-in animate-delay-300">
              A passionate developer at the intersection of electronics, automation, 
              and artificial intelligence, creating intelligent systems that solve real-world problems.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8 fade-in animate-delay-400">
              <a 
                href="#contact" 
                className="btn btn-primary"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="btn btn-outline"
              >
                View Projects
              </a>
            </div>
            
            <div className="flex items-center space-x-6 fade-in animate-delay-500">
              {socialLinks.map((link) => {
                const Icon = getIcon(link.icon);
                
                return (
                  <a 
                    key={link.name}
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                    aria-label={link.name}
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
              <a 
                href="tel:+212664677279" 
                className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label="Phone"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 p-1 fade-in animate-delay-100">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <img 
                  src="/ayman-charef.jpg" 
                  alt="Ayman Charef" 
                  className="w-full h-full object-cover rounded-full p-1 bg-white dark:bg-gray-900"
                />
              </div>
              <div className="absolute -right-3 top-1/4 flex items-center justify-center w-20 h-20 rounded-full bg-white dark:bg-gray-800 shadow-lg animate-bounce-slow">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png" alt="MATLAB" className="w-12 h-12" />
              </div>
              <div className="absolute -left-5 top-1/3 flex items-center justify-center w-16 h-16 rounded-full bg-white dark:bg-gray-800 shadow-lg animate-spin-slow">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" className="w-10 h-10" />
              </div>
              <div className="absolute -bottom-3 left-1/4 flex items-center justify-center w-18 h-18 rounded-full bg-white dark:bg-gray-800 shadow-lg animate-bounce-slow">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Arduino_Logo.svg" alt="Arduino" className="w-14 h-14" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="text-blue-500 dark:text-blue-400" size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;