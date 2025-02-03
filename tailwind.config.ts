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
        lightGreyLystio: "#787878",
      },
      borderRadius: {
        '1000px': '1000px',
      },
    },
  },
  plugins: [],
} satisfies Config;
