import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#f97316",
          pink: "#ec4899",
          violet: "#8b5cf6",
        },
      },
      backgroundImage: {
        // Single source of truth for the brand gradient.
        // Reused for: brand name, hero highlight text, primary buttons.
        brand: "linear-gradient(90deg, #f97316 0%, #ec4899 50%, #8b5cf6 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
