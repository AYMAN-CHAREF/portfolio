import React, { useEffect, useRef } from 'react';
import { skillCategories, languages } from '../data/portfolioData';

const Skills: React.FC = () => {
  const progressRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleScrollObserver = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target;
              const level = target.getAttribute('data-level');
              
              if (level) {
                const fillElement = target.querySelector('.progress-bar-fill');
                if (fillElement) {
                  (fillElement as HTMLElement).style.width = `${level}%`;
                }
              }
            }
          });
        },
        { threshold: 0.1 }
      );

      progressRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });

      return () => {
        progressRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      };
    };

    handleScrollObserver();
  }, []);

  return (
    <section id="skills" className="section bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <h2 className="section-title animate-on-scroll">Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => {
                    const refIndex = categoryIndex * 10 + skillIndex;
                    return (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
                          <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                        </div>
                        <div 
                          className="progress-bar"
                          ref={(el) => {
                            if (el) progressRefs.current[refIndex] = el;
                          }}
                          data-level={skill.level}
                        >
                          <div className="progress-bar-fill" style={{ width: '0%' }}></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          
          <div className="animate-on-scroll">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Languages
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {languages.map((language, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm flex justify-between items-center"
                >
                  <span className="text-gray-800 dark:text-gray-200 font-medium">
                    {language.name}
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full dark:bg-blue-900/30 dark:text-blue-300">
                    {language.level}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Certifications
              </h3>
              
              <div className="card p-6">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                  English Access Microscholarship Program
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Program sponsored by the U.S. Department of State
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Awards
              </h3>
              
              <div className="space-y-4">
                <div className="card p-6">
                  <div className="flex items-start">
                    <div className="mr-4">
                      <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                        Global Program of the Year Award – 1st Runner-up
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Hult Prize Foundation
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="card p-6">
                  <div className="flex items-start">
                    <div className="mr-4">
                      <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                        Global Program of the Year Award in MENA Region
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Hult Prize Foundation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;