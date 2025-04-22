/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#00355d",
        secondary: "#e5fcff",
        dark: "#000000",
      },
    },
  },
  plugins: [],
};
