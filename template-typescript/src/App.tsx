import React, { Component } from 'react'
import CssBaseline from './components/CssBaseline'
import Home from './components/HomePage/HomePage'
import Navigation from './components/Navigation'
import { UITemplate } from './components/useUIComponents'
import Navbar from './theme/Navbar'
import HomePage from './theme/HomePage'

const App: React.FunctionComponent = () => {
  return (
    <>
      <CssBaseline />
      <UITemplate Navigation={Navbar} HomePage={HomePage}>
        <Navigation />
        <Home />
      </UITemplate>
    </>
  )
}

export default App
