import * as React from 'react'
import { UIContext } from './UIProvider'

const useUIComponents = () => {
  return React.useContext(UIContext)
}

export default useUIComponents
