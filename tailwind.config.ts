import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Хватает всё: app, views, components
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          bg: "#ffffff",
          secondary: "#f0f3f8",
          border: "#e5e9f0",
        }
      },
    },
  },
  plugins: [],
};
export default config;
