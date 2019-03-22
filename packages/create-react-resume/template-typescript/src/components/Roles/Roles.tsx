import * as React from 'react'
import AsyncMdxComponent from '../AsyncMdxComponent'
import { useUIComponents } from '../useUIComponents'

const Roles: React.FunctionComponent = props => {
  const { RolesPage } = useUIComponents()
  const [exps, setExps] = React.useState<any>([])
  const loadExperience = async () => {
    const { default: experiences } = await import('./loader')
    Promise.all(experiences).then(e => {
      setExps(e)
    })
  }

  React.useEffect(() => {
    loadExperience()
  }, [])

  return (
    <RolesPage>
      {exps.map((e: any, index: number) => {
        return <AsyncMdxComponent key={index} getView={e.getView} />
      })}
    </RolesPage>
  )
}

export default Roles
