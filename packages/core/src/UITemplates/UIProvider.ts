import * as React from 'react'

interface HomePageProps {
  profilePicUrl: string
  title: string
  subTitle: string
  descriptions: string[]
}

interface NavigationProps {
  email?: string
  linkedin?: string
  github?: string
  medium?: string
}

export interface ElementComponents {
  p: React.FC
}

export interface LayoutComponents {
  Navigation: React.FunctionComponent<NavigationProps>
  HomePage: React.FunctionComponent<HomePageProps>
  SkillsPage: React.FunctionComponent
  RolesPage: React.FunctionComponent
  Education: React.FunctionComponent
}

export interface UIContextComponents {
  layouts: LayoutComponents
  elements: ElementComponents
}

const UIContext = React.createContext<UIContextComponents>({} as UIContextComponents)

export { UIContext }
