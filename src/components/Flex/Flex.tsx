import { styled } from 'styled-components/native'

export const Row = styled.View<{ justify?: string; align?: string; wrap?: string }>`
  flex-direction: row;
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'center'};
`
export const Column = styled(Row)`
  flex-direction: column;
`
