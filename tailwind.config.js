/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0f766e",
          dark: "#115e59",
          light: "#14b8a6"
        },
        accent: {
          yellow: "#facc15",
          orange: "#fb923c"
        }
      }
    }
  },
  plugins: []
};

