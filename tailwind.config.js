/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#131619',
        green: '#24AE7C',
      },
      fontFamily: {
        pry: 'var(--JetBrainsMono)',
      }
    },
  },
  plugins: [],
}

