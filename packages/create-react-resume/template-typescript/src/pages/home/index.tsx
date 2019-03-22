import * as React from 'react'
import { Route } from 'react-router'
import { useUIComponents } from '../../components/useUIComponents'
import homeData from './home-data'

const HomeRoute: React.FC = () => {
  const { HomePage } = useUIComponents()

  return <Route path="/skills" component={() => <HomePage {...homeData} />} />
}

export default HomeRoute
