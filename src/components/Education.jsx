import React from 'react';
import { useSelector } from 'react-redux'; // Import useSelector for Redux state
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cdacImage from '../assets/Logo/cdac.svg'; 
import vtuImage from '../assets/Logo/vtu.png';
import kleImage from '../assets/Logo/kle.png'; 
import kjsImage from '../assets/Logo/kjs.svg'; 

// Education data
const educationData = [
  {
    institution: "CDAC PG Diploma in Advanced Computing",
    score: "Secured 77.25%",
    duration: "09/2023 – 02/2024",
    image: cdacImage,
  },
  {
    institution: "VTU Bachelor of Technology in Computer Science Engineering",
    score: "Secured 64.5%",
    duration: "07/2019 – 06/2023",
    image: vtuImage,
  },
  {
    institution: "KLE 12th (PCMB)",
    score: "Secured 64.66%",
    duration: "05/2018 – 05/2019",
    image: kleImage,
  },
  {
    institution: "K J S Sameerwadi 10th Board (CBSE)",
    score: "",
    duration: "05/2016 – 05/2017",
    image: kjsImage,
  },
];

function Education() {
  // Get dark mode state from Redux
  const darkMode = useSelector((state) => state.theme.darkMode);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div id="education" className={`max-w-screen-lg mx-auto p-6 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="text-center mb-8">
        <h2 className={`text-3xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Education</h2>
        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Explore my educational background</p>
      </div>
      <Slider {...settings}>
        {educationData.map((edu, index) => (
          <div key={index} className="px-4">
            <div className={`shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
              <img 
                src={edu.image} 
                alt={edu.institution} 
                className="w-full h-32 object-cover mb-4 rounded" 
              />
              <h3 className="text-xl font-bold">{edu.institution}</h3>
              <p>{edu.score}</p>
              <p className="text-gray-500">{edu.duration}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Education;
