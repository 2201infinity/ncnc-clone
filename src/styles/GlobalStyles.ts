import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    html,
    body,
    #root {
    height: 100%;
    }

    html {
        font-size: 14px;
    }

    body {
      background-color: #ddd;
    }

    * {
    box-sizing: border-box;
    }

    a {
    color: inherit;
    text-decoration: none;
    }

    button {
        background: inherit;
        border: none;
        box-shadow:none;
    }
    
    ol,ul,li {
        list-style: none;
    }
`;

export default GlobalStyles;
