import React, { useState, useEffect } from 'react'

const CountDownTime = 10

export const CountDownContext = React.createContext({
  count: 0,
  reset: () => {},
  stop: () => {},
})
const CountDownProvider = ({ children }: any) => {
  const [count, setCount] = useState(CountDownTime)
  const [interval, setIntervalRun] = useState<any>()
  const counter = (run: boolean) => {
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
  }
  useEffect(() => {
    if (count <= 0) {
      clearInterval(interval)
      counter(true)
    }
  }, [count])

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
