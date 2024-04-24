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
        background: "#F3F5F9",
        american_blue: "#353570",
        stargate: "#7878FA",
        exodus: "#6161D6",
        hera_blue: "#7474F2",
        lavender: "#9D62D9",
        orchid: "#00B1A7",
        peevish_red: "#FE2264",
        pink: "#D878FA",
        orange: "#F7931A",
        bar_blue: "#849DFF",
        lavender_blue: "#CCCFA",
        text1: "#232336",
        text2: "#424286",
        text3: "#D1D1D1",
        text4: "#FFFFFF",
      },
      dark: {},
    },
    spacing: {},
    fontSize: {},
    fontFamily: {},
    extend: {},
  },
  plugins: [],
};
export default config;
