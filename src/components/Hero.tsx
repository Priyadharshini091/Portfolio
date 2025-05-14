import React from 'react';
import { Github, Linkedin, Mail, Globe, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300 pt-16">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
          <div className="md:w-2/5 mb-10 md:mb-0 md:pr-10">
            <div className="relative w-56 h-56 md:w-80 md:h-80 mx-auto md:mx-0 overflow-hidden rounded-full border-4 border-blue-500 shadow-lg">
              <img 
                src={personalInfo.photo} 
                alt={personalInfo.name} 
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
              />
            </div>
          </div>
          
          <div className="md:w-3/5 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3">
              <span className="block text-blue-600 dark:text-blue-400">{personalInfo.name}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4">
              {personalInfo.title}
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              {personalInfo.tagline}
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start space-x-4 mb-8">
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              
              <a 
                href={`mailto:${personalInfo.email}`}
                className="transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
              >
                <Mail size={18} />
                <span>Email</span>
              </a>
            </div>
            
            <div className="flex items-center justify-center md:justify-start space-x-4 text-gray-700 dark:text-gray-300">
              <div className="flex items-center space-x-2">
                <Globe size={16} />
                <a href={personalInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  {personalInfo.website.replace('https://', '')}
                </a>
              </div>
              
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  {personalInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
            <ChevronDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;