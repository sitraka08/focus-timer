/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
     fontFamily: {
        Regular: ["SpaceMono"],
    },
    colors:{
      primary: "#F1F8FE"
    }

  },
  plugins: [],
};
