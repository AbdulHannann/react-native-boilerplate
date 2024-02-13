import { createAction } from '@reduxjs/toolkit'
import { IUser } from './types'

export const setUser = createAction<IUser | null>('user/setUser')
export const setToken = createAction<string | null>('user/setToken')
