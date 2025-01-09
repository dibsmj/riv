/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pagecomponent/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
    colors: {
      bluesHeading: '#005CA6',
      primaryBlue: '#4EACE9',
      primaryBlack: '#404040',
      secondaryBlack: '#575959',
      primaryBlueDark: '#255BA1',
      primaryBlueLight: '#E2F0FE',
      secondaryDarkOrange: '#CB4F23',
      secondaryLightOrange: '#FBEBD7',
      neutral100: '#E8E8E7',
      neutral200: '#C6C6C6',
      neutral300: '#676767',
      neutral400: '#343839',
      neutral500: '#031016',
      statusGreen: '#59BE79',
      statusRed: '#C02926',
      grayLight: '#8E8E8E',
      gray: '#5C5C5C',
      grayDark: '#1E1E1E',
      successGreen: '#2BB24C',
      primaryWhite: '#FFFFFF',
      backgroundGradient:
        'linear-gradient(360deg, #102d52 0%, #2166bf 115.07%)',
      shadow: 'rgba(191, 191, 191, 0.50)',
      transparent: 'transparent',
    },
    screens: {
      xs: '350px',

      sm: '600px',

      ssm: '750px',

      md: '900px',

      lg: '1200px',

      xl: '1536px',

      tablet: '640px',

      laptop: '1024px',

      desktop: '1280px',
    },
  },
  plugins: [require('tailwindcss-animated')],
};
