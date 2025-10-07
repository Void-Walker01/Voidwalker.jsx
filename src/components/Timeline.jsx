import React from 'react';
import { motion } from 'framer-motion';
import { TimelineData } from '../config/TimelineData';

const Timeline = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = (isLeft) => ({
    hidden: { opacity: 0, x: isLeft ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, type: "spring" } },
  });

  return (
    <section id="timeline" className="py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-extrabold text-center text-slate-100 mb-20"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          My Journey
        </motion.h2>

        <div className="relative">
          <div className="absolute top-0 h-full w-0.5 bg-slate-700 left-1/2 -translate-x-1/2"></div>

          {TimelineData.map((item, index) => (
            <div key={index} className="relative mb-12">
              <motion.div
                className={`w-full flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                variants={itemVariants(index % 2 === 0)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                {/* Timeline Card */}
                <div 
                  className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'} 
                              transition-all duration-300 hover:scale-[1.02]`} // Added hover effect
                >
                  <div className={`p-6 bg-slate-800 rounded-lg shadow-lg 
                                  transition-shadow duration-300 hover:shadow-xl hover:shadow-cyan-400/20 // Added glow effect
                                  ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
                  >
                    <p className="text-cyan-400 font-semibold">{item.year}</p>
                    <h3 className="text-xl font-bold text-slate-100 mt-1">{item.title}</h3>
                    <p className="text-slate-400 mt-2">{item.description}</p>
                  </div>
                </div>
              </motion.div>

              <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-teal-400 rounded-full border-4 border-slate-950"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;