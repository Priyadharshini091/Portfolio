import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolioData';

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-3">
            Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-12 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                onMouseEnter={() => setActiveProject(index)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-blue-600/70 flex items-center justify-center transition-opacity duration-300 ${
                    activeProject === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="flex space-x-4">
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-white rounded-full text-blue-600 hover:bg-blue-100 transition-colors duration-300"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      <a 
                        href="#projects" 
                        className="p-2 bg-white rounded-full text-blue-600 hover:bg-blue-100 transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Results:
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      {project.results}
                    </p>
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

export default Projects;