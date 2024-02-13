import React from 'react'
import Spinner from 'react-native-loading-spinner-overlay'
import useTheme from '../../hooks/useTheme'
import { Column } from '../Flex'

interface IProps {
  visible: boolean
}

const SpinnerOverlay: React.FC<IProps> = ({ visible }) => {
  const { theme } = useTheme()
  return (
    <Column>
      <Spinner visible={visible} size={'large'} overlayColor={`${theme!.colors.accentDark3}70`} />
    </Column>
  )
}

export default SpinnerOverlay
