import styled, { createGlobalStyle } from "styled-components"

//root & global styling
const GlobalStyle = createGlobalStyle`
  *, body, html {
    box-sizing: border-box;
    margin: 0;
    padding: 0 ;
    font-family: 'Poppins', sans-serif;
    max-width: 100%;

}
`;

export default GlobalStyle;