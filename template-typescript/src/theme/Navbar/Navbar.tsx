import * as React from 'react'
import { NavbarContainer, NavbarLeft, NavbarRight } from './Navbar.styled'

const Navbar: React.FunctionComponent = props => {
  return (
    <NavbarContainer as="nav">
      <NavbarLeft />
      <NavbarRight>
        <ul>
          <li>Home</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
      </NavbarRight>
    </NavbarContainer>
  )
}

export default Navbar
