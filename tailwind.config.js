/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'garnet': '#D72631',
        'darkPlum': '#121212',
        'goldTan': '#F2C94C',
        'gold': '#FFDD57',
        'warmGray': '#1E1E1E',
        'ivory': '#F8F4EC',
        'lightIvory': '#E0DDD7',
        'brightGarnet': '#E5383B',
        'cardBg': '#252525',
        'cardBgHover': '#2C2C2C',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Roboto', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'gold-glow': '0 0 15px rgba(242, 201, 76, 0.3)',
        'garnet-glow': '0 0 15px rgba(215, 38, 49, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-subtle': 'linear-gradient(to bottom, rgba(18, 18, 18, 0.99), rgba(30, 30, 30, 0.94))',
      },
    },
  },
  plugins: [],
}
