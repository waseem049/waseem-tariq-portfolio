/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Tailwind v4: configuration primarily via CSS @theme block
  // This file is kept for backward compatibility
  theme: {
    extend: {},
  },
  plugins: [],
}