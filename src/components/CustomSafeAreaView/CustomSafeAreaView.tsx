import React, { ReactNode } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import PropTypes from 'prop-types'
import { StatusBar } from 'react-native'
import { styled } from 'styled-components/native'

const CustomSafeAreaView = ({ children, color }: { children: ReactNode; color?: string | null }) => {
  return (
    <SafeAreaProvider>
      <StyledSafeAreaView mode={'padding'} edges={['top', 'bottom']}>
        <StatusBar backgroundColor={color ? color : 'transparent'} barStyle="light-content" translucent={true} />
        {children}
      </StyledSafeAreaView>
    </SafeAreaProvider>
  )
}

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`

export default CustomSafeAreaView

CustomSafeAreaView.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element.isRequired]),
}
