import React from 'react'
import { useState } from "react";
import { useSelector } from "react-redux"; // Import useSelector to access darkMode
import logoImg from "../assets/img/Contact_Us-removebg-preview.png"; // Import the logo
import 'animate.css';
import TrackVisibility from 'react-on-screen';
function Contact() {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);

  const darkMode = useSelector((state) => state.theme.darkMode); // Get dark mode state from Redux

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  }
  return (
    
    <div className={`container mx-auto px-4 flex justify-end ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`} id="contact">


        <div className={`w-full lg:w-[40%] md:w-[60%] sm:w-[80%] p-8 shadow-lg rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} fixed top-1/2 transform -translate-y-1/2`}>
          <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                {/* Logo at the top of the form */}
                <div className="text-center mb-6">
                  <img src={logoImg} alt="Logo" className="w-24 h-auto mx-auto" />
                </div>
                <h2 className={`text-3xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Get In Touch</h2>
                <form>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={formDetails.firstName}
                      placeholder="First Name"
                      onChange={(e) => onFormUpdate('firstName', e.target.value)}
                      className={`p-3 border rounded-md focus:outline-none focus:ring-2 ${darkMode ? 'border-gray-600 bg-gray-700 text-white focus:ring-indigo-400' : 'border-gray-300 focus:ring-indigo-500'}`}
                    />
                    <input
                      type="text"
                      value={formDetails.lastName}
                      placeholder="Last Name"
                      onChange={(e) => onFormUpdate('lastName', e.target.value)}
                      className={`p-3 border rounded-md focus:outline-none focus:ring-2 ${darkMode ? 'border-gray-600 bg-gray-700 text-white focus:ring-indigo-400' : 'border-gray-300 focus:ring-indigo-500'}`}
                    />
                    <input
                      type="email"
                      value={formDetails.email}
                      placeholder="Email Address"
                      onChange={(e) => onFormUpdate('email', e.target.value)}
                      className={`p-3 border rounded-md focus:outline-none focus:ring-2 ${darkMode ? 'border-gray-600 bg-gray-700 text-white focus:ring-indigo-400' : 'border-gray-300 focus:ring-indigo-500'}`}
                    />
                    <input
                      type="tel"
                      value={formDetails.phone}
                      placeholder="Phone No."
                      onChange={(e) => onFormUpdate('phone', e.target.value)}
                      className={`p-3 border rounded-md focus:outline-none focus:ring-2 ${darkMode ? 'border-gray-600 bg-gray-700 text-white focus:ring-indigo-400' : 'border-gray-300 focus:ring-indigo-500'}`}
                    />
                    <textarea
                      rows="6"
                      value={formDetails.message}
                      placeholder="Message"
                      onChange={(e) => onFormUpdate('message', e.target.value)}
                      className={`p-3 border rounded-md focus:outline-none focus:ring-2 col-span-2 ${darkMode ? 'border-gray-600 bg-gray-700 text-white focus:ring-indigo-400' : 'border-gray-300 focus:ring-indigo-500'}`}
                    />
                  </div>
                  <button
                    type="submit"
                    className={`mt-6 w-full py-3 font-bold rounded-md focus:outline-none focus:ring-2 ${darkMode ? 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500' : 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500'}`}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            }
          </TrackVisibility>
        </div>
      </div>
    
  )
}

export default Contact