import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-10">
      <nav className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-2xl md:text-3xl font-extrabold text-teal-400 tracking-wider hover:text-teal-300 transition-colors duration-300">
          Rohit.jsx
        </NavLink>
        <div className="hidden md:flex items-center space-x-10">
          <NavLink to="/" className="text-lg text-slate-300 hover:text-teal-400 transition-all duration-300 font-semibold hover:scale-105">Home</NavLink>
          <NavLink to="/about" className="text-lg text-slate-300 hover:text-emerald-400 transition-all duration-300 font-semibold hover:scale-105">About</NavLink>
          <NavLink to="/projects" className="text-lg text-slate-300 hover:text-cyan-400 transition-all duration-300 font-semibold hover:scale-105">Projects</NavLink>
          <NavLink to="/projects" className="text-lg text-slate-300 hover:text-violet-400 transition-all duration-300 font-semibold hover:scale-105">Resume</NavLink>
          <NavLink to="/contact" className="text-lg text-slate-300 hover:text-purple-400 transition-all duration-300 font-semibold hover:scale-105">Contact</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;