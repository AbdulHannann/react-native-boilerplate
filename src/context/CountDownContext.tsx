import React, { useState, useEffect, useCallback } from 'react'

const CountDownTime = 10

export const CountDownContext = React.createContext({
  count: 0,
  reset: () => {},
  stop: () => {},
})
const CountDownProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(CountDownTime)
  const [interval, setIntervalRun] = useState<NodeJS.Timeout>()

  const counter = useCallback(
    (run: boolean) => {
      if (run) {
        setCount(CountDownTime)
        let countValue = CountDownTime
        setIntervalRun(
          setInterval(() => {
            countValue = countValue - 1
            setCount(countValue)
          }, 1000)
        )
      } else {
        interval ? clearInterval(interval) : null
      }
    },
    [interval]
  )

  useEffect(() => {
    if (count <= 0) {
      clearInterval(interval)
      counter(true)
    }
  }, [count, counter, interval])

  const resetCounter = () => {
    counter(true)
  }

  const stopCounter = () => {
    counter(false)
  }

  return (
    <CountDownContext.Provider value={{ count: count, reset: resetCounter, stop: stopCounter }}>
      {children}
    </CountDownContext.Provider>
  )
}

export default CountDownProvider
