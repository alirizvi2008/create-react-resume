import * as React from 'react'
import AsyncMdxComponent from '../../components/AsyncMdxComponent'

const Resume: React.FunctionComponent = props => {
  const [exps, setExps] = React.useState<any>([])
  const loadExperience = async () => {
    const { default: experiences } = await import('./index')
    Promise.all(experiences).then(e => {
      setExps(e)
    })
  }

  React.useEffect(() => {
    loadExperience()
  }, [])

  return (
    <div>
      {exps.map((e: any, index: number) => {
        return <AsyncMdxComponent key={index} getView={e.getView} />
      })}
    </div>
  )
}

export default Resume
