import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          bg: "#ffffff",
          secondary: "#f0f3f8",
        }
      },
    },
  },
  plugins: [],
};
export default config;
