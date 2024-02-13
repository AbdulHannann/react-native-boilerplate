import { combineReducers, configureStore } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { persistReducer, persistStore } from 'redux-persist'

// Reducers
import global from './global/reducer'
import user from './user/reducer'

const PERSISTED_KEYS: string[] = ['global']

const persistConfig = {
  key: 'primary',
  whitelist: PERSISTED_KEYS,
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    global,
    user,
  })
)

let store: ReturnType<typeof makeStore>

function makeStore(preloadedState = undefined) {
  return configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ thunk: true, serializableCheck: false }),
    devTools: true,
    preloadedState,
  })
}

export const initializeStore = (preloadedState = undefined) => {
  let _store = store ?? makeStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = makeStore({
      ...store.getState(),
      //@ts-ignore
      ...preloadedState,
    })
    // Reset the current store'
    // @ts-ignore
    store = undefined
  }

  // Create the store once in the client
  if (!store) {
    store = _store
  }

  return _store
}

store = initializeStore()

/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
 */
export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch()

export default store

export const persistor = persistStore(store)

export function useStore(initialState = undefined) {
  return useMemo(() => initializeStore(initialState), [initialState])
}
