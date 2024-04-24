import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",

  theme: {
    colors: {
      light: {
        blue: "#1fb6ff",
        text: "black"
      },
      dark:{
        orange: "#ff7849",
        text: "white"
      },
    },
    spacing: {},
    fontSize: {},
    fontFamily: {},
    extend: {},
  },
  plugins: [],
};
export default config;
