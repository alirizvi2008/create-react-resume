import * as React from 'react'
import { useUIComponents } from '../../UITemplates'

interface Props {
  email?: string
  linkedin?: string
  github?: string
  medium?: string
}

const Navigation: React.FunctionComponent<Props> = props => {
  const { children, ...rest } = props
  const { Navigation } = useUIComponents()

  return <Navigation {...rest}>{children}</Navigation>
}

export default Navigation
