import React from 'react';
import { experiences } from '../data/portfolioData';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-3">
            Work <span className="text-blue-600 dark:text-blue-400">Experience</span>
          </h2>
          
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-12 rounded-full"></div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-900"></div>
            
            {experiences.map((experience, index) => (
              <div 
                key={index} 
                className={`mb-12 md:mb-0 relative ${
                  index % 2 === 0 ? 'md:mr-auto md:ml-0 md:pr-12 md:pl-0' : 'md:ml-auto md:mr-0 md:pl-12 md:pr-0'
                } md:w-5/12`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute top-5 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 shadow z-10 
                  transform -translate-y-1/2 
                  left-[calc(100%+18px)]"></div>
                
                <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {experience.title}
                    </h3>
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {experience.period}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-2 italic">
                    {experience.company}
                  </p>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {experience.description}
                  </p>
                  
                  <div className="space-y-2">
                    {experience.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mt-0.5 mr-3">
                          <div className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;