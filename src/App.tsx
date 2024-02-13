import React from 'react'
import Providers from '@/Providers'
import 'react-native-gesture-handler'
import '@/config/translations/i18n'
import Navigation from '@/navigation'

const App = (): React.JSX.Element => {
  return (
    <Providers>
      <Navigation />
    </Providers>
  )
}

export default App
