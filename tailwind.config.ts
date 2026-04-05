import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF7043',
        tertiary: '#4CAF50',
        dark: {
          DEFAULT: '#1a0a0a',
          burgundy: '#2d0f0f',
          card: '#1e1414',
        },
        light: {
          peach: '#ffe8dd',
          pink: '#ffd4c4',
        },
        coral: {
          DEFAULT: '#FF7043',
          light: '#ff9070',
          dark: '#f34f1f',
        },
      },
      fontFamily: {
        headline: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['Be Vietnam Pro', 'sans-serif'],
      },
      borderRadius: {
        'pill': '9999px',
      },
    },
  },
  plugins: [],
}
export default config
