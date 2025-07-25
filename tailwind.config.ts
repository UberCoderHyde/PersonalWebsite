import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Enable toggling via a 'dark' class on <html>
  theme: {
    extend: {
      colors: {
        mint: "var(--color-mint-500)",
        olive: "var(--color-olive-500)",
        slate: "var(--color-slate-500)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      fontSize: {
        base: ["1rem", "1.5"], // 16px font, 24px line-height
        lg: ["1.125rem", "1.75"], // 18px font, 28px line-height
        xl: ["1.25rem", "1.75"], // 20px font, 28px line-height
        "2xl": ["1.5rem", "2"], // 24px font, 32px line-height
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-font-inter"), // Optional: adds advanced Inter features
  ],
};

export default config;
