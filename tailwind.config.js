/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        newGreen: "#04D361",
        darkGray: "#AEAEAE",
      },
    },
  },
  plugins: [],
};
