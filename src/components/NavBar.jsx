import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from "react";
import lightSwitchSound from '../assets/Audio/light-switch-81967.mp3';
import { Link } from 'react-scroll';
import VenkeyLogo from '../assets/Logo/venkey.png';

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
      <div className="max-w-7xl mx-auto flex justify-between items-center p-2 md:p-3 lg:p-4"> {/* Responsive padding */}
        
        {/* Responsive Logo Image */}
        <div className="text-xl font-bold">
          <img
            src={VenkeyLogo}
            alt="Venkey Logo"
            className="h-8 md:h-10 lg:h-12 w-auto" // Adjusted height for responsiveness
          />
        </div>

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
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-lg md:text-xl lg:text-2xl" /> {/* Responsive icon size */}
          </button>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className={`focus:outline-none p-2 rounded-full ${darkMode ? "bg-gradient-to-r from-purple-600 via-pink-700 to-red-600 text-white" : "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-gray-900"}`}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-lg md:text-xl lg:text-2xl" /> {/* Responsive icon size */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className={`fixed inset-x-0 mt-2 flex flex-col items-center justify-start md:hidden`}
  >
    {/* Translucent background with blur effect */}
    <div
      className={`${darkMode ? "bg-gradient-to-r from-purple-600 via-pink-700 to-red-600" : "bg-gray-500"} absolute inset-0 opacity-50 blur-lg`}
    ></div>

    {/* Clear content on top of the blurred translucent background */}
    <div className="relative z-10 flex flex-col items-center space-y-4">
      {sections.map((section) => (
        <Link
          key={section}
          to={section}
          smooth={true}
          duration={500}
          className="py-2 px-4 text-xl font-semibold text-white hover:text-purple-700 hover:underline transition duration-300 ease-in-out transform hover:scale-105" // Styling for the link
          onClick={toggleMenu} // Close menu on link click
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </Link>
      ))}

      {/* Theme Toggle Icon for Mobile */}
      <button onClick={handleToggleTheme} className="mt-4 focus:outline-none">
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-lg md:text-xl lg:text-2xl" />
      </button>
    </div>
  </motion.div>
)}

      <audio ref={soundRef} src={lightSwitchSound} preload="auto" />
    </nav>
  );
};
