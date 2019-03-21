import React from 'react'
import Home from './components/Home'
import Roles from './components/Roles'
import Navigation from './components/Navigation'
import { UITemplate } from './components/useUIComponents'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import * as Theme from '@create-react-resume/theme-default'
import Skills from './components/Skills'
import Education from './components/Education'

const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <UITemplate
          Navigation={Theme.Navbar}
          HomePage={Theme.HomePage}
          SkillsPage={Theme.SectionsPage}
          RolesPage={Theme.SectionsPage}
          Education={Theme.SectionsPage}
        >
          <Theme.CssBaseline />
          <Theme.Page>
            <Theme.Header>
              <Navigation
                email="mac.malkowski@gmail.com"
                github="https://github.com/matmalkowski"
                linkedin="https://www.linkedin.com/in/maciejmalkowski/"
              >
                <Link to="/">Home</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/roles">Roles</Link>
                <Link to="/education">Education</Link>
              </Navigation>
            </Theme.Header>
            <Theme.Main>
              <Route path="/" exact component={Home} />
              <Route path="/skills" component={Skills} />
              <Route path="/roles" component={Roles} />
              <Route path="/education" component={Education} />
            </Theme.Main>
            <Theme.Footer>
              Made with ❤️ using{' '}
              <a href="https://github.com/matmalkowski/create-react-resume">Create React Resume 📄</a>
            </Theme.Footer>
          </Theme.Page>
        </UITemplate>
      </Router>
    </>
  )
}

export default App
