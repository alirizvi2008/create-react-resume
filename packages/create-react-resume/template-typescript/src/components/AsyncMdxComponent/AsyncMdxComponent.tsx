import * as React from 'react'

interface Props {
  getView: Promise<any>
}
const AsyncMdxComponent: React.FunctionComponent<Props> = props => {
  const { getView } = props
  const [view, setView] = React.useState<any>(undefined)
  const loadView = async () => {
    const getComponent = await getView
    console.log(getView)
    setView(await getComponent())
  }

  React.useEffect(() => {
    loadView()
  }, [])

  if (!view) return null

  const { MDXComponent, ...rest } = view

  return <MDXComponent {...rest} />
}

export default AsyncMdxComponent
