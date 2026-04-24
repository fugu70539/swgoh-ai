import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        apple: {
          bg: "#f5f5f7",
          card: "rgba(255, 255, 255, 0.72)",
          border: "rgba(0, 0, 0, 0.1)"
        }
      },
      backdropBlur: {
        saturate: "180%"
      }
    },
  },
  plugins: [],
};
export default config;
