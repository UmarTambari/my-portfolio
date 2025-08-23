import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function SocialLinks({
  heading = "You can also contact me at:",
}) {
  const links = [
    {
      name: "GitHub",
      href: "https://github.com/UmarTambari",
      icon: <FaGithub size={40} color="var(--color-text)" className="" />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/umar-farouq-ibrahim",
      icon: <FaLinkedin size={40} color="var(--color-text)" className="" />,
    },
    {
      name: "Twitter",
      href: "https://x.com/alpha__101",
      icon: <FaTwitter size={40} color="var(--color-text)" className="" />,
    },
    {
      name: "Facebook",
      href: "https://facebook.com/UmarmMubay",
      icon: <FaFacebook size={40} color="var(--color-text)" className="" />,
    },
    {
      name: "Email",
      href: "mailto:umarmubay360@gmail.com",
      icon: <MdEmail size={40} color="var(--color-text)" className="" />,
    },
  ];

  return (
    <div className="mt-12 text-center">
      {heading && (
        <h3 className="text-lg font-semibold text-[var(--color-text)] mb-4">
          {heading}
        </h3>
      )}
      <div className="flex flex-wrap justify-center gap-6">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[var(--color-accent)] transition"
          >
            {link.icon}
            <span className="text-[var(--color-text)]">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
