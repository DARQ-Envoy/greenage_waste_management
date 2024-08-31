/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens:{     
        sm: "460px",
        md: "768px",
        mdm:"850px",
        lg: "976px",
        xl: "1440px"
      },
      colors:{
        theme: "#00ff00",
        themeLight: "rgba(0, 255, 0, 0.3)",
        orangeTheme: "#ffbb00",
        darkGreen: "#007700",
        veryDarkGreen: "#065606",
        
      },
      // backgroundImage:{
      //   "problem-bg-pattern": "url('/')"
      // }
    },
  },
  plugins: [],
}

