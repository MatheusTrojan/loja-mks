import styled from "styled-components"
import { primaryColor } from "../UI/Variables";

export const StyledModal = styled.div`

    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    height: 100%;
    justify-content: right;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10;
/* overflow-y: auto; */

    .container {
        background-color: ${primaryColor};
        box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
        color: white;
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 450px;
    }

    .closeBtn {
        cursor: pointer;
        position: absolute;
        right: 25px;
        top: 25px;
        z-index: 1;

        :hover {
            transform: scale(1.125);
        }
    }

    .content {
        height: 90vh;
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 620px) {
        .container {
            width: 80vw;
        }
    }
`

export const TotalPrice = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 2em;

    .totalText {
        font-size: 1.6em;
        font-weight: 700;
    }

    @media (max-width: 420px) {
        margin: 1.5em;
    }
`;

export const ModalTitle = styled.h2`
    font-size: 1.7em;
    font-weight: 700;
    line-height: 1.25em;
    margin: 1em 1em;
    width: 50%;

    @media (max-width: 420px) {
        font-size: 1.4em;
    }
`; 

export const FinishBtn = styled.button`
    background-color: black;
    border: black;
    color: white;
    cursor: pointer;
    font-size: 1.75em;
    font-weight: 700;
    height: calc(100vh - 100px);
    transition: 0.3s ease-in-out;
    width: 100%;

    :hover {
        font-size: 2em;
    }

    @media (max-width: 620px) {
        font-size: 1.5em;

    :hover {
        font-size: 1.75em;
    }
    }

`