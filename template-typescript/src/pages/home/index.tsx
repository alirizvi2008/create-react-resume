import * as React from 'react'
import Home from '../../theme/HomePage'
import homeData from './home-data'

const HomePage: React.FunctionComponent = () => {
  return <Home {...homeData} />
}

export default HomePage
