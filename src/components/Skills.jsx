import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux"; // Import useSelector for Redux
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import javaIcon from "../assets/SkillsLogo/java-icon.svg";
import javascriptIcon from "../assets/SkillsLogo/logo-javascript.svg";
import nodejsIcon from "../assets/SkillsLogo/nodejs-icon.svg";
import springBootIcon from "../assets/SkillsLogo/spring-3.svg";
import dotnetIcon from "../assets/SkillsLogo/microsoft-net.svg";
import cppIcon from "../assets/SkillsLogo/c-1.svg";
import hibernateIcon from "../assets/SkillsLogo/hibernate.svg";
import bootstrapIcon from "../assets/SkillsLogo/bootstrap-5-1.svg";
import reactIcon from "../assets/SkillsLogo/react-2.svg";
import cssIcon from "../assets/SkillsLogo/css-3.svg";
import htmlIcon from "../assets/SkillsLogo/html-1.svg";
import mongodbIcon from "../assets/SkillsLogo/mongodb-icon-2.svg";
import mysqlIcon from "../assets/SkillsLogo/mysql-3.svg";
import pythonIcon from "../assets/SkillsLogo/python-5.svg";
import muiIcon from "../assets/SkillsLogo/material-ui-1.svg";
import tailwindIcon from "../assets/SkillsLogo/tailwind-css-2.svg";
import oracleIcon from "../assets/SkillsLogo/oracle-logo.svg";
import PostGress from "../assets/SkillsLogo/postgresql.svg";
import firebase from "../assets/SkillsLogo/firebase.svg";


