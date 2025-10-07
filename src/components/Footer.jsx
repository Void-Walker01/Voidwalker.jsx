import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative z-10 py-8">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-slate-400 text-sm mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} Rohit Guleria. All Rights Reserved.
        </p>
        <div className="flex items-center space-x-6">
          <a href="https://github.com/Void-Walker01" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-cyan-400 transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/rohit--guleria/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-cyan-400 transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.instagram.com/ro_guleria" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-slate-400 hover:text-cyan-400 transition-colors">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;