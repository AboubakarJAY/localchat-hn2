// tailwind.config.js

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        InterBlack: ["Inter_18pt-Black", "sans-serif"],
        InterBlackItalic: ["Inter_18pt-BlackItalic", "sans-serif"],
        InterBold: ["Inter_18pt-Bold", "sans-serif"],
        InterBoldItalic: ["Inter_18pt-BoldItalic", "sans-serif"],
        InterExtraBold: ["Inter_18pt-ExtraBold", "sans-serif"],
        InterExtraBoldItalic: ["Inter_18pt-ExtraBoldItalic", "sans-serif"],
        InterExtraLight: ["Inter_18pt-ExtraLight", "sans-serif"],
        InterExtraLightItalic: ["Inter_18pt-ExtraLightItalic", "sans-serif"],
        InterItalic: ["Inter_18pt-Italic", "sans-serif"],
        InterLight: ["Inter_18pt-Light", "sans-serif"],
        InterLightItalic: ["Inter_18pt-LightItalic", "sans-serif"],
        InterMedium: ["Inter_18pt-Medium", "sans-serif"],
        InterMediumItalic: ["Inter_18pt-MediumItalic", "sans-serif"],
        InterRegular: ["Inter_18pt-Regular", "sans-serif"],
        InterSemiBold: ["Inter_18pt-SemiBold", "sans-serif"],
        InterSemiBoldItalic: ["Inter_18pt-SemiBoldItalic", "sans-serif"],
        InterThin: ["Inter_18pt-Thin", "sans-serif"],
        InterThinItalic: ["Inter_18pt-ThinItalic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
