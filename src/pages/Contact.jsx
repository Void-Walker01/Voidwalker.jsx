import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';


const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };


  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };


  return (
    // Changed py-20 md:py-28 to have less top padding
    <section id="contact" className="pt-8 pb-20 md:pt-12 md:pb-28">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center text-slate-100 mb-4"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>
        <motion.p 
          className="text-lg text-slate-400 text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I'm actively looking for internship opportunities and am always open to connecting. Feel free to send me a message or reach out through my socials.
        </motion.p>
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-stretch">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-slate-800 p-8 rounded-lg h-full flex flex-col justify-center border border-slate-700">
              <h3 className="text-2xl font-bold text-slate-100 mb-6">Contact Information</h3>
              <motion.div 
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.a 
                  variants={itemVariants} 
                  href="mailto:rohitmatrix2004@gmail.com" 
                  className="flex items-center gap-4 text-slate-300 hover:text-teal-400 transition-colors"
                >
                  <span className="flex-shrink-0 inline-flex items-center justify-center" style={{ width: '24px', height: '24px' }}>
                    <FiMail size={24} />
                  </span>
                  <span className="text-lg">rohitmatrix2004@gmail.com</span>
                </motion.a>
                <motion.a 
                  variants={itemVariants} 
                  href="https://www.linkedin.com/in/rohit--guleria/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 text-slate-300 hover:text-teal-400 transition-colors"
                >
                  <span className="flex-shrink-0 inline-flex items-center justify-center" style={{ width: '24px', height: '24px' }}>
                    <FaLinkedin size={24} />
                  </span>
                  <span className="text-lg">LinkedIn</span>
                </motion.a>
                <motion.a 
                  variants={itemVariants} 
                  href="https://github.com/Void-Walker01" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 text-slate-300 hover:text-teal-400 transition-colors"
                >
                  <span className="flex-shrink-0 inline-flex items-center justify-center" style={{ width: '24px', height: '24px' }}>
                    <FaGithub size={24} />
                  </span>
                  <span className="text-lg">GitHub</span>
                </motion.a>
                <motion.a 
                  variants={itemVariants} 
                  href="https://www.instagram.com/ro_guleria" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 text-slate-300 hover:text-teal-400 transition-colors"
                >
                  <span className="flex-shrink-0 inline-flex items-center justify-center" style={{ width: '24px', height: '24px' }}>
                    <FaInstagram size={24} />
                  </span>
                  <span className="text-lg">Instagram</span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
          <motion.form 
            action="https://api.web3forms.com/submit" 
            method="POST"
            className="md:w-1/2 flex flex-col gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <input type="hidden" name="access_key" value="fad4dcc1-33d8-4511-b04d-9143c7b901ee"/>
            <div className="flex flex-col sm:flex-row gap-4">
              <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 bg-slate-800 text-slate-100 border border-slate-700 rounded-lg placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-colors" />
              <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 bg-slate-800 text-slate-100 border border-slate-700 rounded-lg placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-colors" />
            </div>
            <textarea name="message" placeholder="Your Message" rows="5" required className="w-full p-3 bg-slate-800 text-slate-100 border border-slate-700 rounded-lg placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-colors"></textarea>
            <button type="submit" className="bg-teal-400 text-slate-900 font-bold py-3 px-6 rounded-lg hover:bg-teal-300 transition-all duration-300 self-start transform hover:scale-105">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};


export default Contact;