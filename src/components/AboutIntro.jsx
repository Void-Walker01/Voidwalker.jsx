import React from 'react';
import { motion } from 'framer-motion';
import ProfilePhoto from '../assets/profilepic.png'; 

const AboutIntro = () => {
  return (
    // Changed py-20 md:py-28 to have less top padding
    <section className="pt-8 pb-20 md:pt-12 md:pb-28">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          <motion.div 
            className="w-full md:w-1/3 flex justify-center" 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-slate-800 p-3 rounded-full border-4 border-teal-400 shadow-xl"> 
              <img 
                src={ProfilePhoto} 
                alt="Rohit Guleria" 
                className="w-64 h-64 sm:w-80 sm:h-80 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover aspect-square" 
              />
            </div>
          </motion.div>
          <motion.div 
            className="w-full md:w-2/3 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 mb-6">
              Know Who I'M
            </h2>
            <p className="text-slate-300 text-lg mb-4 leading-relaxed">
              Hi everyone! I'm <span className="text-teal-400 font-bold">Rohit Guleria</span>, a pre-final year student pursuing Chemical Engineering at <span className="text-teal-400 font-bold">IIT (ISM) Dhanbad</span>. While my academic background is in engineering, my true passion lies in the dynamic world of software development.
            </p>
            <p className="text-slate-300 text-lg mb-4 leading-relaxed">
              My journey into technology began with competitive programming, where I honed my problem-solving skills and developed a deep appreciation for logical design. This quickly evolved into building impactful applications using modern web technologies, with a strong focus on the <span className="text-teal-400 font-bold">MERN stack</span>. I love transforming complex ideas into elegant, functional, and user-friendly solutions.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              I am currently seeking challenging <span className="text-teal-400 font-bold">internship opportunities</span> to apply my diverse skill set, collaborate with talented teams, and contribute to innovative projects that make a real difference. I'm eager to learn, grow, and build impactful software.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;