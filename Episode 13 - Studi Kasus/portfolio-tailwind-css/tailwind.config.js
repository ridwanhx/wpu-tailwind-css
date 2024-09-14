/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./resources/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#F7A92D",
        secondary: "#182B1B",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
