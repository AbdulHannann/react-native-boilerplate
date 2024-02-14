import { StackNavigationProp } from '@react-navigation/stack'
import { DrawerStackParamList } from './drawer-stack/types'
import { SettingsRouteParams } from '@/screens/settings/types'
import { NavigationProp, ParamListBase } from '@react-navigation/native'

export const gotoDrawerFromAuth = (navigation: NavigationProp<ParamListBase>) => {
  navigation.reset({
    index: 0,
    routes: [{ name: 'DrawerStack' }],
  })
}

export const gotoSettingsFromProfile = (
  navigation: StackNavigationProp<DrawerStackParamList, 'Profile'>,
  params?: SettingsRouteParams
) => {
  navigation.navigate('Settings', params)
}
