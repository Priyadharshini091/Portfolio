import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { education, certifications } from '../data/portfolioData';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-3">
            Education & <span className="text-blue-600 dark:text-blue-400">Certifications</span>
          </h2>
          
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-12 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Education Column */}
            <div>
              <div className="flex items-center mb-8">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                  <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Education
                </h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div 
                    key={index} 
                    className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      {edu.institution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certifications Column */}
            <div>
              <div className="flex items-center mb-8">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                  <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Certifications
                </h3>
              </div>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div 
                    key={index} 
                    className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        {cert.name}
                      </h4>
                      <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                        {cert.year}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      {cert.issuer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;