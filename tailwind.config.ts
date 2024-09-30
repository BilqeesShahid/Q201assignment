import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       container:{
        center: true,
        padding:"15px"},
        color:{
          accent:"#E68369",
          myNavyBlue:"#021526",
        }
    },
  },
  plugins: [],
};
export default config;
