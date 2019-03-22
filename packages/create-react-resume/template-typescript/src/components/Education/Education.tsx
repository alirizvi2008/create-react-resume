import * as React from 'react'
import useUIComponents from '../useUIComponents'
import { MDXProvider } from '@mdx-js/tag'

const Education: React.FunctionComponent = props => {
  const { children } = props
  const { Education } = useUIComponents()
  const components = {
    p: (pr: any) => <h1 {...pr} />,
  }
  return (
    <Education>
      <MDXProvider components={components}>{children}</MDXProvider>
    </Education>
  )
}

export default Education
