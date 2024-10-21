import React from 'react';
import { motion } from 'framer-motion';

const PersonalInfo = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-center mb-4">Personal Information</h2>
      <motion.div
        className="flex flex-col space-y-2"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between">
          <span className="font-semibold">Date of Birth:</span>
          <span>25/07/2001</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Gender:</span>
          <span>Male</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Nationality:</span>
          <span>Indian</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Passport:</span>
          <span>Available</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PersonalInfo;
