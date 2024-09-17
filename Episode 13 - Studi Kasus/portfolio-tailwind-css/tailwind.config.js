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
        secondary: "#64748b",
        dark: "#0f172a",
        light: "#cbd5e1",
      },
      fontFamily: {
        inter: 'Inter',
        montserrat: 'Montserrat',
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
