module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-red": "#5F1F20",
        "light-white": "rgba(255,255,255,0.17)",
      },
    },
  },
  plugins: [],
}
