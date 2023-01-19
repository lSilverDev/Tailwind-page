/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        blue: {
          dark: '#150050',
        },
        black: {
          dark: '#000000',
        },
        purple: {
          dark: '#3F0071',
        },
        pink: {
          light: '#FB2576',
        },
      },
      fontFamily: {
          inter: ['Inter', 'sans-serif']    
      },
      keyframes: {
        ring_kf: {
            '0%, 100%': {
                transform: 'rotate(-10deg)'
            },
            '50%': {
                transform: 'rotate(10deg)'
            }
        }
      },
      animation: {
        ring: 'ring_kf 0.31s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
