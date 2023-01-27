import { createGlobalStyle } from "styled-components"
import { secondaryColor } from "./UI/Variables";
export const GlobalStyle = createGlobalStyle`

* {    
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
    text-decoration: none;
}

body {
    background-color: ${secondaryColor};
    flex-direction: column;
    display: flex;
    height: 100vh;
}
`;