import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
  './src/**/*.{js,ts,jsx,tsx,mdx}',
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
],
  theme: {
    extend: {
      colors: {
        navy:   '#0F2255',
        navylt: '#1A3A6A',
        orange: '#E85400',
        orlt:   '#FFF4EE',
        mint:   '#F0F7F0',
        grey:   '#F5F6FA',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
