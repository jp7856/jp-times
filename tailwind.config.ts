import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        headline: ["Noto Serif KR", "serif"],
        body: ["Noto Sans KR", "sans-serif"],
      },
      colors: {
        ink: {
          DEFAULT: "#1a1a1a",
          light: "#4a4a4a",
          muted: "#6b6b6b",
        },
        paper: {
          DEFAULT: "#faf9f6",
          warm: "#f5f0e8",
          cream: "#fefdfb",
        },
      },
    },
  },
  plugins: [],
};

export default config;
