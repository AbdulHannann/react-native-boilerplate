/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react'
import { RefreshContextProvider } from './context/RefreshContext'
import NetworkContext from '@/context/NetworkContext'
import CountDownProvider from '@/context/CountDownContext'
import { persistor, useStore } from '@/state'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeContextProvider } from '@/context/ThemeContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CustomSafeAreaView } from '@/components'

interface IProps {
  children: React.ReactNode
}

const Providers: React.FC<IProps> = ({ children }) => {
  const store = useStore()
  const queryClient = new QueryClient()

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NetworkContext>
          <CountDownProvider>
            <QueryClientProvider client={queryClient}>
              <RefreshContextProvider>
                <ThemeContextProvider>
                  <CustomSafeAreaView color={null}>{children}</CustomSafeAreaView>
                </ThemeContextProvider>
              </RefreshContextProvider>
            </QueryClientProvider>
          </CountDownProvider>
        </NetworkContext>
      </PersistGate>
    </Provider>
  )
}
export default Providers
