import { fontColor, primaryColor, tertiaryColor } from "../UI/Variables";
import styled from "styled-components";

export const CardsList = styled.ul`
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    list-style: none;
    height: 18.2em;
    margin: 100px 400px;
`

export const Card = styled.li`

    box-sizing: border-box;
    background-color: white;
    border-radius: 0.5em;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 100%;
    position: relative;
    width: 14em;

    .photo {
        height: 8rem;
        margin: 0.7em 3em;
        width: 8rem;
    }

    .title-price {
        align-items: center;
        display: flex;
        gap: 0.75em;
        padding: 0 0.5em;
    }

    .title {
        color: ${fontColor};
        font-size: 16px;
        font-weight: 400;
        width: 70%;
    }

    .price {
        background: ${tertiaryColor};
        border-radius: 0.5em;
        color: white;
        font-size: 15px;
        font-weight: 700;
        padding: 0.3em 0.5em;
        max-height: 1.8em;
    }

    .description {
        color: ${fontColor};
        font-size: 10px;
        text-align: left;
        padding: 1em;
        width: 100%;
    }
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