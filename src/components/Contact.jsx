import React from 'react';
import { useSelector } from "react-redux"; // Access dark mode state from Redux
import { Formik, Field, Form, ErrorMessage } from 'formik'; // Import Formik
import * as Yup from 'yup'; // Import Yup for validation
import logoImg from "../assets/img/Contact_Us-removebg-preview.png"; // Import the logo
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from 'emailjs-com'; // Import EmailJS

function Contact() {
  const darkMode = useSelector((state) => state.theme.darkMode); // Get dark mode state from Redux

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phone: Yup.string().matches(/^[0-9]+$/, 'Phone number is not valid').required('Phone number is required'),
    message: Yup.string().required('Message is required'),
  });

  const sendEmail = (values, { setSubmitting, resetForm, setStatus }) => {
    const emailData = {
      to_name: 'Venkatesh Pujari',
      from_name: `${values.firstName} ${values.lastName}`,
      email: values.email,
      phone: values.phone,
      message: values.message,
    };

    emailjs.send("service_krd6n9a", "template_gxwuc0e", emailData, "5V_g0JFaNPlm8BVtM")
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setStatus({ success: 'Your message has been sent successfully!' });
        resetForm();
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setStatus({ error: 'Failed to send your message. Please try again later.' });
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className={`container mx-auto px-4 flex justify-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`} id="contact">
      <div className={`w-full lg:w-[40%] md:w-[60%] sm:w-[80%] p-8 shadow-lg rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} fixed top-1/2 transform -translate-y-1/2`}>
        <TrackVisibility>
          {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              {/* Logo at the top of the form */}
              <div className="text-center mb-6">
                <img src={logoImg} alt="Logo" className="w-24 h-auto mx-auto" />
              </div>
              <h2 className={`text-3xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Get In Touch</h2>

              {/* Formik Form */}
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={sendEmail}
              >
                {({ isSubmitting, status }) => (
                  <Form>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* First Name */}
                      <div>
                        <Field
                          name="firstName"
                          placeholder="First Name"
                          className={`p-3 border rounded-md focus:outline-none focus:ring-2 ${darkMode ? 'border-gray-600 bg-gray-700 text-white focus:ring-indigo-400' : 'border-gray-300 focus:ring-indigo-500'}`}
                        />
                        <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm mt-1" />
                      </div>

                      {/* Last Name */}
                      <div>
                        <Field
                          name="lastName"
                          placeholder="Last Name"
                          className={`p-3 border rounded-md focus:outline-none focus:ring-2 ${darkMode ? 'border-gray-600 bg-gray-700 text-white focus:ring-indigo-400' : 'border-gray-300 focus:ring-indigo-500'}`}
                        />
                        <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm mt-1" />
                      </div>

                      {/* Email */}
                      <div>
                        <Field
                          name="email"
                          type="email"
                          placeholder="Email Address"
                          className={`p-3 border rounded-md focus:outline-none focus:ring-2 ${darkMode ? 'border-gray-600 bg-gray-700 text-white focus:ring-indigo-400' : 'border-gray-300 focus:ring-indigo-500'}`}
                        />
                        <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                      </div>

                      {/* Phone */}
                      <div>
                        <Field
                          name="phone"
                          placeholder="Phone No."
                          className={`p-3 border rounded-md focus:outline-none focus:ring-2 ${darkMode ? 'border-gray-600 bg-gray-700 text-white focus:ring-indigo-400' : 'border-gray-300 focus:ring-indigo-500'}`}
                        />
                        <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="mt-4">
                      <label className={`block mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}><strong>Feedback</strong></label>
                      <Field
                        name="message"
                        as="textarea"
                        rows="6"
                        placeholder="Your feedback here..."
                        className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${darkMode ? 'border-gray-600 bg-gray-700 text-white focus:ring-indigo-400' : 'border-gray-300 focus:ring-indigo-500'}`}
                      />
                      <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className={`mt-6 w-full py-3 font-bold rounded-md focus:outline-none focus:ring-2 ${darkMode ? 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500' : 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500'}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Feedback'}
                    </button>

                    {/* Success/Error Messages */}
                    {status && status.success && <div className="mt-4 text-green-500">{status.success}</div>}
                    {status && status.error && <div className="mt-4 text-red-500">{status.error}</div>}
                  </Form>
                )}
              </Formik>
            </div>
          }
        </TrackVisibility>
      </div>
    </div>
  );
}

export default Contact;
