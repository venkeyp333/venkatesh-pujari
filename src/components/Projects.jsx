import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import urbanKartLogo from "../assets/img/ProjectImages/UrbanKart.jpg"; 
import AiimsLogo from "../assets/Logo/aiims.jpg";
import TicketManagementlogo from "../assets/img/ProjectImages/tickectManagementLogo.png"; 
import { useSelector } from "react-redux"; 

gsap.registerPlugin(ScrollTrigger);

function ProjectImage({ id, imgUrl, title, description, darkMode }) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 80, rotate: 10, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          rotate: 0,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "restart none none none",
          },
          stagger: 0.3,
        }
      );
    }
  }, []);

  return (
    <section ref={cardRef} className="mb-10 w-full flex flex-col items-center">
      <div
        className={`overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
        style={{
          width: '300px',
          height: '300px',
          position: 'relative',
          background: darkMode ? 'linear-gradient(145deg, #1f2937, #111827)' : 'linear-gradient(145deg, #ffffff, #e5e7eb)',
          boxShadow: darkMode
            ? '20px 20px 60px #0b0e15, -20px -20px 60px #323e54'
            : '20px 20px 60px #d1d5db, -20px -20px 60px #ffffff',
        }}
      >
        <img
          src={imgUrl}
          alt={`Project ${id}`}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="mt-4 text-center w-full flex flex-col items-center">
        <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          {title}
        </h2>
        <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </p>
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

  return (
    <div
      id="projects"
      className={`w-full px-4 py-10 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}
    >
      <div className="text-center mb-8">
        <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          My Amazing Projects
        </h2>
        <p className={`text-lg mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Explore the innovative solutions we've created
        </p>
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
            darkMode={darkMode}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
