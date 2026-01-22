import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        copper: {
          50: "hsl(30, 60%, 95%)",
          100: "hsl(30, 55%, 90%)",
          200: "hsl(28, 60%, 80%)",
          300: "hsl(26, 65%, 70%)",
          400: "hsl(25, 70%, 55%)",
          500: "hsl(25, 70%, 45%)",
          600: "hsl(24, 70%, 38%)",
          700: "hsl(22, 70%, 30%)",
          800: "hsl(20, 65%, 22%)",
          900: "hsl(18, 60%, 15%)",
        },
        bronze: {
          50: "hsl(35, 50%, 95%)",
          100: "hsl(35, 50%, 88%)",
          200: "hsl(35, 55%, 75%)",
          300: "hsl(35, 60%, 65%)",
          400: "hsl(35, 60%, 55%)",
          500: "hsl(34, 55%, 45%)",
          600: "hsl(32, 50%, 38%)",
          700: "hsl(30, 50%, 30%)",
          800: "hsl(28, 45%, 22%)",
          900: "hsl(25, 40%, 15%)",
        },
        industrial: {
          50: "hsl(20, 10%, 95%)",
          100: "hsl(20, 12%, 88%)",
          200: "hsl(20, 12%, 75%)",
          300: "hsl(20, 12%, 55%)",
          400: "hsl(20, 15%, 40%)",
          500: "hsl(20, 18%, 28%)",
          600: "hsl(20, 20%, 20%)",
          700: "hsl(20, 22%, 15%)",
          800: "hsl(20, 25%, 10%)",
          900: "hsl(20, 30%, 6%)",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 2s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
