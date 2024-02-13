import { Colors, Spacing, Shadows, Radii, ZIndices, Fonts } from './types'
import dark from './dark'

export interface ApplicationTheme {
  isDark: boolean
  colors: Colors
  spacing: Spacing
  shadows: Shadows
  radii: Radii
  fonts: Fonts
  zIndices: ZIndices
}

export { default as dark } from './dark'
export { default as light } from './light'

export { lightColors } from './colors'
export { darkColors } from './colors'

export const theme = dark
