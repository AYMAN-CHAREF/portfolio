import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { Calendar, ArrowRight, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="section">
      <div className="container mx-auto px-6">
        <h2 className="section-title animate-on-scroll">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="project-card animate-on-scroll"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative overflow-hidden h-48 md:h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                />
                
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                
                <div className="absolute bottom-4 left-4 flex items-center text-white">
                  <Calendar size={16} className="mr-2" />
                  <span>{project.year}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <div className="mb-4">
                  <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                    {project.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full dark:bg-blue-900/30 dark:text-blue-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github size={20} className="mr-2" />
                      View on GitHub
                    </a>
                  )}
                  <button
                    className={`flex items-center text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-transform duration-300 ${
                      activeProject === project.id ? 'translate-x-1' : ''
                    }`}
                  >
                    View Details
                    <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;