import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawerContent from './CustomDrawerContent'
import useTheme from '@/hooks/useTheme'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import { DrawerStackParamList } from './types'
import { Profile, Settings } from '@/screens'
import BottomTabs from '../bottom-tabs/BottomTabs'

const DrawerNav = createDrawerNavigator<DrawerStackParamList>()

const DrawerStack = () => {
  const { theme } = useTheme()
  return (
    <DrawerNav.Navigator
      initialRouteName="BottomTabs"
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerStyle: {
          width: widthPercentageToDP('65%'),
        },
        drawerActiveBackgroundColor: theme?.colors.accentLight,
        drawerActiveTintColor: theme?.colors.accentDark4,
      }}
      drawerContent={CustomDrawerContent}
    >
      <DrawerNav.Screen name="BottomTabs" component={BottomTabs} />
      <DrawerNav.Screen name="Profile" component={Profile} />
      <DrawerNav.Screen name="Settings" component={Settings} />
    </DrawerNav.Navigator>
  )
}

export default DrawerStack
