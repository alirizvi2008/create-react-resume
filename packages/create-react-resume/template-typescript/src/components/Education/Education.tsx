import * as React from 'react'
import useUIComponents from '../useUIComponents'
import MdxComponent from '../../pages/skills/skills.mdx'

const Education: React.FunctionComponent = () => {
  const { SkillsPage } = useUIComponents()

  return (
    <SkillsPage>
      <MdxComponent />
    </SkillsPage>
  )
}

export default Education
