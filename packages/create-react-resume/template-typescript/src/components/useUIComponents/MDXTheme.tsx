import * as React from 'react'
import { MDXProvider } from '@mdx-js/tag'
import { UIContext } from './UIProvider'

const MDXTheme: React.FC = props => {
  const { children } = props
  const { elements } = React.useContext(UIContext)
  return <MDXProvider components={elements}>{children}</MDXProvider>
}

export default MDXTheme
