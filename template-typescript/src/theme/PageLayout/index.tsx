import styled from '../styled'

const Page = styled('div')`
  display: flex;
  flex-flow: column;
  height: 100%;

  header {
    flex: 0 1 auto;
    background-color: blue;
  }
  main {
    flex: 1 1 auto;
    background-color: red;
  }
  footer {
    flex: 0 1 40px;
    background-color: green;
  }
`

export default Page
