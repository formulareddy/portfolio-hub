import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--bg-primary))",
        "background-secondary": "rgb(var(--bg-secondary))",
        "background-tertiary": "rgb(var(--bg-tertiary))",
        foreground: "rgb(var(--text-primary))",
        "text-secondary": "rgb(var(--text-secondary))",
        "text-tertiary": "rgb(var(--text-tertiary))",
        accent: "rgb(var(--accent))",
        "accent-light": "rgb(var(--accent-light))",
        "accent-glow": "var(--accent-glow)",
        border: "rgb(var(--border))",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "slide-in": "slideIn 0.5s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        gradient: "gradientShift 8s ease infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        gradient: "linear-gradient(135deg, rgb(var(--accent)), rgb(var(--accent-light)), #ec4899)",
      },
      boxShadow: {
        glow: "0 0 40px -10px var(--accent-glow)",
        "glow-sm": "0 0 20px -5px var(--accent-glow)",
        "glow-lg": "0 0 60px -15px var(--accent-glow)",
      },
    },
  },
  plugins: [],
};
export default config;
