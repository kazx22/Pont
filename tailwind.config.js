/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "summer-org": "#E38C1A",
        "green-700": "#2A823D",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        lora: ["Lora", "serif"],
        patrick: ["Patrick Hand", "cursive"],
        popins: ["Poppins", "sans-serif"],
        mon: ["Montserrat", "sans-serif"],
      },
      translate: {
        "neg-full": "-100%",
      },
    },
  },
  plugins: [],
};
