import styled from '../styled'

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

const Footer = styled('footer')`
  flex: 0 1 40px;
`

export { Page, Header, Main, Footer }
