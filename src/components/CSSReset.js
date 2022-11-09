import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${({ theme }) => theme.backgroundBase || "#FFFFFF"};
    color: ${({ theme }) => theme.textColorBase || "#222222"};
    font-family: sans-serif;
  }
  /* NextJS */
  html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  body {
    display: flex;
    flex: 1;
  }
  #__next {
    display: flex;
    flex: 1;
  }
  /* Globals */
  button,
  a {
    text-decoration: none;
    opacity: 1;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.backgroundLevel2 || "#FFFFFF"};
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(5,5,5,0.3);
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(5,5,5,0.4);
  }
`;
