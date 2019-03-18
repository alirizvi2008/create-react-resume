import React from 'react'
import CssBaseline from './theme/CssBaseline'
import Home from './components/HomePage/HomePage'
import Resume from './components/Resume'
import Navigation from './components/Navigation'
import { UITemplate } from './components/useUIComponents'
import Navbar from './theme/Navbar'
import HomePage from './theme/HomePage'
import ResumePage from './theme/ResumePage'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Page, Header, Footer, Main } from './theme/PageLayout'

const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <UITemplate Navigation={Navbar} HomePage={HomePage} ResumePage={ResumePage}>
          <CssBaseline />
          <Page>
            <Header>
              <Navigation github="https://github.com/matmalkowski">
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Header>
            <Main>
              <Route path="/" exact component={Home} />
              <Route path="/resume" component={Resume} />
            </Main>
            <Footer>
              Created with <a href="https://github.com/matmalkowski/create-react-resume">Create React Resume 📄</a>
            </Footer>
          </Page>
        </UITemplate>
      </Router>
    </>
  )
}

export default App
