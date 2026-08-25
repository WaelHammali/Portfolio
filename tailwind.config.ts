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
        primary: "#94b8d4",
        cyan: {
          50:  "#e8f0f7",
          100: "#d1e1ef",
          200: "#b4cce3",
          300: "#94b8d4",
          400: "#7b8fa8",
          500: "#5e7389",
          600: "#4a5d6e",
          700: "#3d4a5c",
          800: "#2d3748",
          900: "#1e2633",
        },
        "background-dark": "#0d0f14",
        "background-darker": "#080a0e",
        "navy-deep": "#12141c",
        "slate-custom": "#0d0f14",
        blue: {
          50:  "#e8f0f7",
          100: "#d1e1ef",
          200: "#b4cce3",
          300: "#94b8d4",
          400: "#7b8fa8",
          500: "#5e7389",
          600: "#4a5d6e",
          700: "#3d4a5c",
          800: "#2d3748",
          900: "#1e2633",
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
            a: { color: theme("colors.slate.600"), textDecoration: "none" },
            "h1,h2,h3,h4": { color: theme("colors.gray.900"), fontFamily: "var(--font-syne)" },
            code: { color: theme("colors.slate.700"), background: theme("colors.slate.50"), padding: "2px 6px", borderRadius: "4px" },
            "code::before": { content: '""' },
            "code::after":  { content: '""' },
          },
        },
        invert: {
          css: {
            color: theme("colors.gray.300"),
            a: { color: "#94b8d4" },
            "h1,h2,h3,h4": { color: theme("colors.white") },
            code: { color: "#94b8d4", background: "rgba(123,143,168,0.1)" },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
