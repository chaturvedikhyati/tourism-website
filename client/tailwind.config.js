/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terracotta: {
          50: '#FDF7F5',
          100: '#FBF0EC',
          200: '#F6DDD4',
          300: '#EEBAAA',
          400: '#E2907A',
          500: '#C85A3D',
          600: '#A6422A',
          700: '#8B321D',
          800: '#732A1B',
          900: '#5C2217',
          950: '#38120B',
        },
        sandstone: {
          50: '#FAF7F2',
          100: '#F3EDE2',
          200: '#E6DCCE',
          300: '#D5C4AF',
          400: '#C1AA8E',
          500: '#AC9070',
          600: '#947557',
          700: '#775B43',
          800: '#5E4837',
          900: '#4B3B2E',
        },
        ochre: {
          500: '#C68B45',
          600: '#A77032',
          700: '#865723',
        },
        earth: {
          900: '#1F1815',
          800: '#2A221E',
          700: '#3D322C',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Merriweather', 'serif'],
        sans: ['Outfit', 'Inter', 'sans-serif'],
        hindi: ['Noto Sans Devanagari', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
