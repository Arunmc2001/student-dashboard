import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          0: "#07080b",
          1: "#0b0d13",
          2: "#0f1420"
        }
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(120,120,255,.25), 0 0 30px rgba(120,120,255,.12)"
      }
    }
  },
  plugins: []
} satisfies Config;

