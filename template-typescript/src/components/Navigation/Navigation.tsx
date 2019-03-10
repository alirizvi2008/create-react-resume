import * as React from 'react'
import useUIComponents from '../useUIComponents'

const Navigation: React.FunctionComponent = props => {
  const { children } = props
  const { Navigation } = useUIComponents()

  return <Navigation>{children}</Navigation>
}

export default Navigation
