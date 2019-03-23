import { createGlobalStyle } from 'styled-components'

const CssBaseline = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  html, body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;

    height: 100%;
    > #root {
      height: 100%;
    }
  }
`

export default CssBaseline
