import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        co: {
          bg: "#070709",
          surface: "#0D0D11",
          card: "#111116",
          "card-hover": "#16161C",
          border: "rgba(255,255,255,0.10)",
          "border-hover": "rgba(255,255,255,0.18)",
          "border-accent": "rgba(79,127,255,0.35)",
          text: "#FFFFFF",
          "text-secondary": "#A0A8BC",
          "text-muted": "#8891A4",
          accent: "#4F7FFF",
          "accent-light": "#7BA3FF",
          "accent-dim": "rgba(79,127,255,0.15)",
          "accent-glow": "rgba(79,127,255,0.08)",
          violet: "#9B72FF",
          "violet-dim": "rgba(155,114,255,0.12)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        "grid-pattern-sm":
          "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "60px 60px",
        "grid-sm": "30px 30px",
      },
      animation: {
        float: "float 9s ease-in-out infinite",
        "float-alt": "floatAlt 11s ease-in-out infinite 1.5s",
        "float-slow": "float 14s ease-in-out infinite 3s",
        "pulse-glow": "pulseGlow 5s ease-in-out infinite",
        "pulse-slow": "pulse 6s ease-in-out infinite",
        "gradient-x": "gradientX 8s ease infinite",
        "border-glow": "borderGlow 4s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-18px) rotate(1deg)" },
          "66%": { transform: "translateY(-8px) rotate(-0.5deg)" },
        },
        floatAlt: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(14px) rotate(-1.5deg)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.7" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        borderGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(79,127,255,0)" },
          "50%": { boxShadow: "0 0 30px rgba(79,127,255,0.2)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
        tight: "-0.02em",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      boxShadow: {
        "glow-sm": "0 0 15px rgba(79,127,255,0.15)",
        "glow-md": "0 0 30px rgba(79,127,255,0.2)",
        "glow-lg": "0 0 60px rgba(79,127,255,0.15)",
        "card-sm": "0 1px 3px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)",
        "card-md": "0 4px 24px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
