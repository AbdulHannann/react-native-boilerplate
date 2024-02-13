import { createAction } from '@reduxjs/toolkit'

// fired once when the app reloads but before the app renders
// allows any updates to be applied to store data loaded from localStorage
export const updateVersion = createAction<void>('global/updateVersion')

export const toggleTheme = createAction('global/toggleTheme')
export const setLocale = createAction<string>('global/locale')
