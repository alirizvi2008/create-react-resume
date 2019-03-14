import styled from '../styled'

const Container = styled('div')`
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Left = styled('div')`
  width: 30%;
  height: 100%;
  color: #673ab7;
`

const Right = styled('div')`
  width: 70%;
  background: rgb(103, 58, 183);
  background: linear-gradient(90deg, rgba(103, 58, 183, 1) 0%, rgba(126, 87, 194, 1) 100%);
  height: 100%;
  color: white;
`

export { Container, Left, Right }
