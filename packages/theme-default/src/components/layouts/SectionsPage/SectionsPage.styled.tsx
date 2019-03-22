import styled from '../../../styled'
import { Right, Left } from '../SplitContainer'

const SectionsContainer = styled('div')`
  display: flex;
  direction: row;
  height: 100%;
`

const SectionLeft = styled(Left)``

const SectionRight = styled(Right)`
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

export { SectionsContainer, SectionRight as Right, SectionLeft as Left }
