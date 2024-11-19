/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-green": "#CCD965",
        "primary-drk-green": "#0F2935",
        "primary-light-green": "#A1C19C",
        "primary-fluffy-white": "#FFFFDA",
      },
      backgroundImage: {
        backgroundLanding: "url('/assets/images/backgroundLanding.png')",
      },
      fontFamily: {
        sans: ['"Nunito", sans-serif'],
      },
    },
  },
  plugins: [],
};
