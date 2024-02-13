import React from 'react'
import { styled } from 'styled-components/native'
import { Icon } from '../../config'
import { widthPercentageToDP as WP } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'
import { Column } from '../Flex'
import { AppText } from '../AppText'
import useTheme from '@/hooks/useTheme'

interface IProps {
  title: string
  subtitle?: string
  hideBackButton?: boolean
  onPressBack?: () => void
}

const AppHeader: React.FC<IProps> = ({ title, subtitle, hideBackButton, onPressBack }: IProps) => {
  const navigation = useNavigation()
  const { theme } = useTheme()
  return (
    <SView>
      {!hideBackButton && (
        <SBackButton
          activeOpacity={0.9}
          onPress={() => {
            if (onPressBack) {
              onPressBack()
            } else if (navigation.canGoBack()) {
              navigation.goBack()
            }
          }}
        >
          <Icon.ARROW_LEFT fill={theme?.colors?.accentDark} />
        </SBackButton>
      )}
      <Column style={{ maxWidth: '60%' }}>
        <AppText variant="title" numberOfLines={1}>
          {title}
        </AppText>
        {subtitle && (
          <AppText variant="c2" numberOfLines={1} color="accentLight3">
            {subtitle}
          </AppText>
        )}
      </Column>
    </SView>
  )
}

const SView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-vertical: ${WP('5.3%')}px;
`

const SBackButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  position: absolute;
  left: ${WP('6%')}px;
`

export default AppHeader
