import React, { useMemo, useState } from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { dark, light } from '@/theme'
import { useThemeManager } from '@/state/global/hooks'

interface Props {
  children: React.ReactNode
}
const ThemeContext = React.createContext({
  isDark: true,
  toggleTheme: () => {},
})

const ThemeContextProvider: React.FC<Props> = ({ children }) => {
  const { isDark: isDarkByDefault } = useThemeManager()
  const [isDark, setIsDark] = useState(
    useMemo(() => {
      return isDarkByDefault
    }, [isDarkByDefault])
  )

  const toggleTheme = () => {
    setIsDark(prevState => {
      return !prevState
    })
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <SCThemeProvider theme={isDark ? dark : light}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }
