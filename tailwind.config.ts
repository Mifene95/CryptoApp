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
      dark: {
        black_howl: "#1E1932",
        background: "#13121A",
        exodus: "#6161D6",
        cold_steel: "#232336",
        stargate: "#7878FA",
        dark_knight: "#191932",
        hera_blue: "#7474F2",
        lavender: "#9D62D9",
        orange: "#C27721",
        peevish_red: "#FE2264",
        boubble: "#01F1E3",
        green: "#30E0A1",
        raichu: "#F5AC37",
        banana: "#F3EB2F",
        denim: "#638FFE",
        neon: "#4DEEE5",
        opulent: "#F06142",
        serenity: "#5082CF",
        miami: "#F7931A",
        coarse: "#191925",
        text1: "#FFFFFF",
        text2: "#D1D1D1",
      },
    },
    fontFamily: {
      font1: ["Space Grotesk", "sans-serif"],
      font2: ["Inter", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
export default config;
