import theme from 'styled-theming'

export const mainBackgroundColor = theme('mode', {
  light: '#fff',
  dark: '#000',
})

export const mainFontColor = theme('mode', {
  light: '#000',
  dark: '#fff',
})
