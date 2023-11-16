import { createGlobalStyle } from "styled-components";
import {} from "../fonts/Sk-Modernist-Bold.otf"

export const GlobalStyles = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.bg};

    font-family: Modernist, sans-serif;
  }

  .logo{
    color: ${({ theme }) => theme.palette.black};
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .blue{
    color: ${({ theme }) => theme.palette.primary};
  }

  .mt{
    margin-top: 1rem;
  }

  @font-face {
    font-family: Modernist, sans-serif;
    src: url("../fonts/Sk-Modernist-Bold.otf");
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: Modernist, sans-serif;
    src: url("../fonts/Sk-Modernist-Mono.otf");
    font-weight: 400;
    font-style: monospace;
  }

  @font-face {
    font-family: Modernist, sans-serif;
    src: url("../fonts/Sk-Modernist-Regular.otf");
    font-weight: 400;
    font-style: normal;
  }
`