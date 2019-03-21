import * as React from 'react'
import useUIComponents from '../useUIComponents'
import importAll from 'import-all.macro'

const Education: React.FunctionComponent = () => {
  const path = '../../pages/education'

  const { SkillsPage } = useUIComponents()
  const [view, setView] = React.useState<any>()

  const importContent = async () => {
    const modules = importAll.deferred(path)
    const importModule = (pathname: string) => modules[pathname]()

    const { default: module } = await importModule(path)

    const { default: MDXComponent } = await module.getMdx()
    setView(MDXComponent)
  }

  React.useEffect(() => {
    importContent()
  }, [])

  if (!view) return null
  const { MdxDoc, ...rest } = view
  return (
    <SkillsPage>
      <MdxDoc {...rest} />
    </SkillsPage>
  )
}

export default Education
