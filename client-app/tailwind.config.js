/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins : "Poppins",
        Fasthand: "Fasthand"
      },
      animation: {
        'typing' : 'typing 4s infinite',
      },
      keyframes: {
        typing: {
          '100%': { left: '100%' },
        },
      }
    },
  },
  plugins: [],
}
