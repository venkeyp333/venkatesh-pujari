import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux'; // Import useSelector
import { motion } from 'framer-motion';
import Typewriter from "typewriter-effect";
import bannerImage from '../assets/img/Hacker.png'; 

const Banner = () => {
  const bannerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const darkMode = useSelector((state) => state.theme.darkMode); // Get dark mode state from Redux
  const firstLineText = "Hi! I'm Venkatesh Pujari";
  const secondLineText = "Full Stack Developer";

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        setIsImageVisible(true);
      } else {
        setIsVisible(false);
        setIsImageVisible(false);
      }
    }, { threshold: 0.1 });

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={bannerRef}
      className={`banner ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'} min-h-screen flex items-center relative`}
      id="home"
    >
      <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-start relative z-10">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-shadow">
            <Typewriter
              options={{
                strings: [firstLineText],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 50,
              }}
            />
            <br />
            <Typewriter
              options={{
                strings: [secondLineText],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 50,
                cursor: "",
              }}
            />
          </h1>
          <p className="mb-6 text-sm sm:text-base leading-relaxed">
            I am a hardworking and flexible CSE graduate with a strong dedication to establishing myself within an organization. 
            I am eager to apply my skills, embrace new challenges, and actively contribute to enhancing the productivity and success of an organization.
          </p>
        </div>
        {isImageVisible && (
          <motion.div
            className="w-full md:w-1/2 mt-6 md:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={bannerImage}
              alt="Banner"
              className="transform transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Banner;
