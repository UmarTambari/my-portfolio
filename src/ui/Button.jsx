export default function Button({ children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="
        bg-[var(--color-accent)]
        text-[var(--color-bg)]
        font-[var(--font-body)]
        px-4 py-2.5
        rounded-xl
        shadow-md
        transition-colors duration-200
        hover:bg-[var(--color-accent-hover)]
        active:bg-[var(--color-accent-active)]
        focus:outline-none
        focus:ring-2
        focus:ring-[var(--color-accent-hover)]
        focus:ring-offset-2
      "
    >
      {children}
    </button>
  );
}
