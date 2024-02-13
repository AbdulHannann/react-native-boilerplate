import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { AuthStackParamList } from './types'
import { Login } from '@/screens'

const Stack = createStackNavigator<AuthStackParamList>()

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default AuthStack
