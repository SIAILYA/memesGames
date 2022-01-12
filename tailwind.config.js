module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "purplelight": "#BB4DFF",
        "purpledark": "#7C00C8",
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
