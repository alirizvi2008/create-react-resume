import * as React from 'react'

interface HomePageProps {
  profilePicUrl: string
  title: string
  subTitle: string
  descriptions: string[]
}

export interface UIComponents {
  Navigation: React.FunctionComponent
  HomePage: React.FunctionComponent<HomePageProps>
}

const UIContext = React.createContext<UIComponents>({} as UIComponents)

export { UIContext }
