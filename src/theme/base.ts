import { Spacing, Fonts } from './types'
import { RFValue } from 'react-native-responsive-fontsize'

export const breakpointMap: { [key: string]: number } = {
  xs: 370,
  sm: 576,
  md: 852,
  lg: 968,
  xl: 1200,
}

export const shadows = {
  level1: '0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)',
  active: '0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)',
  success: '0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)',
  warning: '0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)',
  focus: '0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)',
  inset: 'inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)',
}

const spacing: Spacing = [
  '4px',
  '8px',
  '12px',
  '16px',
  '20px',
  '24px',
  '28px',
  '32px',
  '36px',
  '40px',
  '44px',
  '48px',
  '64px',
]

const radii = {
  small: '4px',
  default: '10px',
  card: '37px',
  circle: '50%',
}

const zIndices = {
  dropdown: 10,
  modal: 100,
}

const fonts: Fonts = {
  xs: `${RFValue(10)}px`,
  sm: `${RFValue(12)}px`,
  md: `${RFValue(14)}px`,
  lg: `${RFValue(18)}px`,
  xl: `${RFValue(24)}px`,
  xl2: `${RFValue(28)}px`,
  xl3: `${RFValue(32)}px`,
  xl4: `${RFValue(36)}px`,
  xl5: `${RFValue(42)}px`,
  primaryBlack: 'Roboto-Black',
  primaryBold: 'Roboto-Bold',
  primaryMedium: 'Roboto-Medium',
  primaryRegular: 'Roboto-Regular',
  secondary: 'Source Sans Pro',
  tertionary: 'Pacifico-Regular',
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
}

export default {
  spacing,
  shadows,
  radii,
  zIndices,
  fonts,
}
