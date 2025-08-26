import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ icon, title, description, githubLink }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.02, delay: 0.02 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col 
  items-center gap-4 
  p-6 transition 
  bg-[var(--color-surface)] 
  rounded-lg 
  shadow-lg 
  hover:shadow-green-400/50"
    >
      <img src={icon} alt={title} className="w-12 h-12" />
      {title && (
        <>
          <p className="text-center text-gray-200 font-[var(--font-body)]">
            {title}
          </p>
          <p className="text-center text-gray-200 font-[var(--font-body)]">
            {description}
          </p>
        </>
      )}
      {githubLink && (
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <FaGithub
            size={30}
            className="hover:text-[var(--color-accent)] transition"
          />
        </a>
      )}
    </motion.div>
  );
}
