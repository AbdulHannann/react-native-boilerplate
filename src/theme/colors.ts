import { Colors } from './types'

export const baseColors = {
  primary: '#4DE0D9',
  secondary: '#FE8270',
  tertiary: '#FF73AA',
  info: '#B07A00',
  success: '#27AE60',
  warning: '#E2B93B',
  failure: '#FF4242',
  accentDark: '#191C24',
  accentDark2: '#111319',
  accentDark3: '#191C26',
  accentDark4: '#1E2230',
  accentLight: '#D0D3E5',
  accentLight2: '#EFF0F6',
  accentLight3: '#A6A3B8',
  accentLight4: '#363D4E',
  accentLight5: '#FAFAFA',
  accentLight6: '#B2B3C7',
  white: '#ffffff',
  black: '#000000',
  linearGradient: ['#FFD5CF', '#FE8270'],
  linearGradient2: ['#8DF3ED', '#34D9D1'],
  linearGradient3: ['#FAC47F', '#F8A946'],
  linearGradient4: ['#A7D7F2', '#4BC0FF'],
  linearGradient5: ['#FF9BD0', '#FF73AA'],
  linearGradient6: ['#C1B2FF', '#9B87FF'],
  linearGradient7: ['#FFE45E', '#FFD206'],
  linearGradient8: ['#67F1A9', '#0FCBA1'],
  linearGradient9: ['#CCE4E3', '#496D6C'],
}

export const lightColors: Colors = {
  ...baseColors,
  background: '#ffffff',
}

export const darkColors: Colors = {
  ...baseColors,
  background: '#191C26',
}
