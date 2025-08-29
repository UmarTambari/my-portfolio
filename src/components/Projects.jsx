import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Button from "../ui/Button";
import reactLogo from "../assets/icons/react-svgrepo-com.svg";
import tailwindLogo from "../assets/icons/tailwindcss.png"
import dashboardImage from "../assets/images/dashboardImage.png";
import portfolioImage from "../assets/images/portfolioImage.png"

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen 
      bg-[var(--color-bg)] 
      text-[var(--color-text)] 
      p-8 
      border-b-2 
      border-[var(--color-accent)]"
    >
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        viewport={{ once: true }}
        className="underline 
        text-center
        text-3xl mb-12
        font-[var(--font-heading)]
        decoration-[var(--color-accent)]" 
      >
        Projects
      </motion.h1>

      <div className="grid max-w-5xl grid-cols-1 gap-10 mx-auto sm:grid-cols-2">
        <ProjectCard
          icon={reactLogo}
          title="Personal Portfolio"
          description="A modern portfolio built using React and TailwindCSS"
          image={portfolioImage}
          live="#"
          githubLink="https://github.com/UmarTambari/my-portfolio"
        />

        <ProjectCard
          icon={[reactLogo]}
          title="Admin Dashboard"
          description="An Admin dashboard for a fictional company to track its performance, users, progress, and growth."
          image={dashboardImage}
          live="https://admin-dashboard-sigma-one-46.vercel.app/"
          githubLink="https://github.com/UmarTambari360/admin-dashboard"
        />
      </div>

      <div
        id="projects-button"
        className="flex justify-center m-16 align-center"
      >
        {/* <Button as="a">See All Projects</Button> */}
      </div>
    </section>
  );
}
