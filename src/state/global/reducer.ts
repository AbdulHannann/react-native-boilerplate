import { createReducer } from '@reduxjs/toolkit'
import { updateVersion, toggleTheme, setLocale } from './actions'

const currentTimestamp = () => new Date().getTime()

export interface GlobalState {
  // the timestamp of the last updateVersion action
  lastUpdateVersionTimestamp: number
  isDark: boolean
  locale: string
}

export const initialState: GlobalState = {
  lastUpdateVersionTimestamp: currentTimestamp(),
  isDark: true,
  locale: 'en-US',
}

export default createReducer(initialState, builder =>
  builder
    .addCase(setLocale, (state, { payload }) => {
      state.locale = payload
    })
    .addCase(updateVersion, state => {
      // noinspection SuspiciousTypeOfGuard
      state.lastUpdateVersionTimestamp = currentTimestamp()
    })
    .addCase(toggleTheme, state => {
      state.isDark = !state.isDark
    })
)
