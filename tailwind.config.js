/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        typeScript: '#3178c6',
        nodeJs: '#689f63',
        js: '#f0dc4e',
        postgre: '#336791',
        react: '#61dbfb',
        mongo: '#00684a',
        html: '#e54c21',
        css: '#264de4',
        git: '#f05030',
        tailwind: '#07b0ce',
        bootstrap: '#8411f6',
        vite: '#ffcc24',
        sequel: '#3d75c2',
        mui: '#007fff',
      },
    },
  },
  plugins: [],
}
