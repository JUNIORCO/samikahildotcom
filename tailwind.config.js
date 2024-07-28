/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Times New Roman",
    },
    extend: {
      fontFamily: {
        satisfy: ["Satisfy", "cursive"],
      },
    },
  },
  plugins: [],
};
