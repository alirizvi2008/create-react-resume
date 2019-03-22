import React from 'react'
import Roles from './components/Roles'
import Navigation from './components/Navigation'
import { UITemplate } from './components/useUIComponents'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import * as Theme from '@create-react-resume/theme-default'
import EducationRoute from './pages/education'
import SkillsRoute from './pages/skills'
import HomeRoute from './pages/home'

const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <UITemplate
          layouts={{
            Navigation: Theme.Navbar,
            HomePage: Theme.HomePage,
            SkillsPage: Theme.SectionsPage,
            RolesPage: Theme.SectionsPage,
            Education: Theme.SectionsPage,
          }}
          elements={{
            p: props => <p {...props} />,
          }}
        >
          <Theme.CssBaseline />
          <Theme.Page>
            <Theme.Header>
              <Navigation
                email="mailto:mac.malkowski@gmail.com"
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
              <HomeRoute />
              <SkillsRoute />
              <Route path="/roles" component={Roles} />
              <EducationRoute />
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
