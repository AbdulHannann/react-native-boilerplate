import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomStackParamList } from './types'
import { Home, Wallet } from '@/screens'
import { Icon } from '@/config'
import useTheme from '@/hooks/useTheme'
import { Animated } from 'react-native'

const Tab = createBottomTabNavigator<BottomStackParamList>()

const BottomTabs = () => {
  const { theme } = useTheme()
  const av = new Animated.Value(0)
  av.addListener(() => {
    return
  })
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      detachInactiveScreens={false}
      screenListeners={{
        focus: () => {
          Animated.timing(av, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }).start()
        },
      }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme?.colors.primary,
        tabBarInactiveTintColor: theme?.colors.accentLight4,
        tabBarLabelStyle: {
          fontFamily: theme?.fonts.primaryMedium,
          fontSize: +theme?.fonts.sm?.replace('px', '')!,
          // color: theme?.colors.accentDark,
        },
      }}
    >
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <Icon.HOME stroke={color} />,
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name={'Wallet'}
        component={Wallet}
        options={{
          tabBarIcon: ({ color }) => <Icon.WALLET stroke={color} />,
          tabBarLabel: 'Wallet',
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabs
