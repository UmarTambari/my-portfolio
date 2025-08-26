import Button from "../ui/Button";

function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen 
      flex flex-col items-center justify-center 
      text-center
      bg-[var(--color-bg)] px-4 
      border-2 border-b-[var(--color-accent)]"
    >
      <div className="max-w-2xl">
        <h1
          className="mb-4 text-4xl
        text-[var(--color-text)] 
        sm:text-5xl lg:text-6xl
        font-[var(--font-heading)]"
        >
          Umar Farouq
        </h1>
        <p className="mb-8 text-lg 
        text-[var(--color-text)] 
        sm:text-xl
        font-[var(--font-raleway)]">
          A passionate front-end developer with a knack for building both
          beautiful and functional UI/UX.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button as="a" href="#projects" className="px-6 py-3">
            View My Work
          </Button>
          <Button as="a" href="#contact" className="px-5 py-3">
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
