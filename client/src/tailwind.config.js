/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0d9488',        // Cool teal color
        secondary: '#64748b',      // Muted blue-gray
        background: '#f8fafc',     // Light gray background
        modalBackground: '#ffffff',// White modal background
        modalOverlay: 'rgba(0, 0, 0, 0.8)',
        textPrimary: '#1e293b',    // Dark text color
        textSecondary: '#475569',  // Secondary text color
      },
    },
  },
  plugins: [],
}
