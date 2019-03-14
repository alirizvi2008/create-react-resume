import styled from '../styled'
import { Container, Right, Left } from '../SplitContainer'

const ResumeContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  position: relative;
  float: left;
  padding: 50px 0 0 0;
`

const ResumeLeft = styled(Left)`
  flex: 0 1 auto;
`

const ResumeRight = styled(Right)`
  flex: 0 1 auto;
`
export { ResumeContainer, ResumeRight as Right, ResumeLeft as Left }
