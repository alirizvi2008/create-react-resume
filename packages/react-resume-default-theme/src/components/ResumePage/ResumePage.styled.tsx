import styled from '../../styled'
import { Container, Right, Left } from '../SplitContainer'

const ResumeContainer = styled('div')`
  display: flex;
  direction: row;
  height: 100%;
`

const ResumeLeft = styled(Left)``

const ResumeRight = styled(Right)`
  section {
    padding: 64px 0 0 16px;
    width: 75%;
    svg {
      height: 32px;
      position: absolute;
      left: 10%;
      margin-top: 32px;
    }
  }
`

export { ResumeContainer, ResumeRight as Right, ResumeLeft as Left }
