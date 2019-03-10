import * as React from 'react'
import { UIContext, UIComponents } from './UIProvider'

interface Props extends UIComponents {}

const UITemplate: React.FunctionComponent<Props> = props => {
  const { children, ...uiTemplate } = props
  return <UIContext.Provider value={uiTemplate}>{children}</UIContext.Provider>
}

export default UITemplate
