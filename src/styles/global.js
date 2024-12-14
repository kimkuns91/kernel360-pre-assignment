import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
  body {
    font-family: 'Plus Jakarta Sans', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
`;

export default GlobalStyle;