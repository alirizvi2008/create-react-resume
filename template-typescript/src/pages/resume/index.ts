import importAll from 'import-all.macro'
import sortBy from 'lodash/sortBy'
import * as React from 'react'

const experiencesModules = importAll.deferred('./**/experience.ts')
const importExperience = (pathname: string) => experiencesModules[pathname]()
const expPathnamses = Object.keys(experiencesModules)

const experiences = expPathnamses.map(async (pathname: string) => {
  const { default: experience } = await importExperience(pathname)
  return {
    title: experience.title,
    getView: async () => {
      let { default: MDXComponent, ...other } = await experience.getContent()
      return { MDXComponent, ...other }
    },
  }
})

// we will order here by dates
// const experiences = sortBy(experiencesModules, "startDate").reverse();

export default experiences
