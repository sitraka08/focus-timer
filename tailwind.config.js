/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    fontFamily: {
      flight: ["light"],
      fbold: ["bold"],
    },
    colors: {
      one: "#204078",
      two: "#FD6968",
      three: "#6879E2",
      four: "#2D3F52",
    },
  },
  plugins: [],
};
