import React from 'react'
import CssBaseline from './components/CssBaseline'
import Home from './components/HomePage/HomePage'
import Navigation from './components/Navigation'
import { UITemplate } from './components/useUIComponents'
import Navbar from './theme/Navbar'
import HomePage from './theme/HomePage'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <UITemplate Navigation={Navbar} HomePage={HomePage}>
          <CssBaseline />
          <Navigation github="https://github.com/matmalkowski">
            <Link to="/">Home</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
          <Route path="/" exact component={Home} />
        </UITemplate>
      </Router>
    </>
  )
}

export default App
