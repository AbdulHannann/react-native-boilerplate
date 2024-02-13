import { createReducer } from '@reduxjs/toolkit'
import { setToken, setUser } from './actions'
import { UserState } from './types'

export const initialState: UserState = {
  user: null,
  token: null,
}

export default createReducer(initialState, builder =>
  builder
    .addCase(setUser, (state, { payload }) => {
      return {
        ...state,
        user: payload,
      }
    })
    .addCase(setToken, (state, { payload }) => {
      return {
        ...state,
        token: payload,
      }
    })
)
