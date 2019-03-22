import styled from '../../../styled'
import { Container, Right, Left } from '../SplitContainer'

const HomeContainer = styled(Container)`
  position: absolute;
  left: 0;
  top: 0;
  padding: 0;
  height: 100vh;

  h1 {
    margin: 0 16px;
    font-size: 100px;
    font-weight: 800;
  }

  h3 {
    margin: 16px 22px;
    font-size: 32px;
    font-weight: 700;
  }
  p {
    margin: 16px 22px;
    font-size: 18px;
    max-width: 75%;
    color: #f5f5f5;
  }
`

const RightCenterVertically = styled(Right)`
  display: flex;
  align-items: center;
  justify-content: left;
`

const LeftCenterVertically = styled(Left)`
  display: flex;
  align-items: center;
  justify-content: right;
  text-align: right;
  > div {
    width: 100%;
  }
  img {
    margin: 0 64px;
    width: 60%;
    border-radius: 50%;
  }
`
export { HomeContainer, RightCenterVertically as Right, LeftCenterVertically as Left }
