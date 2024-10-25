import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux"; // Import useSelector to access darkMode
import { FaLinkedin, FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // Importing relevant icons
import logo from "../assets/Logo/venkey.png";

export const Footer = () => {
  const darkMode = useSelector((state) => state.theme.darkMode); // Get dark mode state from Redux

  return (
    <footer className={`py-3 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-700 text-white'}`}>
      <Container>
        <Row className="align-items-center">
          {/* Logo Section */}
          <Col xs={12} sm={6} className="flex justify-center sm:justify-start mb-2 sm:mb-0">
            <img src={logo} alt="Logo" className="h-12 w-auto" /> {/* Reduce logo size */}
          </Col>

          {/* Contact Information */}
          <Col xs={12} sm={6} className="flex flex-col sm:flex-row items-center justify-center sm:justify-end text-center sm:text-right space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="flex space-x-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/venkatesh-pujari-632101248"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <FaLinkedin className="h-5 w-5 text-white" />
              </a>
              {/* Phone */}
              <a href="tel:+919008439330" className="hover:opacity-80 transition-opacity">
                <FaPhoneAlt className="h-5 w-5 text-white" />
              </a>
              {/* Email */}
              <a href="mailto:venkateshpujari333@gmail.com" className="hover:opacity-80 transition-opacity">
                <FaEnvelope className="h-5 w-5 text-white" />
              </a>
            </div>
            <p className="text-sm mt-2 sm:mt-0">
              India
            </p>
          </Col>
        </Row>
        <Row className="text-center mt-2">
          <Col>
            <p className="text-sm">© 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
