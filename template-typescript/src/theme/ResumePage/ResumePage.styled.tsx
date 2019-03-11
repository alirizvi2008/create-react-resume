import styled from '../../styled'
import { Container, Right, Left } from '../SplitContainer'

const ResumeContainer = styled(Container)`
  position: relative;
  float: left;
  padding: 50px 0 0 0;
  min-height: 500px;
`

const ResumeLeft = styled(Left)``

const ResumeRight = styled(Right)``
export { ResumeContainer, ResumeRight as Right, ResumeLeft as Left }
