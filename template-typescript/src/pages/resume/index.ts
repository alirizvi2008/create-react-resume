import importAll from 'import-all.macro'

const experiencesModules = importAll.deferred('./**/experience.ts')
const importExperience = (pathname: string) => experiencesModules[pathname]()
const expPathnamses = Object.keys(experiencesModules)

const experiences = expPathnamses.map(async (pathname: string) => {
  const { default: experience } = await importExperience(pathname)
  return {
    getView: async () => {
      let { default: MDXComponent, ...other } = await experience.getContent()
      return { MDXComponent, ...other }
    },
  }
})

export default experiences
