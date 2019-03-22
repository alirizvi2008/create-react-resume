import React from 'react'
import { UITemplate, Navigation } from '@create-react-resume/core'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import * as Theme from '@create-react-resume/theme-default'
import EducationRoute from './pages/education'
import SkillsRoute from './pages/skills'
import HomeRoute from './pages/home'
import RolesRoute from './pages/roles'

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
            h1: (props: any) => <Theme.H1 {...props} />,
            h2: (props: any) => <Theme.H2 {...props} />,
            h3: (props: any) => <Theme.H3 {...props} />,
            h4: (props: any) => <Theme.H4 {...props} />,
            h5: (props: any) => <Theme.H5 {...props} />,
            h6: (props: any) => <Theme.H6 {...props} />,
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
              <RolesRoute />
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
