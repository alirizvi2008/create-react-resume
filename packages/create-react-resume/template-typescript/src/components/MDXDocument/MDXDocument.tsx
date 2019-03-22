import * as React from 'react'
import importAll from 'import-all.macro'

interface Props {
  mdxDocumentPath: string
}

const MDXDocument: React.FunctionComponent<Props> = props => {
  const { mdxDocumentPath } = props
  const [module, setModule] = React.useState<any>(undefined)
  const loadModule = async () => {
    const modules = importAll.deferred(mdxDocumentPath)
    const getModule = (pathname: string) => modules[pathname]()

    const { default: mdxModule } = await getModule(mdxDocumentPath)
    setModule(mdxModule)
  }

  React.useEffect(() => {
    loadModule()
  }, [])

  if (!module) return null
  const { default: MDXComponent, ...rest } = module

  return <MDXComponent {...rest} />
}

export default MDXDocument
