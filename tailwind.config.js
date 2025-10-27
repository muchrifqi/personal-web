/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./**/*.html", "./src/**/*.{js,html}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(1rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.7s ease-out forwards",
        "spin-slow": "spin 3s linear infinite",
      },
      keyframes: {
        goyang: {
          "0%, 100%": { transform: "rotate (-3deg)" },
          "50%": { transform: "rotate (3deg" },
        },
      },
    },
  },
  plugins: [],
};
