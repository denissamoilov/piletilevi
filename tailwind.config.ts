import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/ui/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    textStyles: {
      base: {
        fontSize: "1rem", // 16px
        lineHeight: "1.25rem", // 20px
      },
      sm: {
        fontSize: "0.875rem", // 14px
        lineHeight: "1rem", // 16px
      },
      h1: {
        fontFamily: "var(--font-montserrat)",
        fontSize: "2.25rem", // 36px
        lineHeight: "2.875rem", // 46px
      },
      h2: {
        fontSize: "1.75rem", // 28px
        lineHeight: "2rem", // 32px
      },
    },
    colors: {
      white: "#FFFFFF",
      primary: {
        900: "#19005F",
        500: "#3C00E5",
        100: "#D6D2E1",
      },
      text: {
        base: "#1A1A1A", // Default text color
        disabled: "#9A9A9A", // Disabled text color
        muted: "#626262", // Muted text color
        active: "#19005F", // Active text color
      },
      neutral: {
        100: "#F5F5F7",
        900: "#1A1A1A",
      },
      background: "var(--background)",
      foreground: "var(--foreground)",
    },
    boxShadow: {
      lg: "0 4px 20px #D6DFE5", // Add your custom shadow here
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
