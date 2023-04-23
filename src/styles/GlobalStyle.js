import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans';
  }
  
  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }
`