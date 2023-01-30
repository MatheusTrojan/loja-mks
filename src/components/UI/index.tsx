import styled from "styled-components";
import { primaryColor } from "./Variables";


export const Icon = styled.img`
    height: 1.15em;
    width: 1.15em;
`;

export const CartBtn = styled.a`
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 0.5em;
    color: #000000;
    cursor: pointer;
    display: flex;
    font-weight: 700;
    gap: 0.75em;
    justify-content: center;
    padding: 0.5em 1em;
`

export const BuyBtn = styled.a` 
    align-items: center;
    background: ${primaryColor};
    border: none;
    border-radius: 0 0 8px 8px;
    cursor: pointer;
    display: flex;
    gap: 0.5em;
    justify-content: center;
    padding: 0.5em;
    position: absolute;
    top: calc(100% - 30px);
    max-height: 30px;
    transition: 0.3s ease-in-out;
    width: 100%;

    :hover {
      background-color: #1767df;
    }

    img {
        height: 15px;
        margin: 0;
        width: 15px;
    }

    p {
        color: white;
        font-size: 14px;
        font-weight: 600;
    }
`

export const FinishBtn = styled.button`
    background-color: black;
    color: white;
    cursor: pointer;
    font-size: 1.75em;
    font-weight: 700;
    height: 100px;
    position: relative;
    width: 100%;
`;

export const TotalPrice = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 2em;

    .totalText {
        font-size: 1.6em;
        font-weight: 700;
    }
`;

export const ModalTitle = styled.h2`
    font-size: 1.7em;
    font-weight: 700;
    line-height: 1.25em;
    margin: 1em 1em;
    width: 50%;
`;
