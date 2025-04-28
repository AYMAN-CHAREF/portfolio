import React from 'react';
import { aboutMe } from '../data/portfolioData';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <h2 className="section-title animate-on-scroll">About</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <div className="relative">
              <div className="w-full h-[400px] rounded-xl overflow-hidden">
                <img 
                  src="/ayman-charef.jpg" 
                  alt="Ayman working" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 z-[-1] rounded-xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-500 z-[-1] rounded-xl"></div>
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Who am I?</h3>
            <div className="text-gray-700 dark:text-gray-300 space-y-4">
              {aboutMe.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-blue-500 mb-2">4+</div>
                <div className="text-gray-700 dark:text-gray-300">Years of Study</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-blue-500 mb-2">5+</div>
                <div className="text-gray-700 dark:text-gray-300">Projects Completed</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-blue-500 mb-2">2</div>
                <div className="text-gray-700 dark:text-gray-300">Global Awards</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-blue-500 mb-2">15+</div>
                <div className="text-gray-700 dark:text-gray-300">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;