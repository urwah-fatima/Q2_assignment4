import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        recentPostColor: '#F4E2E2',
        recentPostContentColor: "#000000",
        bodyColor: '#FAF5F5',
        heroButtonPink: '#F98585',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        heebo: ['Heebo', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
