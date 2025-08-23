export default function FormInput({
  label,
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  textarea = false,
  rows = 3,
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-1 text-sm font-medium text-[var(--color-surface)]"
      >
        {label}
      </label>

      {textarea ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          rows={rows}
          className="w-full px-4 py-3 
            rounded-lg border 
            border-gray-300 
            bg-transparent 
            text-[var(--color-text)]
            focus:outline-none 
            focus:ring-2 
            focus:ring-[var(--color-accent)]"
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-3 
            rounded-lg border 
            bg-transparent 
            focus:outline-none 
            focus:ring-2 
            focus:ring-[var(--color-accent)]
            text-[var(--color-text)]"
          placeholder={placeholder}
        />
      )}
    </div>
  );
}
