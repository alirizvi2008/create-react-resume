import React, { Component } from 'react'
import Navbar from './theme/Navbar'
import CssBaseline from './components/CssBaseline'
import Home from './pages/home'
class App extends Component {
  render() {
    return (
      <>
        <CssBaseline />
        <div className="App">
          <Navbar />
          <Home />
        </div>
      </>
    )
  }
}

export default App
