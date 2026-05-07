import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-space)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex)", "monospace"],
        display: ["var(--font-space)", "sans-serif"],
      },
      colors: {
        primary: "#ffd700",
        cyan: {
          50:  "#e0f7ff",
          100: "#b3ecff",
          200: "#80e0ff",
          300: "#4dd4ff",
          400: "#00d9ff",
          500: "#00c4e8",
          600: "#0099cc",
          700: "#0077aa",
          800: "#005588",
          900: "#003366",
        },
        "background-dark": "#0a1f22",
        "background-darker": "#051419",
        "navy-deep": "#0d2a2d",
        "slate-custom": "#0a1f22",
        blue: {
          50:  "#fffacd",
          100: "#ffed4e",
          200: "#ffe680",
          300: "#ffd700",
          400: "#ffb700",
          500: "#ffa500",
          600: "#ff9500",
          700: "#ff8500",
          800: "#ff7500",
          900: "#cc5500",
        },
      },
      animation: {
        "fade-up":    "fadeUp 0.6s ease forwards",
        "fade-in":    "fadeIn 0.4s ease forwards",
        "slide-left": "slideLeft 0.5s ease forwards",
        "blink":      "blink 1s step-end infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideLeft: {
          "0%":   { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0" },
        },
      },
      typography: (theme: (path: string) => string) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.700"),
            a: { color: theme("colors.teal.600"), textDecoration: "none" },
            "h1,h2,h3,h4": { color: theme("colors.gray.900"), fontFamily: "var(--font-syne)" },
            code: { color: theme("colors.teal.700"), background: theme("colors.teal.50"), padding: "2px 6px", borderRadius: "4px" },
            "code::before": { content: '""' },
            "code::after":  { content: '""' },
          },
        },
        invert: {
          css: {
            color: theme("colors.gray.300"),
            a: { color: theme("colors.teal.400") },
            "h1,h2,h3,h4": { color: theme("colors.white") },
            code: { color: theme("colors.teal.300"), background: "rgba(10,124,110,0.15)" },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
