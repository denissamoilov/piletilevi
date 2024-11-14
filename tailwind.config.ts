import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/ui/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      montserrat: ["var(--font-montserrat)"],
    },
    fontSize: {
      base: ["1rem", { lineHeight: "1.25rem" }], // 16px/20px
      sm: ["0.875rem", { lineHeight: "1rem" }], // 14px/16px
      h1: ["2.25rem", { lineHeight: "2.875rem" }], // 36px/46px
      h2: ["1.75rem", { lineHeight: "2rem" }], // 28px/32px
    },
    colors: {
      white: "#FFFFFF",
      primary: {
        "50": "#D6DFE5",
        "100": "#D6D2E1",
        "500": "#3C00E5",
        "900": "#19005F",
      },
      text: {
        base: "#1A1A1A",
        disabled: "#9A9A9A",
        muted: "#626262",
        active: "#19005F",
      },
      neutral: {
        "100": "#F5F5F7",
        "900": "#1A1A1A",
      },
      background: "var(--background)",
      foreground: "var(--foreground)",
    },
    boxShadow: {
      lg: "0 4px 20px #D6DFE5",
    },
    extend: {
      borderRadius: {
        DEFAULT: "0.375rem",
        sm: "0.25rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
