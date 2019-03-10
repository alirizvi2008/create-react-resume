import * as React from 'react'
import styled from '../../styled'
import { Container, Right, Left } from '../../components/SplitContainer'

const HomeContainer = styled(Container)`
  position: absolute;
  left: 0;
  top: 0;
  padding: 0;
  height: 100vh;
`

const CenterVertically = styled('div')`
  display: flex;
  align-items: center;
  vertical-align: center;
`

const Home: React.FunctionComponent = () => {
  return (
    <HomeContainer>
      <Left>foto</Left>
      <Right>
        <CenterVertically>Maciej Malkowski</CenterVertically>
      </Right>
    </HomeContainer>
  )
}

export default Home
