/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#FFD700"; // Gold for light mode
const tintColorDark = "#800020"; // Deep Burgundy for dark mode

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#B76E79", // Rose Gold for light mode
    tabIconDefault: "#D3D3D3", // Soft Grey for light mode
    tabIconSelected: tintColorLight, // Gold
    primaryBurgundy: "#800020",
    primaryGold: "#FFD700",
    primaryBlack: "#000000",
    accentIvory: "#FFFFF0",
    accentRoseGold: "#B76E79",
    accentSoftGrey: "#D3D3D3",
  },
  dark: {
    text: "#ECEDEE",
    background: "#000",
    tint: tintColorDark,
    icon: "#FFFFF0", // Ivory for dark mode
    tabIconDefault: "#D3D3D3", // Soft Grey for dark mode
    tabIconSelected: tintColorDark, // Deep Burgundy
    primaryBurgundy: "#800020",
    primaryGold: "#FFD700",
    primaryBlack: "#000000",
    accentIvory: "#FFFFF0",
    accentRoseGold: "#B76E79",
    accentSoftGrey: "#D3D3D3",
  },
};
