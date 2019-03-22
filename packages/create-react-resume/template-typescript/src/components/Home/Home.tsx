import * as React from 'react'
import homeData from '../../pages/home/home-data'
import { useUIComponents } from '../useUIComponents'

const Home: React.FunctionComponent = () => {
  const { HomePage } = useUIComponents()

  return <HomePage {...homeData} />
}

export default Home
