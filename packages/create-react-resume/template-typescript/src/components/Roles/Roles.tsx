import * as React from 'react'
import { useUIComponents } from '../useUIComponents'
import importAll from 'import-all.macro'

const rolesMDXs = importAll.deferred('../../pages/roles/**/*.mdx')
const importModule = (pathname: string) => rolesMDXs[pathname]()
const allPaths = Object.keys(rolesMDXs)

const loader = allPaths.map(async (pathname: string) => {
  const { default: MDXComponent, ...other } = await importModule(pathname)
  return { MDXComponent, ...other }
})

const Roles: React.FunctionComponent = () => {
  const { RolesPage } = useUIComponents()
  const [exps, setExps] = React.useState<any>([])
  const loadExperience = async () => {
    const modules = await loader
    Promise.all(modules).then(e => {
      setExps(e)
    })
  }

  React.useEffect(() => {
    loadExperience()
  }, [])

  return (
    <RolesPage>
      {exps.map((e: any, index: number) => {
        const { MDXComponent, ...other } = e
        return <MDXComponent {...other} key={index} />
      })}
    </RolesPage>
  )
}

export default Roles
