/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
      fontFamily: {
        OpenSansBold: ["OpenSans-Bold"],
        OpenSansBoldItalic: ["OpenSans-BoldItalic"],
        OpenSansExtraBold: ["OpenSans-ExtraBold"],
        OpenSansExtraBoldItalic: ["OpenSans-ExtraBoldItalic"],
        OpenSansItalic: ["OpenSans-Italic"],
        OpenSansLight: ["OpenSans-Light"],
        OpenSansLightItalic: ["OpenSans-LightItalic"],
        OpenSansMedium: ["OpenSans-Medium"],
        OpenSansMediumItalic: ["OpenSans-MediumItalic"],
        OpenSansRegular: ["OpenSans-Regular"],
        OpenSansSemiBold: ["OpenSans-SemiBold"],
        OpenSansSemiBoldItalic: ["OpenSans-SemiBoldItalic"],
        CaveatRegular: ["Caveat-Regular"],
        CaveatMedium: ["Caveat-Medium"],
        CaveatSemiBold: ["Caveat-SemiBold"],
        CaveatBold: ["Caveat-Bold"],
      },
    },
  },
  plugins: [],
};
