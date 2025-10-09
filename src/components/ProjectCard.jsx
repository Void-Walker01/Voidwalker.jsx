import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="group relative bg-slate-800 rounded-lg overflow-hidden border border-slate-700 flex flex-col h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/50 hover:border-teal-400/50 hover:scale-[1.02]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      {/* Gradient Glow Effect on Hover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10" />
      
      {/* Card Content */}
      <div className="relative flex flex-col h-full">
        {/* Transparent Mockup Container with Gradient Background */}
        <div className="w-full relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900/20 flex items-center justify-center p-6 sm:p-10" style={{ paddingBottom: '60%' }}>
          <img 
            src={project.image || 'https://via.placeholder.com/600x400'} 
            alt={project.title} 
            className="absolute inset-0 w-full h-full object-contain object-center transition-all duration-700 group-hover:scale-110 drop-shadow-2xl group-hover:drop-shadow-[0_20px_40px_rgba(20,184,166,0.4)]" 
          />
          {/* Animated gradient orbs in background */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-teal-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
        </div>
        
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-teal-400 transition-colors duration-300">
            {project.title}
          </h3>
          
          <div className="flex flex-wrap gap-2 mb-3">
            {project.techStack.map((tech, index) => (
              <span 
                key={index} 
                className="bg-slate-700/50 text-teal-300 text-xs font-semibold px-3 py-1 rounded-full border border-teal-500/30 backdrop-blur-sm group-hover:bg-teal-500/20 group-hover:border-teal-400/50 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <ul className="text-slate-400 space-y-1.5 text-sm leading-normal list-disc list-inside flex-grow group-hover:text-slate-300 transition-colors duration-300 mb-3">
            {project.description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          <div className="mt-auto flex items-center gap-4 pt-3 border-t border-slate-700 group-hover:border-teal-500/30 transition-colors duration-300">
            {project.links.live && (
              <a 
                href={project.links.live} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-slate-300 hover:text-teal-400 transition-all duration-300 font-medium group/link"
              >
                <CgWebsite size={20} className="group-hover/link:scale-110 transition-transform" />
                <span className="group-hover/link:underline">Live Demo</span>
              </a>
            )}
            {project.links.github && (
              <a 
                href={project.links.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-slate-300 hover:text-teal-400 transition-all duration-300 font-medium group/link"
              >
                <FaGithub size={20} className="group-hover/link:scale-110 transition-transform" />
                <span className="group-hover/link:underline">GitHub</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;