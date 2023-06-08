/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sanford: ["Libre Baskerville"],
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        ownChocoGray: "#9E7D5F",
        ownChocoGrayLight: "#E1D5C8",
        ownChocoGrayMedium: "#C5B5A6",
        ownTextBrown: "#3A302C",
      },
    },
  },
  plugins: [],
};
