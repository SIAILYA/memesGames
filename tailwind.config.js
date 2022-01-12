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
    },
    transitionDuration: {
      DEFAULT: '300ms'
    },
  },
  plugins: [],
}
