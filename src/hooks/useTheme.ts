import { useContext } from 'react'
import { useThemeManager } from '@/state/global/hooks'
import { ThemeContext as StyledThemeContext } from 'styled-components'

const useTheme = () => {
  const { isDark, toggleTheme } = useThemeManager()
  const theme = useContext(StyledThemeContext)
  return { isDark, theme, toggleTheme }
}
export default useTheme
