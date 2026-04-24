import type { Config } from "tailwindcss";

const config: Config = {
  // Проверь, чтобы эти пути точно соответствовали твоей структуре
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}", // Важно для твоей папки views!
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          bg: "#ffffff",
          secondary: "#f0f3f8", // Тот самый синеватый оттенок
          border: "#e5e9f0",
        }
      },
    },
  },
  plugins: [],
};
export default config;
