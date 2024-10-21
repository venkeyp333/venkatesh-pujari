import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import urbanKartLogo from "../assets/img/ProjectImages/UrbanKart.jpg"; 
import AiimsLogo from "../assets/img/ProjectImages/UrbanKart.jpg"; 
import TicketManagementlogo from "../assets/img/ProjectImages/tickectManagementLogo.png"; 
import { useSelector } from "react-redux"; 

const splitText = (text) => text.split("");

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [distance, -distance]);
}

function ProjectImage({ id, imgUrl, title, description, darkMode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useParallax(scrollYProgress, 300);
  const [hovered, setHovered] = useState(false);
  const inView = useInView(ref, { once: false });

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="mb-10 w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div className={`overflow-hidden rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}> {/* Conditional background color */}
        <motion.img
          src={imgUrl}
          alt={`Project ${id}`}
          style={{ x }}
          className="w-1/2 h-auto mx-auto transition-transform duration-500 hover:scale-105"
        />
      </motion.div>

      <div className="mt-4 text-center">
        <motion.h2
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={letterVariants}
          className={`text-xl font-semibold md:text-2xl ${darkMode ? 'text-white' : 'text-gray-800'}`} // Conditional text color
        >
          <div>
            {splitText(title).map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-gray-600 mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} // Conditional text color
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}

export const Projects = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const projects = [
    {
      id: 1,
      title: "Urban Kart",
      imgUrl: urbanKartLogo,
      description: "E-commerce platform using React, Spring Boot, and .NET."
    },
    {
      id: 2,
      title: "AIIMS",
      imgUrl: AiimsLogo,
      description: "This project focuses on enhancing user experience with modern UI."
    },
    {
      id: 3,
      title: "Ticket Manager",
      imgUrl: TicketManagementlogo,
      description: "A tool to manage tasks efficiently and boost productivity."
    },
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      id="projects"
      ref={ref}
      className={`w-full px-4 py-10 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`} // Conditional background color
    >
      <div className="text-center mb-8">
        <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Our Amazing Projects</h2>
        <p className={`text-lg mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Explore the innovative solutions we've created</p>
        <div className="mt-4 border-b-2 border-blue-500 w-24 mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectImage
            key={project.id}
            id={project.id}
            imgUrl={project.imgUrl}
            title={project.title}
            description={project.description}
            darkMode={darkMode} // Pass darkMode to ProjectImage
          />
        ))}
      </div>

      <motion.div
        className="bg-blue-500 h-1 mt-6 w-full"
        style={{ scaleX }}
      />
    </div>
  );
};

export default Projects;
