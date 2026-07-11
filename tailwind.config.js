import { activeTheme } from './theme.config.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          ...activeTheme.background,
        },
        cyan: {
          ...activeTheme.accent,
        },
        slate: {
          ...activeTheme.neutral,
        },
        gray: { ...activeTheme.neutral },
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
        display: ['"Cabinet Grotesk"', 'Sora', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
