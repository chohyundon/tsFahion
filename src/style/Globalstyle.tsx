import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    }

    body {
    line-height: 1.5;
    background-color: ${({ theme }) => theme.style.backgroundColor};
    color: ${({ theme }) => theme.style.color};
    }
`;

export default GlobalStyle;
