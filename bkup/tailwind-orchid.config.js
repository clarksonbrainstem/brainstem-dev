/** @type {import('tailwindcss').Config} */
export default {
  content: ["./_src/*.{html,js}", "*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          fontFamily: {
            'sans': ['Lato', 'ui-sans-serif', 'system-ui'],
          },
          "primary": "#290241", 
          "secondary": "#591781", 
          "accent": "#218569", 
          "neutral": "#28282A", 
          "base-100": "#F1EBF5", 
          "info": "#008989",
          "success": "#3DAD24",
          "warning": "#C6B903",
          "error": "#B51550",

          "--rounded-box": ".3rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "1.9rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "2px", // border width of buttons
          "--tab-border": "2px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui"), require("@tailwindcss/forms")],
}