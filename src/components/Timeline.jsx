import React from 'react';
import { motion } from 'framer-motion';
import { TimelineData } from '../config/TimelineData';

const Timeline = () => {
  const itemVariants = (isLeft) => ({
    hidden: { opacity: 0, x: isLeft ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, type: "spring" } },
  });

  return (
    <section id="timeline" className="py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center text-slate-100 mb-20" // Responsive font size
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          My Journey
        </motion.h2>

        <div className="relative">
          {/* 1. The timeline bar is moved to the left on mobile */}
          <div className="absolute top-0 h-full w-0.5 bg-slate-700 left-4 md:left-1/2 md:-translate-x-1/2"></div>

          {TimelineData.map((item, index) => (
            <div key={index} className="relative mb-8">
              <motion.div
                // 2. All cards start on the left for mobile, then alternate for desktop
                className={`w-full flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} justify-start`}
                variants={itemVariants(index % 2 === 0)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                {/* Timeline Card */}
                <div 
                  // 3. Card takes full width on mobile, half width on desktop
                  className={`w-full pl-12 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:pl-0' : 'md:pl-8 md:pr-0'} 
                                   transition-all duration-300 hover:scale-[1.02]`}
                >
                  <div className={`p-6 bg-slate-800 rounded-lg shadow-lg 
                                   transition-shadow duration-300 hover:shadow-xl hover:shadow-cyan-400/20
                                   // 4. Text is always left-aligned on mobile
                                   text-left ${index % 2 === 0 && 'md:text-right'}`}
                  >
                    <p className="text-cyan-400 font-semibold">{item.year}</p>
                    <h3 className="text-xl font-bold text-slate-100 mt-1">{item.title}</h3>
                    <p className="text-slate-400 mt-2">{item.description}</p>
                  </div>
                </div>
              </motion.div>

              {/* 5. The dot is also moved left on mobile */}
              <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-teal-400 rounded-full border-4 border-slate-950
                              left-4 -translate-x-1/2 md:left-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;