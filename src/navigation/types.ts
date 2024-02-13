import { DrawerStackParamList } from './drawer-stack/types'
import { AuthStackParamList } from './auth-stack/types'

export type RootStackParamList = {
  AuthStack: AuthStackParamList
  DrawerStack: DrawerStackParamList
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
