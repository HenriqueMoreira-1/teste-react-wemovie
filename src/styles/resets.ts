import { createGlobalStyle } from "styled-components";

const ResetStyles = createGlobalStyle`
 html,
 body {
    padding: 0;
    margin: 0;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
    background-color: #2F2E41;
 }

 a {
   color: inherit;
   text-decoration: none;
 }

 * {
   box-sizing: border-box;
 }

 button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
  }
`;

export default ResetStyles;
