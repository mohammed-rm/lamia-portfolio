import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-bg":
          "linear-gradient(to right, #3B2667, rgba(2,0,4,1) 91.1% )",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "image-bg": "url('../public/background.svg')",
      },
      rotate: {
        105: "105deg",
      },
      colors: {
        primary: "#7b5ed9",
        secondary: "#8ba928",
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("tailwind-scrollbar"),
    nextui({
      themes: {
        light: {
          colors: {
            background: "#FFFFFF",
            foreground: "#11181C",
            primary: {
              foreground: "#FFFFFF",
              DEFAULT: "#7b5ed9",
            },
            secondary: {
              DEFAULT: "#8ba928",
              foreground: "#7b5ed9",
            },
          },
        },
      },
    }),
  ],
};
