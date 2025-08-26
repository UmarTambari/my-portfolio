import { motion } from "framer-motion";

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0,
        transition: { duration: 0.02, delay: 0.1, ease: "easeOut"},
    },
};

function SkillCard ( {name, icon }) {
    return (
        <motion.div
      className="flex flex-col 
      items-center 
      px-4 py-6 
      transition transform 
      rounded-lg 
      shadow-sm 
      bg-[var(--color-surface)] 
      hover:scale-105"
      variants={itemVariants}
      role="listitem"
      aria-label={name}
    >
      <img
        src={icon}
        alt={name}
        className="object-contain w-16 h-16 mb-3"
        loading="lazy"
      />
      <span className="text-sm
       text-gray-100 
       font-[var(--font-body)] 
       sm:text-base">
        {name}
      </span>
    </motion.div>
    )
}

export default SkillCard;