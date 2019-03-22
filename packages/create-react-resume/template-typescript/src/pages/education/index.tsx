import EducationMDX from './education.mdx'
import * as React from 'react'
import { Route } from 'react-router'
import { useUIComponents, MDXThemeProvider } from '../../components/useUIComponents'

const EducationRoute: React.FC = () => {
  const { Education } = useUIComponents()

  return (
    <Route
      path="/education"
      component={() => (
        <Education>
          <MDXThemeProvider>
            <EducationMDX />
          </MDXThemeProvider>
        </Education>
      )}
    />
  )
}

export default EducationRoute
