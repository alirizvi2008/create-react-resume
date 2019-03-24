import * as React from 'react'
import styled from 'styled-components'
import { Left, Right, SplitContainer } from '../SplitContainer'

const HeaderContainer = styled('header')`
  /* background-color: purple; */
  & > div {
    /* height: 100%; */
  }
`

const Header: React.FunctionComponent = props => {
  const { children } = props
  return (
    <HeaderContainer>
      <SplitContainer>
        <Left />
        <Right>{children}</Right>
      </SplitContainer>
    </HeaderContainer>
  )
}

const Main = styled('main')`
  flex: 1 1 0;
  /* background-color: darkgreen; */
`

const FooterContainer = styled('footer')`
  height: 50px;
  /* background-color: blue; */
  & > div {
    height: 100%;
  }
`

const Footer: React.FunctionComponent = props => {
  const { children } = props
  return (
    <FooterContainer>
      <SplitContainer>
        <Left>{children}</Left>
        <Right />
      </SplitContainer>
    </FooterContainer>
  )
}

export { Header, Main, Footer }
