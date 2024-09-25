/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    // first-party typescript types
    // memungkinkan kita untuk bisa memasukkan utility tailwind didalam confignya
    extend: {
      colors: {
        royal: "royalblue",
        salmon: "salmon",
        default: "rgb(var(--warna-default) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
