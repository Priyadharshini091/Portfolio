import React from 'react';
import { Github, Linkedin, Mail, Globe, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <a href="#" className="text-xl font-bold text-blue-400">
                {personalInfo.name.split(' ')[0]}<span className="text-white"> R </span>
              </a>
              <p className="mt-2 text-gray-400 text-sm max-w-md">
                Data Scientist and Machine Learning Engineer specializing in creating intelligent, 
                data-driven solutions for complex business problems.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              
              <a 
                href={`mailto:${personalInfo.email}`}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
              
              <a 
                href={personalInfo.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Globe size={20} />
              </a>
            </div>
          </div>
          
          <div className="h-px bg-gray-800 my-8"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} {personalInfo.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;