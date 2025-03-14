import React from 'react'
import './App.css'
import { BeagleProvider, BeagleRemoteView } from '@zup-it/beagle-react'
import BeagleService from './beagle/beagle-service'

function App() {
  return (
    <BeagleProvider value={BeagleService}>
      <BeagleRemoteView route={'/welcome'} />
    </BeagleProvider>
  )
}

export default App