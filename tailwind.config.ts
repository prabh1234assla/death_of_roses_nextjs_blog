import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        white: {
          DEFAULT: '#ffffff',
          "grade-1": '#FFE4EE',
          "grade-2": '#EEDCDC'
        },
        primary: '#242582',
        secondary: {
          100: '#D9D9D9',
          200: '#AE93C1',
          300: '#DFC5DD',
          400: '#99738E',
          500: '#997383',
          600: '#916EAB',
          700: '#70499A',
          800: '#553D67',
          900: '#5D1B62',
          1000: '#D567A4',
          1100: '#CA4475',
          1200: '#E42088',
          1300: '#881F63',
          1400: '#D35F9F',
          1500: '#DE8DBA',
          1600: '#FF7D92',
          1700: '#F56695'
        },
        tertiary: {
          100: '#EBB8D4',
          200: '#E6A7CA',
          300: '#E3A3C7',
          400: '#F08BB9',
          500: '#FDADB8',
          600: '#FCC2E2',
          700: '#FEA6B4',
          800: '#FFB4AB',
          900: '#E97D95',
          1000: '#FF8080',
          1100: '#F64C72',
          1200: '#CC1577',
          1300: '#613861',
          1400: '#881F63'
        }
      },
      fontFamily: {
        serif_sbi : 'source-serif-pro-SemiboldIt',
        serif_li : 'source-serif-pro-LightIt',
        serif_bi : 'source-serif-pro-BoldIt',
        serif_eli : 'source-serif-pro-ExtraLightIt',
        serif_i : 'source-serif-pro-It',
        serif_regular : 'source-serif-pro-Regular',
        oswald : 'var(--font-oswald)',
        sunflower_sans : 'mother-sunflower-sans',
        flower_power : 'flower-power-font'
      }
    },
  },
  plugins: [],
}
export default config
