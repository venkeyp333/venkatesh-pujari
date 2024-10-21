import { motion } from "framer-motion";

export const ProjectCard = ({ title, description, imgUrl, className, onClick }) => {
  return (
    <motion.div 
      className={`${className} flex flex-col items-center cursor-pointer`} 
      onClick={onClick}
      initial={{ y: 0 }} // Starting position
      whileHover={{ y: -10 }} // Slightly raise the card on hover
      whileInView={{ y: [0, 10, 0] }} // Parallax effect when in view
      transition={{ duration: 0.5 }} // Animation duration
    >
      <img src={imgUrl} alt={title} className="w-full h-48 object-cover mb-4 rounded" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};
