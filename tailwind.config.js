/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}", // all React files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
      },
      font: {
        body: "var(--font-body)",
        heading: "var(--font-heading)",
        raleway: "var(--font-raleway)"
      }
    },
  },
  plugins: [],
}
