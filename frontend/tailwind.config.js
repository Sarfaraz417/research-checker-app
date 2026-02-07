/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"] ,
  theme: {
    extend: {
      colors: {
        night: {
          900: "#0b0e16",
          800: "#11152b",
          700: "#1b2040",
        },
        mint: {
          500: "#3be8b0",
          600: "#2dd4a0",
        },
        azure: {
          500: "#4cc3ff",
          600: "#26a6ff",
        },
      },
      boxShadow: {
        glow: "0 0 24px rgba(76, 195, 255, 0.35)",
      },
    },
  },
  plugins: [],
};
