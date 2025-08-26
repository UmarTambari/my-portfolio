import heroImg from "../assets/images/about_image2.jpg";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen 
      flex flex-col 
      md:flex-row items-center 
      justify-center gap-10 px-6 py-16 
      transition-colors duration-300 
      bg-[var(--color-bg)] 
      border-2 border-b-[var(--color-accent)]"
    >
      <div className="flex flex-col justify-center w-full space-y-6 text-center md:w-1/2 md:text-left">
        <h1
          className="text-3xl md:text-4xl 
        font-[var(--font-heading)]
        text-[var(--color-text)] 
        underline 
        decoration-[var(--color-accent)]"
        >
          About Me
        </h1>
        <p
          className="text-base 
        leading-relaxed 
        text-gray-200 
        md:text-lg
        font-[var(--font-raleway)]"
        >
          I’m a Computer Science major with a strong passion for technology and
          problem-solving. My primary focus is on front-end web development,
          where I build clean, responsive interfaces using modern technologies.
          I’m actively growing my portfolio by creating projects that solve
          real-world problems and continuously refining my craft. Beyond the
          front end, I have moderate experience in data analysis and a growing
          interest in the intersection of data science and machine learning. I’m
          also a proactive learner, exploring cloud computing, AI, and modern
          development tools to stay ahead in today’s tech landscape.
        </p>
      </div>

      <div className="flex justify-center w-full md:w-1/2">
        <img
          src={heroImg}
          alt="my avatar"
          className="object-cover 
          w-64 h-64 
          border-4 
          border-gray-400 
          rounded-full 
          shadow-lg 
          md:w-96 md:h-96"
        />
      </div>
    </section>
  );
}

export default About;
