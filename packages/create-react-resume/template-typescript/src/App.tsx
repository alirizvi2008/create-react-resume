import React from 'react'
import { UITemplate, Navigation } from '@create-react-resume/core'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import * as Theme from './layouts'
import EducationRoute from './pages/education'
import SkillsRoute from './pages/skills'
import HomeRoute from './pages/home'
import RolesRoute from './pages/roles'
import * as LocalTheme from './elements'

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
            p: (props: any) => <LocalTheme.Paragraph {...props} />,
            h1: (props: any) => <LocalTheme.H1 {...props} />,
            h2: (props: any) => <LocalTheme.H2 {...props} />,
            h3: (props: any) => <LocalTheme.H3 {...props} />,
            h4: (props: any) => <LocalTheme.H4 {...props} />,
            h5: (props: any) => <LocalTheme.H5 {...props} />,
            h6: (props: any) => <LocalTheme.H6 {...props} />,
            a: (props: any) => <LocalTheme.Link {...props} />,
            blockquote: (props: any) => <LocalTheme.Blockquote {...props} />,
            hr: (props: any) => <LocalTheme.Hr {...props} />,
            inlineCode: (props: any) => <LocalTheme.InlineCode {...props} />,
            ol: (props: any) => <LocalTheme.OrderedList {...props} />,
            ul: (props: any) => <LocalTheme.UnorderedList {...props} />,
          }}
        >
          <Theme.CssBaseline />
          <Theme.Header>
            <Navigation
              email="mailto:mac.malkowski@gmail.com"
              github="https://github.com/matmalkowski"
              linkedin="https://www.linkedin.com/in/maciejmalkowski/"
            >
              <Link to="/">Home</Link>
              <Link to="/roles">Roles</Link>
              <Link to="/skills">Skills</Link>
              <Link to="/education">Education</Link>
            </Navigation>
          </Theme.Header>
          <Theme.Main>
            <HomeRoute />
            <RolesRoute />
            <SkillsRoute />
            <EducationRoute />
          </Theme.Main>
          <Theme.Footer>
            Made with ❤️ using <a href="https://github.com/matmalkowski/create-react-resume">Create React Resume 📄</a>
          </Theme.Footer>
        </UITemplate>
      </Router>
    </>
  )
}

export default App
