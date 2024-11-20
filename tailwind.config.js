/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-green": "#CCD965",
        "primary-dark-green": "#0F2935",
        "primary-light-green": "#A1C19C",
        "primary-fluffy-white": "#FFFFDA",
        "primary-light-black": "#303A30"
      },
      backgroundImage: {
        backgroundLanding: "url('/assets/images/Landing/backgroundLanding.png')",
      },
      fontFamily: {
        sans: ['"Nunito", sans-serif'],
      },
    },
  },
  plugins: [],
};
