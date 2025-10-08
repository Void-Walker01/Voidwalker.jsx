import React,{useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; 

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMobileMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-10 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-slate-900/70 backdrop-blur-sm shadow-lg' : ''
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-2xl md:text-3xl font-extrabold text-teal-400 tracking-wider hover:text-teal-300 transition-colors duration-300">
          Rohit.jsx
        </NavLink>

        {/* Desktop Menu - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-10">
          <NavLink to="/" className="text-lg text-slate-300 hover:text-teal-400 transition-all duration-300 font-semibold hover:scale-105">Home</NavLink>
          <NavLink to="/about" className="text-lg text-slate-300 hover:text-emerald-400 transition-all duration-300 font-semibold hover:scale-105">About</NavLink>
          <NavLink to="/projects" className="text-lg text-slate-300 hover:text-cyan-400 transition-all duration-300 font-semibold hover:scale-105">Projects</NavLink>
          <NavLink to="/contact" className="text-lg text-slate-300 hover:text-purple-400 transition-all duration-300 font-semibold hover:scale-105">Contact</NavLink>
        </div>

        {/* 2. Hamburger Menu Button - Visible only on mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-200 focus:outline-none">
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </nav>

      {/* 3. Mobile Menu - Slides down from the top */}
      <div className={`absolute top-full left-0 w-full bg-slate-900/90 backdrop-blur-md md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col items-center space-y-6 py-8">
            <NavLink to="/" onClick={closeMobileMenu} className="text-xl text-slate-300 hover:text-teal-400">Home</NavLink>
            <NavLink to="/about" onClick={closeMobileMenu} className="text-xl text-slate-300 hover:text-emerald-400">About</NavLink>
            <NavLink to="/projects" onClick={closeMobileMenu} className="text-xl text-slate-300 hover:text-cyan-400">Projects</NavLink>
            <NavLink to="/contact" onClick={closeMobileMenu} className="text-xl text-slate-300 hover:text-purple-400">Contact</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;