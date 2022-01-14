module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent-light": "#4dafff",
        "accent-dark": "#0075c8",
      },
      boxShadow: {
        'straight': '0px 0px 14px rgba(0, 0, 0, 0.25)',
      },
    },
    transitionDuration: {
      DEFAULT: '300ms'
    },
  },
  plugins: [],
}
