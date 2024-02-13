import React, { ReactNode, createContext, useEffect, useState } from 'react'
import NetInfo, { NetInfoState } from '@react-native-community/netinfo'

export const Network = createContext({
  isConnected: false,
})

const NetworkContext = ({ children }: { children: ReactNode }) => {
  const [isConnected, setConnected] = useState(false)

  useEffect(() => {
    const subscription = NetInfo.addEventListener((state: NetInfoState) => {
      setConnected(state.isConnected || state.isInternetReachable || false)
    })
    return () => {
      subscription
    }
  }, [])

  return (
    <Network.Provider
      value={{
        isConnected: isConnected,
      }}
    >
      {children}
    </Network.Provider>
  )
}

export default NetworkContext
