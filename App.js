import { SafeAreaView } from 'react-native'
import React from 'react'
import RootStack from './src/navigation'


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <RootStack />

    </SafeAreaView>
  )
}

export default App