/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          burgundy: "#800020",
          gold: "#FFD700",
          black: "#000000",
        },
        accent: {
          ivory: "#FFFFF0",
          roseGold: "#B76E79",
          softGrey: "#D3D3D3",
        },
      },
    },
  },
  plugins: [],
};
