import React, { useState, useEffect, ReactNode } from 'react'

const FAST_INTERVAL = 15000
const SLOW_INTERVAL = 45000
// const SLOW_INTERVAL = 60 * 1.5 * 1000;

const RefreshContext = React.createContext({ slow: 0, fast: 0 })

// This context maintain 2 counters that can be used as a dependencies on other hooks to force a periodic refresh
const RefreshContextProvider = ({ children }: { children: ReactNode }) => {
  const [slow, setSlow] = useState(0)
  const [fast, setFast] = useState(0)
  // const [timerCount, setTimer] = useState(10)

  useEffect(() => {
    const interval = setInterval(async () => {
      setFast(prev => prev + 1)
    }, FAST_INTERVAL)
    return () => clearInterval(interval)
  })

  useEffect(() => {
    const interval = setInterval(async () => {
      setSlow(prev => prev + 1)
    }, SLOW_INTERVAL)
    return () => clearInterval(interval)
  }, [])

  return <RefreshContext.Provider value={{ slow, fast }}>{children}</RefreshContext.Provider>
}

export { RefreshContext, RefreshContextProvider }
