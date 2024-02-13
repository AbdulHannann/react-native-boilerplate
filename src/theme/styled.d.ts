import 'styled-components'
import { ApplicationTheme } from './index'

declare module 'styled-components' {
  export interface DefaultTheme extends ApplicationTheme {}
}
