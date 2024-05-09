/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Make sure to target all your project's JavaScript and TypeScript files
    "./public/index.html"          // Include your HTML files if necessary
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#ccffcc',  // Example of adding a custom color
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out both',  // Existing custom animation
        fadeIn: 'fadeIn 0.8s ease-out both'       // New custom animation for fadeIn
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: 0,
            transform: 'translateY(20px)'  // Start the animation with element moved 20px down and faded out
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)'  // End the animation with the element in its normal position and fully visible
          }
        },
        fadeIn: {  // Define keyframes for fadeIn animation
          '0%': {
            opacity: 0
          },
          '100%': {
            opacity: 1
          }
        }
      }
    }
  },
  plugins: [],
}
