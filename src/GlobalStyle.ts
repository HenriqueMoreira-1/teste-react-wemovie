import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: "Open Sans", sans-serif;
        background-color: ${({ theme }) => theme.color.gray[900]};
        
        min-height: 100vh;
        display: flex;
        flex-direction: column;

        * {
            font-family: inherit;
        }
    }

    #root {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }

    img,
    picture,
    svg,
    video {
        display: block;
        max-width: 100%;
    }
`;
