import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import Button from "../ui/Button";

const skillsData = {
  "Web Development": [
    { name: "HTML5", icon: "src/assets/icons/icons8-html.svg" },
    { name: "CSS3", icon: "src/assets/icons/icons8-css-96.svg" },
    { name: "JavaScript", icon: "src/assets/icons/javascript-svgrepo-com.svg" },
    { name: "React", icon: "src/assets/icons/react-svgrepo-com.svg" },
    { name: "TailwindCss", icon: "src/assets/icons/tailwindcss.png"}
  ],

  "Data Analysis": [
    { name: "Python", icon: "src/assets/icons/python-svgrepo-com.svg" },
    { name: "MS Excel", icon: "src/assets/icons/excel-svgrepo-com.svg" },
  ],
};

const containerVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen 
      px-6 py-16 
      border-b-2 
      border-[var(--color-accent)] 
      bg-[var(--color-bg)] 
      transition-colors 
      duration-300"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          id="skills-heading"
          className="text-3xl 
          sm:text-4xl 
          font-bold 
          text-center
          text-[var(--color-text)]
          mb-10 underline 
          decoration-[var(--color-accent)]"
        >
          Skills
        </h2>

        <motion.div
          className="space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {Object.entries(skillsData).map(([category, items]) => (
            <div key={category}>
              <h3
                className="mb-6 
              text-xl 
              font-semibold 
              text-center 
              text-[var(--color-text)] sm:text-2xl"
              >
                {category}
              </h3>

              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                {items.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                  />
                ))}
              </div>
            </div>
          ))}

          <div className="flex justify-center mt-6">
            <Button as="a" href="/resume.pdf" className="px-5 py-3">
              Download Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;