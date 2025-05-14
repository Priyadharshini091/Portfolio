import React from 'react';
import { personalInfo } from '../data/portfolioData';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8 rounded-full"></div>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            {personalInfo.about}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;