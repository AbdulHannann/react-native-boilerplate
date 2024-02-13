import { SpaceProps, TypographyProps } from 'styled-system'

export const variants = {
  B1: 'b1',
  B2: 'b2',
  C1: 'c1',
  C2: 'c2',
  TITLE: 'title',
  SUBTITLE: 'subtitle',
} as const

export type Variant = (typeof variants)[keyof typeof variants]

export interface TextProps extends SpaceProps, TypographyProps {
  color?: string
  fontSize?: string
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize'
  variant?: Variant
}
