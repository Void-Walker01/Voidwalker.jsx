import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ text, className = '', type = 'letter' }) => {
  const words = type === 'letter' ? Array.from(text) : text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20, // Restored original x value
      y: 10,  // Restored original y value
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={`flex flex-wrap overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="mr-[0.25em]">
          {word}{word === " " ? "\u00A0" : ""}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;