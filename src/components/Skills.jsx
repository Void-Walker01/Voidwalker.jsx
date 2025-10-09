import React from 'react';
import { motion } from 'framer-motion';
import { 
  DiJavascript1, DiReact, DiNodejsSmall, DiHtml5, DiCss3, DiMongodb, DiGit, DiJava, DiBootstrap
} from 'react-icons/di';
import { SiTailwindcss, SiExpress, SiVercel, SiGithub, SiPostman, SiVite, SiC,SiJsonwebtokens } from 'react-icons/si';
import { TbBrandCpp, TbSql } from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';
import { TbLetterC } from "react-icons/tb";


const skillsData = [
  { name: 'C++', icon: <TbBrandCpp size="100%" /> },
  { name: 'JavaScript', icon: <DiJavascript1 size="100%" /> },
  { name: 'Java', icon: <DiJava size="100%" /> },
  { name: 'C', icon: < TbLetterC size="100%" /> },
  { name: 'React', icon: <DiReact size="100%" /> },
  { name: 'HTML5', icon: <DiHtml5 size="100%" /> },
  { name: 'CSS3', icon: <DiCss3 size="100%" /> },
  { name: 'Tailwind', icon: <SiTailwindcss size="100%" /> },
  { name: 'Bootstrap', icon: <DiBootstrap size="100%" /> },
  { name: 'Vite', icon: <SiVite size="100%" /> },
  { name: 'Vercel', icon: <SiVercel size="100%" /> },
  { name: 'Node.js', icon: <DiNodejsSmall size="100%" /> },
  { name: 'Express.js', icon: <SiExpress size="100%" /> },
  { name: 'JWT', icon: <SiJsonwebtokens size="100%" /> },
  { name: 'MongoDB', icon: <DiMongodb size="100%" /> },
  { name: 'Git', icon: <DiGit size="100%" /> },
  { name: 'GitHub', icon: <SiGithub size="100%" /> },
  { name: 'VS Code', icon: <VscVscode size="100%" /> },
  { name: 'Postman', icon: <SiPostman size="100%" /> },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center text-slate-100 mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Technical Skillset and Tools
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-items-center">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="group flex flex-col items-center justify-center gap-4 p-4 bg-slate-800 rounded-lg border border-slate-700 w-40 h-28 transition-all duration-300 hover:border-teal-400 hover:scale-105 hover:shadow-lg hover:shadow-teal-400/20"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="w-14 h-14 text-slate-300 group-hover:text-teal-400 transition-colors duration-300">
                {skill.icon}
              </div>
              <p className="font-semibold text-slate-200 text-center text-sm">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;