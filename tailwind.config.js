module.exports = {
  content: ["./src/**/*.{html,js}"],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {},
    container: {
      padding: '4rem',
    },
  },
  plugins: [
  	require('tailwindcss-textshadow'),
  	require('tailwind-scrollbar')
  ],
  variants: {
        scrollbar: ['rounded','dark']
    }
}
