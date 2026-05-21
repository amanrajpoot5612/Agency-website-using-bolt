/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0a0e14',
          900: '#0f1419',
          800: '#141b25',
          700: '#1a2233',
        },
        cyan: {
          400: '#00d9ff',
          500: '#00b8d4',
          600: '#0099b0',
        },
        slate: {
          50: '#f0f4f8',
          200: '#c8d6e5',
          400: '#8fa3b8',
          500: '#647c93',
        },
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
