import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;

    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size: 16px;
        color: #FAFAFA60;
        margin-bottom: 20px;
    }

    a:link, a:visited {
        background-color: #0000FF60;
        color: blue;
        border: 2px solid;
        border-radius: 20px;
        padding: 5px 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
    }

    a.remover {
        background-color: #FF000060;
        color: red;
        margin-top: 20px;
    }

    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }
`