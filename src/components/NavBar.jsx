import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef } from "react";
import lightSwitchSound from '../assets/Audio/light-switch-81967.mp3';
import { Link } from 'react-scroll';

export const NavBar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const [flash, setFlash] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility
  const soundRef = useRef(null);

  const handleToggleTheme = () => {
    soundRef.current.play();
    setFlash(true);
    dispatch(toggleTheme());
    setTimeout(() => setFlash(false), 300);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${darkMode ? "bg-gradient-to-r from-purple-600 via-pink-700 to-red-600 opacity-90 text-white" : "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-80 text-gray-900"} fixed w-full top-0 left-0 shadow-lg transition-all duration-300 ease-in-out z-50`}>
      <div className={`container mx-auto flex justify-between items-center p-4`}>
        {/* Logo */}
        <div className="logo mb-2 sm:mb-0">
          <h1 className="text-2xl font-bold transition-transform duration-500 transform hover:scale-105">
            Venkatesh Pujari
          </h1>
        </div>

        {/* Hamburger Menu Icon */}
        <button onClick={toggleMenu} className="sm:hidden focus:outline-none">
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className={`text-2xl ${darkMode ? 'text-white' : 'text-gray-900'}`} />
        </button>

        {/* Navigation Links */}
        <div className={`flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 ${isMenuOpen ? 'flex' : 'hidden'} sm:flex`}>
          <ul className="nav-links flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            {["home", "skills", "projects", "education", "hobbies"].map((section) => (
              <li key={section} className="group">
                <Link
                  to={section}
                  smooth={true}
                  duration={800}
                  onClick={toggleMenu} // Close menu on link click
                  className="relative inline-block px-2 py-1 text-lg hover:text-yellow-300 transition duration-300 ease-in-out cursor-pointer"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  <motion.div
                    className="absolute inset-x-0 -bottom-1 h-1 bg-yellow-300 rounded transition-all duration-300 scale-x-0 group-hover:scale-x-100"
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Theme toggle button */}
          <button
            onClick={handleToggleTheme}
            className="ml-0 sm:ml-4 mt-2 sm:mt-0 bg-transparent text-black dark:bg-transparent dark:text-white px-2 py-2 rounded transition duration-300 ease-in-out"
          >
            <FontAwesomeIcon
              icon={darkMode ? faSun : faMoon}
              className={`text-xl ${darkMode ? 'text-yellow-400' : 'text-black'} transition-colors duration-300`}
            />
          </button>
        </div>
      </div>
      <audio ref={soundRef} src={lightSwitchSound} preload="auto" />
    </nav>
  );
};
