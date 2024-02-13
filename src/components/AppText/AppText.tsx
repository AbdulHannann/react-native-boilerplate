import styled, { css } from 'styled-components/native'
import { space, typography, color } from 'styled-system'
import { TextProps, Variant, variants } from './types'
import { DefaultTheme } from 'styled-components/dist/types'

const variantStyles = (theme: DefaultTheme, variant: Variant = variants.TITLE) =>
  ({
    [variants.TITLE]: css`
      color: ${theme.colors.accentDark};
      font-size: ${theme.fonts.xl4};
      font-family: ${theme.fonts.primaryBold};
      font-weight: ${theme.fonts.bold};
    `,
    [variants.SUBTITLE]: css`
      color: ${theme.colors.accentDark};
      font-size: ${theme.fonts.xl2};
      font-family: ${theme.fonts.primaryMedium};
      font-weight: ${theme.fonts.medium};
    `,
    [variants.B1]: css`
      color: ${theme.colors.accentDark};
      font-size: ${theme.fonts.lg};
      font-family: ${theme.fonts.primaryRegular};
      font-weight: ${theme.fonts.regular};
    `,
    [variants.B2]: css`
      color: ${theme.colors.accentDark};
      font-size: ${theme.fonts.md};
      font-family: ${theme.fonts.primaryRegular};
      font-weight: ${theme.fonts.regular};
    `,
    [variants.C1]: css`
      color: ${theme.colors.accentLight};
      font-size: ${theme.fonts.md};
      font-family: ${theme.fonts.primaryRegular};
      font-weight: ${theme.fonts.regular};
    `,
    [variants.C2]: css`
      color: ${theme.colors.accentLight};
      font-size: ${theme.fonts.sm};
      font-family: ${theme.fonts.primaryRegular};
      font-weight: ${theme.fonts.regular};
    `,
  }[variant])

const Text = styled.Text<TextProps>`
  text-transform: ${({ textTransform }) => textTransform || 'none'};
  ${({ theme, variant }) => variantStyles(theme as DefaultTheme, variant)}
  ${space}
  ${typography}
  ${color}
`

Text.defaultProps = {
  variant: variants.B1,
}

export default Text
