import  { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #000000;
    }


    html, body {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
    }


    body {
        line-height: 1.5;
        color: #333;
        background-color: #ffffff;
        z-index: 0;
    }
    #root {
        min-height: 100vh;
        width: 100%;
    }

`;

export default GlobalStyles;