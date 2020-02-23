import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: 0;
    }

    html, body, #root{
        height: 100%;
    }

    body {
        font-family: 'Roboto', sans-serif;
        color: #333;
        background: #ecf1f8;
        -webkit-font-smoothing: antialised !important;
    }

    ul {
        list-style: none;
    }
`;
