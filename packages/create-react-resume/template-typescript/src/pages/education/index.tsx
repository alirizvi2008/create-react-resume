import EducationMDX from './education.mdx'
import * as React from 'react'
import { Route } from 'react-router'
import useUIComponents from '../../components/useUIComponents'

const EducationRoute: React.FC = () => {
  const { Education } = useUIComponents()

  return (
    <Route
      path="/education"
      component={() => (
        <Education>
          <EducationMDX />
        </Education>
      )}
    />
  )
}

export default EducationRoute
