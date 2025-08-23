import { motion } from "framer-motion";

function ProjectCard({ icon, title, description, githubLink }) {
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
      {description && (
        <p className="text-center text-gray-200">{description}</p>
      )}
      {githubLink && (
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <button className="p-2 transition rounded-full hover:bg-green-300">
            <img
              src="/src/assets/icons/github-color-svgrepo-com.svg"
              alt="GitHub"
              className="w-10"
            />
          </button>
        </a>
      )}
    </motion.div>
  );
}

export default ProjectCard;