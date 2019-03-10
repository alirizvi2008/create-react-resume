import * as React from 'react'
import Experience from '../../components/Experience/Experience'
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
      {exps.map((e: any) => {
        return (
          <Experience key={e.title} title={e.title}>
            <AsyncMdxComponent getView={e.getView} />
          </Experience>
        )
      })}
    </div>
  )
}

export default Resume
