module.exports = {
  content: ["./src/**/*.{html,js}"],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {},
    container: {
      padding: '2.7rem',
    },
    fontFamily: {
      lora: ["'Lora', sans-serif", 'sans-serif'],
      asap: ["'Asap', sans-serif", 'serif'],
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
