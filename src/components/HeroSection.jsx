import React from 'react';
import { motion } from 'framer-motion';
import DeveloperIllustration from '../assets/HomePage.svg';
import AnimatedText from './AnimatedText';
import RoleAnimation from './RoleAnimation';
import { FiFileText } from 'react-icons/fi'; // 1. Import the icon

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-10">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Text content section */}
        <div className="md:w-7/12 text-center md:text-left">
          
          <AnimatedText 
            text="Hi there, I'm"
            className="text-2xl sm:text-3xl md:text-4xl text-slate-200 font-semibold"
          />
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-teal-300 mt-2 md:mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Rohit Guleria
          </motion.h1>

          <motion.div
            className="mt-4 md:mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <RoleAnimation />
          </motion.div>

          <motion.div
            className="mt-10 flex justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <a 
              href="/Resume.pdf"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 py-3 px-8 border border-teal-400 text-teal-400 font-bold rounded-lg hover:bg-teal-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
            >
              <FiFileText size={20} />
              <span>View My Resume</span>
            </a>
          </motion.div>

        </div>

        {/* Illustration section */}
        <motion.div 
          className="w-full md:w-5/12 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          <img src={DeveloperIllustration} alt="Developer Illustration" className="w-full max-w-sm md:max-w-md" />
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;