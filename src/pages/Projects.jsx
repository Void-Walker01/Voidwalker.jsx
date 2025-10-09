import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../components/ProjectData';

const Projects = () => {
  return (
    <section id="projects" className="pt-8 pb-20 md:pt-12 md:pb-28">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center text-slate-100 mb-4"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          My Recent Work
        </motion.h2>
        <motion.p 
          className="text-lg text-slate-400 text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Here are a few projects I've worked on, showcasing my skills in turning ideas into functional applications.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;