/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        normal: ["Inter"]
      },
      colors: {
        pickle : "#597D35",
        dm: "#2D2E2E"
    },
  },
  plugins: [],
  }
}