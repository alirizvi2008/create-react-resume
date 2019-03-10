import styled from '../../styled'
import { Container, Left, Right } from '../SplitContainer'

const NavbarContainer = styled(Container)`
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 3;
  height: 40px;
`

const NavbarLeft = styled(Left)``

const NavbarRight = styled(Right)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    width: 100%;
    text-align: right;
    margin: 0;
    padding: 0;
    list-style-type: none;
    li {
      padding: 0 16px;
      display: inline-block;
    }
  }
`

export { NavbarContainer, NavbarLeft, NavbarRight }
