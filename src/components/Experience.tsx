import React from 'react';
import { experience } from '../data/portfolioData';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <h2 className="section-title animate-on-scroll">Professional Experience</h2>
        
        <div className="timeline">
          {experience.map((item, index) => (
            <div
              key={index}
              className="timeline-item animate-on-scroll"
            >
              <div className="card p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.position}
                </h3>
                <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-3">
                  {item.company}
                </h4>
                
                <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    <span>{item.period}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
                    {item.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full dark:bg-blue-900/30 dark:text-blue-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                
                <div className="mt-3">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Briefcase size={24} className="text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;