import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const roles = [
  "Full-Stack Developer 💻",
  "Competitive Programmer 🏆",
  "AI Enthusiast 🤖",
  "Chemical Engineer 🧪",
  "Problem Solver 💡"
];

const RoleAnimation = ({ delay = 3000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, delay);
    return () => clearInterval(interval);
  }, [delay]);

  return (
    <div className="relative h-10 md:h-12 flex items-center justify-center md:justify-start"> {/* Fixed height to prevent layout shift */}
      <AnimatePresence mode='wait'>
        <motion.p
          key={roles[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute text-3xl md:text-4xl text-slate-300 font-medium"
        >
          {roles[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export default RoleAnimation;