import * as React from 'react'
import { HomeContainer, Left, Right } from './Home.styled'

interface Props {
  profilePicUrl: string
  title: string
  subTitle: string
  descriptions: string[]
}

const Home: React.FunctionComponent<Props> = props => {
  const { profilePicUrl, title, subTitle, descriptions } = props
  return (
    <HomeContainer>
      <Left>
        <div>
          <img src={profilePicUrl} />
        </div>
      </Left>
      <Right>
        <div>
          <h1>{title}</h1>
          <h3>{subTitle}</h3>
          {descriptions.map((d, i) => (
            <p key={i}>{d}</p>
          ))}
        </div>
      </Right>
    </HomeContainer>
  )
}

export default Home
