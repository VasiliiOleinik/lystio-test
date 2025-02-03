import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purpleLystio: "#A540F3",
        greyLystio: "#4F4040",
        middleGreyLystio: "#787878",
        lightGreyLystio: "#C6C6C6"
      },
      borderRadius: {
        '1000px': '1000px',
      },
      boxShadow: {
        custom: "0px 14px 32px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
