import { motion } from "framer-motion";
import Button from "../ui/Button";
import SkillCard from "./SkillCard";
import html5 from "../assets/icons/icons8-html.svg";
import css3 from "../assets/icons/icons8-css-96.svg";
import excel from "../assets/icons/excel-svgrepo-com.svg";
import react from "../assets/icons/react-svgrepo-com.svg";
import tailwindcss from "../assets/icons/tailwindcss.png";
import python from "../assets/icons/python-svgrepo-com.svg";
import javascript from "../assets/icons/javascript-svgrepo-com.svg";
import nodejs from "../assets/icons/nodejs-icon.svg";  
import expressjs from "../assets/icons/expressjs-icon.svg";  

const skillsData = {
  "Web Development": [
    {
      name: "HTML5",
      icon: html5,
      level: 95,
      color: ["#E34F26", "#F16529"],
    },
    {
      name: "CSS3",
      icon: css3,
      level: 80,
      color: ["#1572B6", "#2965F1"],
    },
    {
      name: "JavaScript",
      icon: javascript,
      level: 70,
      color: ["#F7DF1E", "#F0DB4F"],
    },
    {
      name: "React",
      icon: react,
      level: 85,
      color: ["#61DAFB", "#21A1F1"],
    },
    {
      name: "TailwindCSS",
      icon: tailwindcss,
      level: 95,
      color: ["#38BDF8", "#0EA5E9"],
    },
    {
      name: "Node.js",
      icon: nodejs,
      level: 25,
      color: ["#339933", "#6CC24A"],
    },
    {
      name: "Express.js",
      icon: expressjs,
      level: 30,
      color: ["#2C2C2C", "#000000"],
    },
  ],

  "Data Analysis": [
    {
      name: "Python",
      icon: python,
      level: 70,
      color: ["#3776AB", "#4B8BBE"],
    },
    {
      name: "MS Excel",
      icon: excel,
      level: 60,
      color: ["#217346", "#28A745"],
    },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-16 border-b-2 border-[var(--color-accent)] bg-[var(--color-bg)] transition-colors duration-300"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          id="skills-heading"
          className="text-3xl sm:text-4xl font-[var(--font-heading)] text-center text-[var(--color-text)] mb-10 underline decoration-[var(--color-accent)]"
        >
          Skills
        </h2>

        <motion.div
          className="space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {Object.entries(skillsData).map(([category, items]) => (
            <div key={category}>
              <h3
                className="mb-6 text-xl font-[var(--font-raleway)] text-center text-[var(--color-text)] sm:text-2xl"
              >
                {category}
              </h3>

              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                {items.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    level={skill.level}
                    color={skill.color}
                  />
                ))}
              </div>
            </div>
          ))}

          <div className="flex justify-center mt-6">
            <Button as="a" href="/resume.pdf">
              Download Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
