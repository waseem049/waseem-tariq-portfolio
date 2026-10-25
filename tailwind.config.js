/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Font family uses CSS variable --font-sans
      // All colors, shadows, radius, animations, keyframes defined in CSS variables
      // Only keeping content paths and darkMode
    },
  },
  plugins: [require("tailwindcss-animate")],
}