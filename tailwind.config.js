/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

const colors = {
  simeon: { // https://tailwind.simeongriggs.dev/green/00A960
    green: {
      '50': '#DBFFF0',
      '100': '#B3FFDE',
      '200': '#00FF91',
      '300': '#00E682',
      '400': '#00C771',
      '500': '#00A960',
      '600': '#009957',
      '700': '#00854B',
      '800': '#007040',
      '900': '#00522E',
    },
  },
  shades: {
    jade: { // https://www.tailwindshades.com/#color=154.0828402366864%2C100%2C33.13725490196078&step-up=13&step-down=7&hue-shift=0&name=jade&base-stop=5&overrides=e30%3D
      DEFAULT: '#00A960',
      '50': '#D4FFED',
      '100': '#B3FFDE',
      '200': '#71FFC2',
      '300': '#2FFFA5',
      '400': '#00EB86',
      '500': '#00A960',
      '600': '#00854C',
      '700': '#006237',
      '800': '#003E23',
      '900': '#001A0F',
    },
  },
  ink: { // https://tailwind.ink?p=10.eef5f3cef0ed95e8d659d0ab1eb37b15995113843c1366310f46270b2b1ff4f7fad9f0f8ade2f178c4dd40a2c32f82a9286890224f70193650102136f5f8fadef0fbb8def788beeb5799db4376cb385bb72d4494202e6a131d44f6f9fbe4f0fcc6daf99db7ef7690e35e6cd84d50c73c3ca42a2977181a4bf8fafbeaf0fbd4d7f8b1b2ee9489e27b64d86548c64c36a33525751e1847fcfbfbf8eff5f2cfece3a4d4dd76b8cd52a0b337818b2a5f621d3e3a1322fdfcfafbf0edf7cfdbeda2b8e97290dc4f6fc535509d283b711c27461215fcfbf8faf0dcf5d6b7e7ac85dc7e57c75c36ab422485311c5d22153a150dfbfaf4f8efbef0dd84dab851bb8e2c9c6f167e560e61400d422c0b2c1b09faf9f3f7efbbece07ecfbe4ca29628807814665f0d4f470c36310b241e09
    emerald: {
      '50':  '#eef5f3',
      '100': '#cef0ed',
      '200': '#95e8d6',
      '300': '#59d0ab',
      '400': '#1eb37b',
      '500': '#159951',
      '600': '#13843c',
      '700': '#136631',
      '800': '#0f4627',
      '900': '#0b2b1f',
    },
    teal: {
      '50':  '#f4f7fa',
      '100': '#d9f0f8',
      '200': '#ade2f1',
      '300': '#78c4dd',
      '400': '#40a2c3',
      '500': '#2f82a9',
      '600': '#286890',
      '700': '#224f70',
      '800': '#193650',
      '900': '#102136',
    },
    navy: {
      '50':  '#f5f8fa',
      '100': '#def0fb',
      '200': '#b8def7',
      '300': '#88beeb',
      '400': '#5799db',
      '500': '#4376cb',
      '600': '#385bb7',
      '700': '#2d4494',
      '800': '#202e6a',
      '900': '#131d44',
    },
    blue: {
      '50':  '#f6f9fb',
      '100': '#e4f0fc',
      '200': '#c6daf9',
      '300': '#9db7ef',
      '400': '#7690e3',
      '500': '#5e6cd8',
      '600': '#4d50c7',
      '700': '#3c3ca4',
      '800': '#2a2977',
      '900': '#181a4b',
    },
    indigo: {
      '50':  '#f8fafb',
      '100': '#eaf0fb',
      '200': '#d4d7f8',
      '300': '#b1b2ee',
      '400': '#9489e2',
      '500': '#7b64d8',
      '600': '#6548c6',
      '700': '#4c36a3',
      '800': '#352575',
      '900': '#1e1847',
    },
    pink: {
      '50':  '#fcfbfb',
      '100': '#f8eff5',
      '200': '#f2cfec',
      '300': '#e3a4d4',
      '400': '#dd76b8',
      '500': '#cd52a0',
      '600': '#b33781',
      '700': '#8b2a5f',
      '800': '#621d3e',
      '900': '#3a1322',
    },
    cerise: {
      '50':  '#fdfcfa',
      '100': '#fbf0ed',
      '200': '#f7cfdb',
      '300': '#eda2b8',
      '400': '#e97290',
      '500': '#dc4f6f',
      '600': '#c53550',
      '700': '#9d283b',
      '800': '#711c27',
      '900': '#461215',
    },
    cocoa: {
      '50':  '#fcfbf8',
      '100': '#faf0dc',
      '200': '#f5d6b7',
      '300': '#e7ac85',
      '400': '#dc7e57',
      '500': '#c75c36',
      '600': '#ab4224',
      '700': '#85311c',
      '800': '#5d2215',
      '900': '#3a150d',
    },
    gold: {
      '50':  '#fbfaf4',
      '100': '#f8efbe',
      '200': '#f0dd84',
      '300': '#dab851',
      '400': '#bb8e2c',
      '500': '#9c6f16',
      '600': '#7e560e',
      '700': '#61400d',
      '800': '#422c0b',
      '900': '#2c1b09',
    },
    yellow: {
      '50':  '#faf9f3',
      '100': '#f7efbb',
      '200': '#ece07e',
      '300': '#cfbe4c',
      '400': '#a29628',
      '500': '#807814',
      '600': '#665f0d',
      '700': '#4f470c',
      '800': '#36310b',
      '900': '#241e09',
    },
  },
}

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: colors.ink.emerald,
      },
      fontFamily: {
        sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans],
        rounded: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
    },

    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@vicgutt/tailwindcss-debug'),
    require('tailwindcss-text-fill-stroke')
  ],
  content: [
    './content/*.md',
    './content/**/*.md',
  ],
}
