/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'ping-bg': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'pulse-bg1': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-bg2': 'pulse 5s cubic-bezier(0.5, 0, 0.6, 1) infinite',
        'pulse-bg3': 'pulse 5s cubic-bezier(0.6, 0, 0.6, 1) infinite',
        'pulse-bg4': 'pulse 5s cubic-bezier(0.7, 0, 0.6, 1) infinite',
        'pulse-bg5': 'pulse 5s cubic-bezier(0.8, 0, 0.6, 1) infinite',
        'pulse-bg6': 'pulse 5s cubic-bezier(1, 0, 0.6, 1) infinite',
      },
      backgroundSize: {
        'size-custom': '3vmin 3vmin',
        'size-custom-mb': '6vmin 6vmin'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
