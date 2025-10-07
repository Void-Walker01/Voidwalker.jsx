import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { FiFileText } from 'react-icons/fi';

const CTASection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section id="contact" className="py-24 text-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-extrabold text-slate-100"
          variants={itemVariants}
        >
          Let's Connect
        </motion.h2>
        <motion.p 
          className="text-lg text-slate-300 mt-4 max-w-xl mx-auto"
          variants={itemVariants}
        >
          I'm actively seeking internship opportunities and am excited to connect. Feel free to reach out through the form below or view my resume.
        </motion.p>

        <motion.form 
          action="https://api.web3forms.com/submit" 
          method="POST"
          className="max-w-xl mx-auto mt-10 flex flex-col gap-4"
          variants={itemVariants}
        >
          
          <input type="hidden" name="access_key" value="fad4dcc1-33d8-4511-b04d-9143c7b901ee"/>

          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              required
              className="w-full p-3 bg-slate-800 text-slate-100 border border-slate-700 rounded-lg placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-colors"
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              required
              className="w-full p-3 bg-slate-800 text-slate-100 border border-slate-700 rounded-lg placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-colors"
            />
          </div>
          <textarea 
            name="message" 
            placeholder="Your Message" 
            rows="4"
            required
            className="w-full p-3 bg-slate-800 text-slate-100 border border-slate-700 rounded-lg placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-colors"
          ></textarea>
          
          <button 
            type="submit"
            className="bg-teal-400 text-slate-900 font-bold py-3 px-8 rounded-lg hover:bg-teal-300 transition-all duration-300 transform hover:scale-105"
          >
            Send Message
          </button>
        </motion.form>

        <motion.div variants={itemVariants} className="mt-12">
            <NavLink 
              to="/resume"
              className="inline-flex items-center gap-3 py-3 px-8 border border-teal-400 text-teal-400 font-bold rounded-lg hover:bg-teal-400 hover:text-slate-900 transition-all duration-300"
            >
              <FiFileText />
              <span>View My Resume</span>
            </NavLink>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTASection;