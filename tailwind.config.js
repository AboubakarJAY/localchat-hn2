// tailwind.config.js

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        InterBlack: ["Inter-Black", "sans-serif"],
        InterBlackItalic: ["Inter-BlackItalic", "sans-serif"],
        InterBold: ["Inter-Bold", "sans-serif"],
        InterBoldItalic: ["Inter-BoldItalic", "sans-serif"],
        InterExtraBold: ["Inter-ExtraBold", "sans-serif"],
        InterExtraBoldItalic: ["Inter-ExtraBoldItalic", "sans-serif"],
        InterExtraLight: ["Inter-ExtraLight", "sans-serif"],
        InterExtraLightItalic: ["Inter-ExtraLightItalic", "sans-serif"],
        InterItalic: ["Inter-Italic", "sans-serif"],
        InterLight: ["Inter-Light", "sans-serif"],
        InterLightItalic: ["Inter-LightItalic", "sans-serif"],
        InterMedium: ["Inter-Medium", "sans-serif"],
        InterMediumItalic: ["Inter-MediumItalic", "sans-serif"],
        InterRegular: ["Inter-Regular", "sans-serif"],
        InterSemiBold: ["Inter-SemiBold", "sans-serif"],
        InterSemiBoldItalic: ["Inter-SemiBoldItalic", "sans-serif"],
        InterThin: ["Inter-Thin", "sans-serif"],
        InterThinItalic: ["Inter-ThinItalic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
