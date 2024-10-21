import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import headerImg from "../assets/img/Hacker.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import Typewriter from "typewriter-effect"; // Import the Typewriter component

export const Banner = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const [isVisible, setIsVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(true);
  const bannerRef = useRef(null);

  const firstLineText = "Hi! I'm Venkatesh";
  const secondLineText = "FullStack Developer";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setIsImageVisible(true);
        } else {
          setIsVisible(false);
          setIsImageVisible(false);
        }
      },
      { threshold: 0.1 }
    );

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
      className={`banner ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} min-h-screen flex items-center`}
      id="home"
    >
      <div className="container mx-auto px-2 sm:px-4 md:px-6 flex flex-col md:flex-row items-start">
        <motion.div
          className="w-full md:w-1/2"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
        >
          <motion.div>
            <span className="block text-sm sm:text-lg font-semibold mb-1 sm:mb-2">Welcome</span>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              {/* Use Typewriter effect for the first line */}
              <Typewriter
                options={{
                  strings: [firstLineText],
                  autoStart: true,
                  loop: true, // Set to true for continuous looping
                  delay: 100, // Adjust typing speed here
                  deleteSpeed: 50, // Speed of deletion (optional)
                }}
              />
              <br />
              {/* Use Typewriter effect for the second line */}
              <Typewriter
                options={{
                  strings: [secondLineText],
                  autoStart: true,
                  loop: true, // Set to true for continuous looping
                  delay: 100, // Adjust typing speed here
                  deleteSpeed: 50, // Speed of deletion (optional)
                  cursor: "", // Optional: Remove cursor
                }}
              />
            </h1>

            <p className="mb-4 text-sm sm:text-base leading-relaxed">
              I am a hardworking and flexible CSE graduate with a strong dedication to establishing myself within an organization.
              I am eager to apply my skills, embrace new challenges, and actively contribute to enhancing the productivity and success of an organization.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => console.log("connect")}
              className="bg-blue-500 text-white px-3 sm:px-4 py-2 rounded-full transition duration-300 flex items-center"
            >
              Let’s Connect <ArrowRightCircle size={20} className="ml-2" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-44 sm:w-56 md:w-64 lg:w-80 md:w-1/2 fixed top-20 right-10"
          initial={{ opacity: 0, scale: 0 }}
          animate={isImageVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <img
            src={headerImg}
            alt="Header"
            className="w-full h-auto object-contain"
            style={{ maxWidth: "100%" }}
          />
        </motion.div>
      </div>
    </section>
  );
};
