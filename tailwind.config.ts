import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens:{
        'ultrawide-md': '1900px',
        'ultrawide-lg': '2600px',
        'ultrawide-xl': '3200px'
      },
      colors: {
        primary: '#150050',
        'primary-active': '#1e0a57',
        secondary: '#ffe377',
        'background-main': '#f4f4f4',
        twitter: '#55acee',
        facebook: '#3b5998',
        linkedin: '#0976b4',
        'p-secondary': '#9d9d9d',
        'p-main': '#404040',
        'p-el': '#787878',
        'p-inactive': '#777777',
        'f-banner-1': '#004050',
        'f-banner-2': '#ffe377',
        'f-banner-3': '#00cc61',
        'f-text': '#b8c9ce',

      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config;
