import styled from 'styled-components/native'
import { heightPercentageToDP as HP } from 'react-native-responsive-screen'

export const ImageView = styled.View<{ noBottomPadding?: boolean }>`
  align-items: center;
  padding-top: ${HP('6.3%')}px;
  padding-bottom: ${props => (props.noBottomPadding ? '0' : HP('6.3%'))}px;
`
