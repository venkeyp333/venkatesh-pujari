import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import projImg1 from "../assets/img/Hacker.png"; // Replace with your actual image imports
import { useSelector } from "react-redux"; // Import useSelector

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function ProjectImage({ id, imgUrl, title, description }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  const [hovered, setHovered] = useState(false); // State to track hover

  return (
    <section
      ref={ref}
      className="mb-10 flex items-center justify-center relative"
      onMouseEnter={() => setHovered(true)} // Set hover state
      onMouseLeave={() => setHovered(false)} // Reset hover state
    >
      <motion.img
        src={imgUrl}
        alt={`Project ${id}`}
        className={`w-full max-w-md rounded-lg shadow-lg transition-transform duration-300 ${hovered ? 'scale-105' : 'scale-100'}`}
        style={{ y }}
      />
      
      {/* Overlay project title */}
      <motion.h2
        className={`absolute top-4 left-4 text-white text-xl font-bold bg-black bg-opacity-60 p-2 rounded ${hovered ? 'scale-105' : 'scale-100'}`}
        style={{ y }}
      >
        {title}
      </motion.h2>

      {/* Description section */}
      <motion.div
        className={`ml-4 p-4 bg-white rounded-lg shadow-lg transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        style={{ y }}
      >
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </motion.div>
    </section>
  );
}

export const Projects = () => {
  const darkMode = useSelector((state) => state.theme.darkMode); // Get dark mode state from Redux

  const projects = [
    {
      id: 1,
      title: "Urban Kart",
      imgUrl: projImg1,
      description: "E-commerce platform using React, Spring Boot, and .NET."
    },
    {
      id: 2,
      title: "Another Project",
      imgUrl: projImg1, // Use a different image for each project as needed
      description: "This project focuses on enhancing user experience with modern UI."
    },
    {
      id: 3,
      title: "Yet Another Project",
      imgUrl: projImg1, // Use a different image for each project as needed
      description: "A tool to manage tasks efficiently and boost productivity."
    },
    // Add more projects here...
  ];

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <h2 className={`text-center mb-10 text-3xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>Projects</h2>
      {projects.map((project) => (
        <ProjectImage key={project.id} id={project.id} imgUrl={project.imgUrl} title={project.title} description={project.description} />
      ))}
      <motion.div className="fixed top-0 left-0 h-1 bg-blue-500" style={{ scaleX }} />
    </div>
  );
};

export default Projects;
