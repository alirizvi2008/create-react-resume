import React, { Component } from 'react'
import Navbar from './components/Navbar'
import CssBaseline from './components/CssBaseline'
import Home from './pages/home/Home'
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
