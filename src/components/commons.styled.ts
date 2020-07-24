import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Lato', sans-serif;
    font-size: 20px;
  }

  .default-font{
    font-size: 20px;
  }
  .small-font{
    font-size: 15px;
  }
  .medium-font{
    font-size: 25px;
  }
  .large-font{
    font-size: 45px;
  }

  .title-font{
    font-weight: 600;
    font-size: 45px;
  }
  .title-medium-font{
    font-weight: 600;
    font-size: 38px;
  }
  .title-small-font{
    font-weight: 550;
    font-size: 22px;
  }
`

export const Body = styled.div`
  height: 100vh;
`