export const Skills = () => {
  const darkMode = useSelector((state) => state.theme.darkMode); // Get dark mode state from Redux

  const skills = [
    { icon: javaIcon, name: "Java" },
    { icon: javascriptIcon, name: "JavaScript" },
    { icon: nodejsIcon, name: "Node.js" },
    { icon: springBootIcon, name: "Spring Boot" },
    { icon: dotnetIcon, name: ".NET" },
    { icon: cppIcon, name: "C++" },
    { icon: hibernateIcon, name: "Hibernate" },
    { icon: bootstrapIcon, name: "Bootstrap" },
    { icon: reactIcon, name: "React.js" },
    { icon: cssIcon, name: "CSS" },
    { icon: pythonIcon, name: "Python" },
    { icon: muiIcon, name: "MUI" },
    { icon: tailwindIcon, name: "Tailwind CSS" },
    { icon: htmlIcon, name: "HTML" },
    { icon: mongodbIcon, name: "MongoDB" },
    { icon: mysqlIcon, name: "MySQL" },
    { icon: oracleIcon, name: "Oracle" },
  ];

  const skillsDetailed = {
    programmingLanguages: [
      { icon: javaIcon, name: "Java" },
      { icon: javascriptIcon, name: "JavaScript" },
      { icon: nodejsIcon, name: "Node.js" },
      { icon: springBootIcon, name: "Spring Boot" },
      { icon: dotnetIcon, name: ".NET" },
      { icon: cppIcon, name: "C++" },
      { icon: hibernateIcon, name: "Hibernate" },
    ],
    frontend: [
      { icon: bootstrapIcon, name: "Bootstrap" },
      { icon: reactIcon, name: "React Bootstrap" },
      { icon: reactIcon, name: "React.js" },
      { icon: cssIcon, name: "CSS" },
      { icon: htmlIcon, name: "HTML" },
    ],
    database: [
      { icon: mongodbIcon, name: "MongoDB" },
      { icon: mysqlIcon, name: "MySQL" },
      { icon: hibernateIcon, name: "Hibernate" },
      { icon: oracleIcon, name: "Oracle" },

      { icon: PostGress, name: "Postgresql" },
      { icon: firebase, name: "firebase" },

    ],
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const paragraph =
    "With a diverse skill set in software development, I specialize in creating robust applications using modern technologies such as Java, JavaScript, and Python. My proficiency in frameworks like Spring Boot and React.js allows me to build scalable and efficient web applications. Additionally, I have a strong foundation in database management with MySQL and MongoDB, ensuring data integrity and performance. I am passionate about continuously learning and adapting to new technologies, which empowers me to deliver high-quality solutions that meet user needs and drive business success.";

  const words = paragraph.split(" ");

  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  // State to track which words are visible
  const [visibleWords, setVisibleWords] = useState(
    Array(words.length).fill(false)
  );

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = ref.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Determine which words are in view
      const updatedVisibleWords = words.map((_, index) => {
        const wordElement = document.getElementById(`word-${index}`);
        if (wordElement) {
          const wordTop = wordElement.getBoundingClientRect().top;
          return wordTop < windowHeight && wordTop > 0; // Check if the word is in view
        }
        return false;
      });

      setVisibleWords(updatedVisibleWords);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [words]);

  return (
    <section
      className={`${darkMode ? "bg-gray-900" : "bg-gray-100 "} py-20 relative`}
      id="skills"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className={`${
              darkMode ? "text-white" : "text-gray-900"
            } text-4xl font-bold`}
          >
            Skills
          </h2>
        </div>

        {/* Animate words */}
        <div className="flex flex-wrap justify-center mb-10">
          {words.map((word, index) => (
            <motion.span
              key={index}
              id={`word-${index}`} // Assign an ID to each word
              initial={{ opacity: 0, y: 20 }}
              animate={
                visibleWords[index]
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              } // Animate based on visibility
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${
                darkMode ? "text-gray-300" : "text-black"
              } text-xl font-medium mr-2 mb-2`}
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Programming Languages Section */}
        <div className="mb-10">
          <h3
            className={`${
              darkMode ? "text-white" : "text-gray-900"
            } text-2xl font-semibold mb-4`}
          >
            Programming Languages
          </h3>
          <Carousel
            responsive={responsive}
            infinite={true}
            className="owl-carousel owl-theme skill-slider"
            autoPlay={true}
            autoPlaySpeed={100}
            transitionDuration={500}
            additionalTransfrom={0}
            arrows={false}
            draggable={false}
          >
            {skillsDetailed.programmingLanguages.map((skill, index) => (
              <div className="item flex flex-col items-center" key={index}>
                <div
                  className={`${
                    darkMode ? "bg-gray-800" : "bg-white"
                  } w-24 h-24 flex justify-center items-center mb-3 rounded-full shadow-lg`}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-2/3 h-2/3"
                  />
                </div>
                <h5
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-900"
                  } text-lg font-semibold`}
                >
                  {skill.name}
                </h5>
              </div>
            ))}
          </Carousel>
        </div>

        {/* Frontend Section */}
        <div className="mb-10">
          <h3
            className={`${
              darkMode ? "text-white" : "text-gray-900"
            } text-2xl font-semibold mb-4`}
          >
            Frontend
          </h3>
          <Carousel
            responsive={responsive}
            infinite={true}
            className="owl-carousel owl-theme skill-slider"
            autoPlay={true}
            autoPlaySpeed={100}
            transitionDuration={500}
            additionalTransfrom={0}
            arrows={false}
            draggable={false}
          >
            {skillsDetailed.frontend.map((skill, index) => (
              <div className="item flex flex-col items-center" key={index}>
                <div
                  className={`${
                    darkMode ? "bg-gray-800" : "bg-white"
                  } w-24 h-24 flex justify-center items-center mb-3 rounded-full shadow-lg`}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-2/3 h-2/3"
                  />
                </div>
                <h5
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-900"
                  } text-lg font-semibold`}
                >
                  {skill.name}
                </h5>
              </div>
            ))}
          </Carousel>
        </div>

        {/* Database Section */}
        <div className="mb-10">
          <h3
            className={`${
              darkMode ? "text-white" : "text-gray-900"
            } text-2xl font-semibold mb-4`}
          >
            Database
          </h3>
          <Carousel
            responsive={responsive}
            infinite={true}
            className="owl-carousel owl-theme skill-slider"
            autoPlay={true}
            autoPlaySpeed={100}
            transitionDuration={500}
            additionalTransfrom={0}
            arrows={false}
            draggable={false}
          >
            {skillsDetailed.database.map((skill, index) => (
              <div className="item flex flex-col items-center" key={index}>
                <div
                  className={`${
                    darkMode ? "bg-gray-800" : "bg-white"
                  } w-24 h-24 flex justify-center items-center mb-3 rounded-full shadow-lg`}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-2/3 h-2/3"
                  />
                </div>
                <h5
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-900"
                  } text-lg font-semibold`}
                >
                  {skill.name}
                </h5>
              </div>
            ))}
          </Carousel>
        </div>

        {/* Background Image */}
      </div>
    </section>
  );
};
