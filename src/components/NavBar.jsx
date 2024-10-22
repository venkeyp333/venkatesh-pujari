import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from "react";
import lightSwitchSound from '../assets/Audio/light-switch-81967.mp3';
import { Link } from 'react-scroll';

export const NavBar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const [flash, setFlash] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const soundRef = useRef(null);

  const handleToggleTheme = () => {
    soundRef.current.play();
    setFlash(true);
    dispatch(toggleTheme());
    setIsMenuOpen(false); // Close the menu when toggling the theme
    setTimeout(() => setFlash(false), 300);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu if it is open when the theme changes
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [darkMode]);

  const sections = ["home", "skills", "projects", "education", "hobbies"];

  return (
    <nav className={`${darkMode ? "bg-black text-white" : "bg-white text-black"} fixed w-full top-0 left-0 shadow-lg transition-all duration-300 ease-in-out z-50`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">MyApp</div>

        <div className="hidden md:flex space-x-4">
          {sections.map((section) => (
            <Link 
              key={section} 
              to={section} 
              smooth={true} 
              duration={500} 
              className="hover:underline"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
          {/* Theme Toggle Icon for Desktop */}
          <button onClick={handleToggleTheme} className="focus:outline-none">
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-xl" />
          </button>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className={`focus:outline-none p-2 rounded-full ${darkMode ? "bg-gradient-to-r from-purple-600 via-pink-700 to-red-600 text-white" : "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-gray-900"}`}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={`${darkMode ? "bg-dark text-white" : "bg-white text-gray-900"} fixed inset-x-0 mt-2 flex flex-col items-center justify-start md:hidden`}
          
          // className={`${darkMode ? "bg-gradient-to-r from-purple-600 via-pink-700 to-red-600 text-white" : "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-gray-900"} fixed inset-x-0 mt-2 flex flex-col items-center justify-start md:hidden`}
        >
          {sections.map((section) => (
            <Link 
              key={section} 
              to={section} 
              smooth={true} 
              duration={500} 
              className="py-2 hover:underline" 
              onClick={toggleMenu} // Close menu on link click
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
          {/* Theme Toggle Icon for Mobile */}
          <button onClick={handleToggleTheme} className="mt-4 focus:outline-none">
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-xl" />
          </button>
        </motion.div>
      )}
      <audio ref={soundRef} src={lightSwitchSound} preload="auto" />
    </nav>
  );
};
