import { useState } from 'react'; // Import useState for toggling Contact visibility
import { FaEnvelope } from 'react-icons/fa'; // Import an envelope icon for the floating button
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import './index.css';

import { useSelector } from "react-redux"; // Import useSelector
import Education from "./components/Education";
import Hobbies from "./components/Hobbies";

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode); // Get dark mode state from Redux
  const [isContactOpen, setIsContactOpen] = useState(false); // State to toggle Contact component

  const toggleContact = () => {
    setIsContactOpen(!isContactOpen); // Toggle the Contact component visibility
  };

  return (
    <div className={`App min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} pt-16`}>
      {/* Sticky Navbar */}
      <NavBar />
      
      {/* Responsive sections */}
      <Banner />
      <Skills />
      <Projects />
      <Education />
      <Hobbies />

      {/* Conditionally render the Contact component at the bottom */}
      {isContactOpen && (
        <div className="fixed bottom-0 left-0 w-full">
          <Contact />
        </div>
      )}

      {/* Footer at the bottom */}
      <Footer />

      {/* Floating contact icon at the bottom right */}
      <button 
        className="fixed bottom-8 right-8 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition"
        onClick={toggleContact}
        aria-label="Contact Us"
      >
        <FaEnvelope size={24} />
      </button>
    </div>
  );
}

export default App;
