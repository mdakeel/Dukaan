/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      fontFamily: {
        primary: 'Poppins',
      },

      container: {
        padding: {
          DEFAULT: '30px',
          lg: '0'
        }
      },

      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1440',
      },

      extend: {
      colors: {
        'primary': '#222222',
        'secondary': '#F5E6E0',
        'tartiary': '',
      },
      boxShadow: {
        '3xl': '0px 10px 50px 0px rgba(0, 0, 0, 0.15)',
        'xl': '0px 4px 8px 0px rgba(0, 0, 0, 0.1)',

      }
    },
  },
  plugins: [],
}

