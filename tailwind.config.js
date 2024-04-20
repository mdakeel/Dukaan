/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1e28320d',
        'secondary': '#000435',
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

