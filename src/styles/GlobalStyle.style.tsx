import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
h1,
h2,
h3,
h4,
p,
span {
    margin: 0;
    padding: 0;
}

body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}

* {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}
`;
