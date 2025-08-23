import { useState, useEffect, useRef } from "react";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FiMenu, FiX } from "react-icons/fi";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function NavBar() {
  const [active, setActive] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const observerRef = useRef(null);

  // Handle section intersection
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "5% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <nav
      className="bg-[var(--color-bg)]
     text-[var(--color-text)] 
     fixed top-0 left-0 w-full z-50 
     shadow-md border-b-2 
     border-[var(--color-accent)]"
    >
      <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        <div className="flex items-center space-x-4">
          <FaReact size={30} />
          <RiTailwindCssFill size={30} />
        </div>

        <ul className="hidden space-x-8 md:flex font-inter">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`transition-all duration-200 px-2 py-1 rounded 
                  hover:text-[white] hover:underline decoration-[var(--color-accent)]
                  ${
                    active === section.id
                      ? "font-bold underline decoration-[var(--color-accent)]"
                      : "text-[var(--color-text)]"
                  }`}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-4">
          <button
            className="md:hidden 
            p-2 rounded 
            hover:bg-[var(--color-surface-hover)] 
            active:border-2 
            border-[var(--color-surface-active)] 
            transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <ul
          className="
      md:hidden flex flex-col 
      bg-[var(--color-bg)] 
      px-4 py-4 space-y-4 font-inter 
      border-t border-[var(--color-surface-active)]
      transition-colors duration-200
    "
        >
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`
            block transition-all duration-200 
            hover:underline decoration-[var(--color-accent)]
            ${active === section.id ? "font-bold" : ""}
          `}
                onClick={() => setIsMenuOpen(false)}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
