import { ThunkAction } from 'redux-thunk'
import { UnknownAction } from '@reduxjs/toolkit'

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, State, unknown, UnknownAction>

// Global state

export interface State {}
