import * as React from 'react'
import importAll from 'import-all.macro'
import { Route } from 'react-router'
import { useUIComponents, MDXThemeProvider, useMDXFiles } from '@create-react-resume/core'

const RolesRoute: React.FunctionComponent = () => {
  const { RolesPage } = useUIComponents()
  const mdxModules = useMDXFiles(importAll.deferred('./**/*.mdx'))
  return (
    <Route
      path="/roles"
      component={() => (
        <RolesPage>
          <MDXThemeProvider>
            {mdxModules.map((e: any, index: number) => {
              const { MDXComponent, ...other } = e
              return <MDXComponent {...other} key={index} />
            })}
          </MDXThemeProvider>
        </RolesPage>
      )}
    />
  )
}

export default RolesRoute
