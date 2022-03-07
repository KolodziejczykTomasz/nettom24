import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    font-size: 1.6rem;
    padding: 0;
    overflow-y: hidden;
    overflow-x: hidden;
    background-color: rgb(33, 42, 57);
    font-family: ${({ theme }) => theme.font.family.montserrat};
  }
`;
