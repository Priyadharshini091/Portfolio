import React from 'react';
import { Github, Linkedin, Mail, Globe, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300 pt-16 px-4">
      <div className="w-full max-w-6xl mx-auto py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left: Profile Image */}
          <div className="w-full md:w-2/5 flex justify-center md:justify-end">
            <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 overflow-hidden rounded-full border-4 border-blue-500 shadow-lg">
              <img
                src={personalInfo.photo}
                alt={personalInfo.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="w-full md:w-3/5 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              <span className="block text-blue-600 dark:text-blue-400">{personalInfo.name}</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4">
              {personalInfo.title}
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto md:mx-0">
              {personalInfo.tagline}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center md:justify-start gap-4 mb-8">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
              >
                <Github size={18} className="mr-2" /> GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
              >
                <Linkedin size={18} className="mr-2" /> LinkedIn
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
              >
                <Mail size={18} className="mr-2" /> Email
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <Globe size={16} />
                <a
                  href={personalInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  {personalInfo.website.replace('https://', '')}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-12 flex justify-center md:justify-start">
          <a
            href="#about"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 animate-bounce"
          >
            <ChevronDown size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
