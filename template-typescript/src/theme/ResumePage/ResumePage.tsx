import * as React from 'react'

import { ResumeContainer, Left, Right } from './ResumePage.styled'

const ResumePage: React.FunctionComponent = props => {
  return (
    <ResumeContainer>
      <Left>left</Left>
      <Right>right</Right>
    </ResumeContainer>
  )
}

export default ResumePage
