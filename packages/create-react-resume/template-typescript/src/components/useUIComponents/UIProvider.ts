import * as React from 'react'

interface HomePageProps {
  profilePicUrl: string
  title: string
  subTitle: string
  descriptions: string[]
}

interface NavigationProps {
  github?: string
}

export interface UIComponents {
  Navigation: React.FunctionComponent<NavigationProps>
  HomePage: React.FunctionComponent<HomePageProps>
  ResumePage: React.FunctionComponent
}

const UIContext = React.createContext<UIComponents>({} as UIComponents)

export { UIContext }
