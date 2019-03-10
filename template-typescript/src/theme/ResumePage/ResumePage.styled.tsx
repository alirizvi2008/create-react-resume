import styled from '../../styled'
import { Container, Right, Left } from '../SplitContainer'

const ResumeContainer = styled(Container)`
  position: relative;
  float: left;
  padding: 100px 0 0 0;
`

const ResumeLeft = styled(Left)``

const ResumeRight = styled(Right)``
export { ResumeContainer, ResumeRight as Right, ResumeLeft as Left }
