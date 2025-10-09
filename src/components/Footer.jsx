import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative z-10 py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-4 text-sm text-slate-400">
        
        {/* Left Column: Copyright */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Rohit Guleria</p>
        </div>

        {/* Center Column: "Crafted with" message */}
        <div className="w-full md:w-1/3 flex justify-center items-center gap-1.5 font-medium text-slate-300">
          <span>Crafted with</span>
          <FaHeart className="text-red-500" />
          <span>by Rohit Guleria</span>
        </div>

        {/* Right Column: Social Links */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <div className="flex items-center space-x-6">
            <a href="https://github.com/Void-Walker01" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:-translate-y-1">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/rohit--guleria/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:-translate-y-1">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.instagram.com/ro_guleria" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:-translate-y-1">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;