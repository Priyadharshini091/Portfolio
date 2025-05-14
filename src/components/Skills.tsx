import React from 'react';
import { skillCategories } from '../data/portfolioData';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-3">
            Technical <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>

          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-12 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                    <category.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.name}
                  </h3>
                </div>

                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill.name}</li>
                  ))}
                </ul>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
