import React from 'react';
import { motion } from 'framer-motion';
import DeveloperIllustration from '../assets/HomePage.svg'; 
import AnimatedText from './AnimatedText';
import RoleAnimation from './RoleAnimation';


const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="md:w-1/2 text-center md:text-left">
          
          <AnimatedText 
            text="Hi there, I'm"
            className="text-3xl md:text-4xl text-slate-200 font-semibold"
          />
          
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold text-teal-300 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Rohit Guleria
          </motion.h1>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <RoleAnimation />
          </motion.div>
        </div>

        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          <img src={DeveloperIllustration} alt="Developer Illustration" className="w-3/4 md:w-full max-w-sm" />
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;