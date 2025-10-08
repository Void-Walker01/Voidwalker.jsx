import React from 'react';
import { motion } from 'framer-motion';
import { BsTrophy, BsPeople } from 'react-icons/bs';
import { FaHandshake, FaRegLightbulb, FaUsers } from 'react-icons/fa';
import { GiShuttlecock } from 'react-icons/gi';
import { CgGym } from 'react-icons/cg';

const SoftSkillsData = [
  { 
    title: 'Competitive Programming', 
    description: 'Expert on Codeforces and 6-star on HackerRank, with over 500 problems solved across various platforms.',
    icon: <BsTrophy size="100%" /> 
  },
  { 
    title: 'Team Leadership', 
    description: "Co-leading web development for Srijan'25, managing project timelines and fostering a collaborative team environment.",
    icon: <FaUsers size="100%" /> 
  },
  { 
    title: 'Problem Solving', 
    description: 'Leveraging a strong foundation in DSA and an analytical mindset to solve complex logical and technical challenges.',
    icon: <FaRegLightbulb size="100%" /> 
  },
  { 
    title: 'Collaboration', 
    description: 'Experienced in cross-team collaboration and Agile workflows to ensure smooth project rollouts and effective communication.',
    icon: <FaHandshake size="100%" /> 
  },
  { 
    title: 'State-level Badminton', 
    description: "Senior member of the university's Badminton Club and a passionate state-level player.",
    icon: <GiShuttlecock size="100%" /> 
  },
  { 
    title: 'Gym & Fitness', 
    description: 'Passionate about fitness and weight training, maintaining a disciplined and consistent gym routine.',
    icon: <CgGym size="100%" /> 
  },
  { 
    title: 'Community Engagement', 
    description: 'Actively volunteering with Fast Forward India (FFI) to deliver educational programs and support community initiatives.',
    icon: <BsPeople size="100%" /> 
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SoftSkills = () => {
  return (
    <section id="SoftSkills" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center text-slate-100 mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Beyond the Code
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SoftSkillsData.map((interest, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-6 p-6 bg-slate-800 rounded-lg border border-slate-700 transition-all duration-300 hover:border-teal-400 hover:shadow-lg hover:shadow-teal-400/20"
              variants={cardVariants}
              initial="hidden"
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 text-teal-400 flex-shrink-0 mt-1">
                {interest.icon}
              </div>
              <div>
                <h3 className="font-bold text-slate-100 text-xl mb-2">{interest.title}</h3>
                <p className="text-slate-400 text-base">{interest.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;