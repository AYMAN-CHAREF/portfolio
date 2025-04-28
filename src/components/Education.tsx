import React from 'react';
import { education } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="section">
      <div className="container mx-auto px-6">
        <h2 className="section-title animate-on-scroll">Education</h2>
        
        <div className="timeline">
          {education.map((item, index) => (
            <div
              key={index}
              className="timeline-item animate-on-scroll"
            >
              <div className="card p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.degree}
                </h3>
                <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-3">
                  {item.school}
                </h4>
                
                <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400 mb-2">
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    <span>{item.period}</span>
                  </div>
                </div>
                
                <div className="mt-3">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                    <GraduationCap size={24} className="text-blue-600 dark:text-blue-400" />
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

export default Education;