/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'glitch': 'glitch 0.3s infinite',
        'glitch-1': 'glitch1 0.6s infinite',
        'glitch-2': 'glitch2 0.8s infinite',
        'fade-in-up': 'fadeInUp 1s ease-out 0.5s both',
        'neon-glow': 'neonGlow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        glitch1: {
          '0%, 100%': { transform: 'translate(0)', opacity: '0.7' },
          '10%': { transform: 'translate(-5px, -2px)', opacity: '0.8' },
          '20%': { transform: 'translate(-10px, 2px)', opacity: '0.6' },
          '30%': { transform: 'translate(10px, -2px)', opacity: '0.9' },
          '40%': { transform: 'translate(-2px, 4px)', opacity: '0.5' },
          '50%': { transform: 'translate(8px, 2px)', opacity: '0.8' },
        },
        glitch2: {
          '0%, 100%': { transform: 'translate(0)', opacity: '0.6' },
          '15%': { transform: 'translate(3px, -3px)', opacity: '0.7' },
          '25%': { transform: 'translate(-3px, 3px)', opacity: '0.5' },
          '35%': { transform: 'translate(5px, 1px)', opacity: '0.8' },
          '45%': { transform: 'translate(-1px, -4px)', opacity: '0.6' },
          '55%': { transform: 'translate(-6px, 2px)', opacity: '0.9' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        neonGlow: {
          '0%': { textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #f59e0b, 0 0 20px #f59e0b' },
          '100%': { textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #f59e0b, 0 0 40px #f59e0b' },
        },
      },
    },
  },
  plugins: [],
};