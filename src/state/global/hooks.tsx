import { useCallback, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../index'
import { toggleTheme as toggleThemeAction, setLocale as setLocaleAction } from './actions'
import { ThemeContext } from '@/context'

export function useThemeManager() {
  const dispatch = useDispatch<AppDispatch>()
  const isDark = useSelector<AppState, AppState['global']['isDark']>(state => state.global.isDark)
  const { toggleTheme: toggleThemeForContext } = useContext(ThemeContext)

  const toggleTheme = useCallback(() => {
    toggleThemeForContext()
    dispatch(toggleThemeAction())
  }, [dispatch, toggleThemeForContext])

  return { isDark, toggleTheme }
}

export function useLocaleManager(): [string, (selectedLocale: string) => void] {
  const dispatch = useDispatch<AppDispatch>()
  const locale = useSelector<AppState, AppState['global']['locale']>(state => state.global.locale)

  const setLocale = useCallback(
    (selectedLocale: string) => {
      dispatch(setLocaleAction(selectedLocale))
    },
    [dispatch]
  )

  return [locale, setLocale]
}
