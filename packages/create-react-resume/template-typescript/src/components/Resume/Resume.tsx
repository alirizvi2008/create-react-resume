import * as React from 'react'
import AsyncMdxComponent from '../AsyncMdxComponent'
import useUIComponents from '../useUIComponents'

const Resume: React.FunctionComponent = props => {
  const { ResumePage } = useUIComponents()
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
    <ResumePage>
      {exps.map((e: any, index: number) => {
        return <AsyncMdxComponent key={index} getView={e.getView} />
      })}
    </ResumePage>
  )
}

export default Resume
