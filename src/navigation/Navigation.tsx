import { createStackNavigator } from '@react-navigation/stack'

import React, { useEffect } from 'react'
import { RootStackParamList } from './types'
import { NavigationContainer } from '@react-navigation/native'
import { isReadyRef, navigationRef } from 'react-navigation-helpers'
import Drawer from './drawer-stack'
import AuthStack from './auth-stack/AuthStack'

const RootStack = createStackNavigator<RootStackParamList>()

const Navigation = () => {
  // Removing Navigation Ref on unmount
  // @ts-ignore
  useEffect(() => {
    return () => (isReadyRef.current = false)
  }, [])

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true
      }}
    >
      <RootStack.Navigator
        initialRouteName="AuthStack"
        screenOptions={{
          headerShown: false,
        }}
      >
        <RootStack.Screen name="AuthStack" component={AuthStack} />
        <RootStack.Screen name="DrawerStack" component={Drawer} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
