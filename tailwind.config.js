/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryLighter: '#e6f3ce',
        primaryLight:"#a7d652",
        primary: '#81C408',
        secondary: '#FFB524',
        grayLight: '#F4F6F8',
        grayDark: '#45595B',
        //  gray: #878787
        // light gray: #e0e0e0
        // #565656
        // #212121
      },
    },
  },
  plugins: [],
};

