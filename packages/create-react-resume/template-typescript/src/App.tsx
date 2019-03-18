import React from 'react'
import Home from './components/HomePage/HomePage'
import Resume from './components/Resume'
import Navigation from './components/Navigation'
import { UITemplate } from './components/useUIComponents'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import * as Theme from 'react-resume-default-theme'

const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <UITemplate Navigation={Theme.Navbar} HomePage={Theme.HomePage} ResumePage={Theme.ResumePage}>
          <Theme.CssBaseline />
          <Theme.Page>
            <Theme.Header>
              <Navigation github="https://github.com/matmalkowski">
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Theme.Header>
            <Theme.Main>
              <Route path="/" exact component={Home} />
              <Route path="/resume" component={Resume} />
            </Theme.Main>
            <Theme.Footer>
              Created with <a href="https://github.com/matmalkowski/create-react-resume">Create React Resume 📄</a>
            </Theme.Footer>
          </Theme.Page>
        </UITemplate>
      </Router>
    </>
  )
}

export default App
