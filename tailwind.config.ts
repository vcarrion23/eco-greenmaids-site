import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // I removed "src/" from these lines so it finds your files!
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        eco: {
          50: '#F4FBF6',  // Very light background
          100: '#E6F7EB', // Light Mint
          300: '#A4D4AE', // Primary Pastel Green
          600: '#4A8C5C', // Darker Green for buttons
          800: '#2F4F3B', // Deep Green for text
          accent: '#F4E0A4', // Soft yellow accent
        }
      },
    },
  },
  plugins: [],
};
export default config;