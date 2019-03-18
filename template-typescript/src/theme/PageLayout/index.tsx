import * as React from 'react'
import styled from '../styled'
import { Left, Right, Container } from '../SplitContainer'

const Page = styled('div')`
  display: flex;
  flex-flow: column;
  height: 100%;
`

const Header = styled('header')``

const Main = styled('main')`
  margin-top: 60px;
  flex: 1 1 auto;
`

const FooterContainer = styled(Container)`
  flex: 0 1 40px;
  text-align: center;
  color: #b39ddb;
  font-size: 12px;
  z-index: 1;
  a {
    color: #b39ddb;
  }
`

const Footer: React.FunctionComponent = props => {
  const { children } = props
  return (
    <FooterContainer as="footer">
      <Left>{children}</Left>
      <Right />
    </FooterContainer>
  )
}

export { Page, Header, Main, Footer }
