import * as React from 'react'
import useUIComponents from '../useUIComponents'

interface Props {
  github?: string
}

const Navigation: React.FunctionComponent<Props> = props => {
  const { children, github } = props
  const { Navigation } = useUIComponents()

  return <Navigation github={github}>{children}</Navigation>
}

export default Navigation
