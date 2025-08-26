import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70, damping: 15 }
  }
};

function SkillCard({ name, icon, level, color }) {
  return (
    <motion.div
      className="flex flex-col items-center 
                 px-4 py-6 
                 transition transform 
                 rounded-lg 
                 shadow-sm 
                 bg-[var(--color-surface)] 
                 hover:scale-105 w-40 sm:w-48"
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
      <span className="text-sm text-gray-100 font-[var(--font-body)] sm:text-base">
        {name}
      </span>

      {/* Progress bar */}
      <div className="w-full mt-3">
        <div className="flex justify-between mb-1">
          <span className="text-xs text-gray-300">{level}%</span>
        </div>
        <div className="w-full h-2 overflow-hidden bg-gray-700 rounded-full">
          <motion.div
            className="h-2 rounded-full"
            style={{
              background: `linear-gradient(to right, ${color[0]}, ${color[1]})`,
            }}
            initial={{ width: 0 }}
            animate={{ width: `${level}%` }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default SkillCard;
