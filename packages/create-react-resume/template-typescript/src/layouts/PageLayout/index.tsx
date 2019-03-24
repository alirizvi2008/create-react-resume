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
  font-size: 12px;

  @media (max-width: 768px) {
    font-size: 8px;
  }
  text-align: center;
  > div > div {
    padding: 4px;
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
