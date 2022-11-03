/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "real-blue": "#5135FF",
        "real-black": "#222222",
        "real-gray": "#525252",
        "light-gray": "#CFCFCF",
        "dark-white": "#F6F6F6",
        "hard-black": "#1C1C1C",
        "soft-gray": "#F9F9F9",
        "dark-gray": "#3F3F3F",
        "text-gray": "#666666",
      },
      boxShadow: {
        shadow1: "inset 0 0 0 2px #ffffff",
        shadow2: "rgb(255 255 255) 0px 0px 0px 148px inset",
        shadow3: "inset 0 0 0 24px #5135FF",
      },
      backgroundImage: {
        header: "url('/images/noise.png')",
      },
      fontFamily: {
        sans: "font-regular",
        "font-bold": "font-bold",
        "font-semibold": "font-semiBold",
      },
      padding: {
        "1/124": "124px",
        "1/80": "80px",
        "1/20": "20px",
        "1/22": "22px",
        "1/184": "184px",
      },

      lineHeight: {
        "1/26": "26px",
        "1/30": "30px",
        "1/56": "56px",
        "1/30": "30px",
        "1/20": "20px",
        "1/58": "58px",
        "1/105": "105px",
      },

      width: {
        "1/352": "352px",
        "1/143": "143.51px",
        "1/160": "160px",
        "1/46": "46px",
        "1/100": "100%",
        "1/285": "285px",
        "1/158": "158.71px",
      },
      minWidth: {
        "1/352": "352px",
        "1/500": "500px",
      },
      height: {
        "1/72": "72px",
        "1/20": "20px",
        "1/46": "46px",
      },
      fontSize: {
        "1/40": "40px",
        "1/32": "32px",
        "1/400": "400px",
        "1/20": "20px",
        "1/80": "80px",
      },
      gap: {
        "1/10": "10px",
      },
    },
  },
  plugins: [],
};
