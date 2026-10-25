/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"',
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "sans-serif",
        ],
      },
      fontSize: {
        label: ["10px", { lineHeight: "1", letterSpacing: "0.1em" }],
        eyebrow: ["10px", { lineHeight: "1.5", letterSpacing: "0.1em" }],
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "14px",
        xl: "20px",
        "2xl": "28px",
        full: "9999px",
      },
      boxShadow: {
        xs: "0 1px 2px rgba(0,0,0,.06)",
        sm: "0 2px 8px rgba(0,0,0,.06), 0 1px 2px rgba(0,0,0,.04)",
        md: "0 8px 24px rgba(0,0,0,.07), 0 2px 6px rgba(0,0,0,.04)",
        lg: "0 20px 60px rgba(0,0,0,.09), 0 4px 12px rgba(0,0,0,.04)",
        accent: "0 8px 32px rgba(37, 99, 235, 0.16)",
      },
      animation: {
        "orb-float": "orb-float 8s ease-in-out infinite",
        "badge-in": "badge-in .6s ease-out both",
        "hero-title-in": "hero-title-in .7s ease-out both",
        pulse: "pulse 2s infinite",
      },
      keyframes: {
        "orb-float": {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-30px) scale(1.05)" },
        },
        "badge-in": {
          from: { opacity: "0", transform: "translateY(-10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "hero-title-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
