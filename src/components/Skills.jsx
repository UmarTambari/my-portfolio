import { motion } from "framer-motion";
import Button from "../ui/Button";
import SkillCard from "./SkillCard";
import html5 from "../assets/icons/icons8-html.svg";
import css3 from "../assets/icons/icons8-css-96.svg";
import excel from "../assets/icons/excel-svgrepo-com.svg"
import react from "../assets/icons/react-svgrepo-com.svg";
import tailwindcss from "../assets/icons/tailwindcss.png";
import python from "../assets/icons/python-svgrepo-com.svg";
import javascript from "../assets/icons/javascript-svgrepo-com.svg";

const skillsData = {
  "Web Development": [
    { name: "HTML5", icon:  html5  },
    { name: "CSS3", icon: css3 },
    { name: "JavaScript", icon: javascript },
    { name: "React", icon: react },
    { name: "TailwindCss", icon: tailwindcss }
  ],

  "Data Analysis": [
    { name: "Python", icon: python },
    { name: "MS Excel", icon: excel },
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
          font-[var(--font-heading)] 
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
              font-[var(--font-raleway)]
              text-center 
              text-[var(--color-text)] 
              sm:text-2xl"
              >
                {category}
              </h3>

              <div className="grid 
              grid-cols-2 
              gap-6 
              sm:grid-cols-3 
              md:grid-cols-4">
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