module.exports = {
  content: ["./*.{html,js}"],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontFamily: {
      lora: ["'Lora', sans-serif", 'sans-serif'],
      asap: ["'Asap', sans-serif", 'serif'],
    },
  },
  plugins: [
  	require('tailwindcss-textshadow'),
  	require('tailwind-scrollbar')
  ]
}
