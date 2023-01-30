import styled from "styled-components";
import { fontColor } from "../UI/Variables"

export const CartCardList = styled.ul`
    display: flex;
    flex-direction: column;
    height: 70vh;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        background-color: #4e494990;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #ffffffc3;
        border: 1px solid grey;
        border-radius: 8px;
    }
`

export const CartCard = styled.li`
    align-items: center;
    background-color: white;
    border-radius: 0.5em;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    height: 6em;
    margin: 1.25em 1.75em;
    width: 375px;
    position: relative;

    .cartCard__image {
        padding: 0.5em;
        width: 6em;
    }

    .cartCard__title {
        color: ${fontColor};
        font-size: 13px;
        font-weight: 400;
        justify-self: left;
    }

    .cartCard__input {
        justify-self: center;
        max-height: 20px;
        max-width: 30px;
    }

    .cartCard__price {
        color: ${fontColor};
        font-size: 14px;
        font-weight: 700;
    }

    .cartCard__delete {
        color: black;
        position: absolute;
        right: -5px;
        top: -5px;
        cursor: pointer; 
    }
`